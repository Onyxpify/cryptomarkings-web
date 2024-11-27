'use client'

import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react';
import Loading from '@/components/loading/Loading';

const Page = () => {
  let {username} = useParams();
  const buttonRef = useRef(null);
  const myfunc = () => {
    
  };
  useEffect(() => {
    let ele:any = buttonRef.current;
    if(ele) {
      ele.click();

    }
  }, []);
  return (
    <>
    <Link onClick={myfunc} ref={buttonRef} href={{
      pathname: '/register',
      query: { username },
  }} > </Link>
  <Loading />
  </>
  )
}

export default Page