'use client';

import Link from 'next/link';
import { Dispatch, SetStateAction, useState, useEffect, useRef, useCallback } from 'react';
import { NavData, navDataType } from '../Navbar/navbarData';
import Image from 'next/image';

interface MobileDropdownProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileDropdown({ isOpen, setIsOpen }: MobileDropdownProps) {
  const [closing, setClosing] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

 
  const closeDropdown = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setClosing(false);
    }, 300); // match animation timing
  }, [setIsOpen]);


  useEffect(() => {
    if (!isOpen) {
      setClosing(false);
    }
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (isOpen) {
          closeDropdown();
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeDropdown, isOpen]);

  return (
     
       <div  className="w-full h-[100vh] fixed top-0 left-0 bg-transparent backdrop-blur-[10px] z-[100] ">
         <div ref={dropdownRef}
          className={`absolute right-0 top-0 mt-2 w-[300px] min-h-[90vh] bg-white rounded-md shadow-lg overflow-hidden z-[101] ${
            closing ? 'animate-jump-out' : 'animate-jump-in'
          }`}
        >
            <Image src="/png/Logo3.png" width={200} height={200} alt='Blacktinum' className='w-[200px] h-[200px] mx-auto ' loading='lazy' />
          <ul className="flex flex-col">
            {NavData.map((item: navDataType) => (
              <li key={item.id} className="border-b last:border-b-0 animate-fade-down">
                {item.to.startsWith('http') ? (
                  <a
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 ${item.class} ${item.active}`}
                  >
                    {item.text}
                  </a>
                ) : (
                  <Link
                    href={item.to}
                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 ${item.class} ${item.active}`}
                  >
                    {item.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
       </div>
  );
}
