import Link from 'next/link'
import React from 'react';
import './fourbtn.scss'
interface props{
    style?: string,
}
const FourBtn = ({style}:props) => {
  return (
    <div id={style?style: ''} className="FourBtn">
                          <div  className="bt">
                              <Link className='get-started' href='/register'>Get Started</Link>
                          <Link className='watch' href='#'>Watch Video</Link>
                      </div>
                          <div className="stores">
                 <Link className='apple' href={'#'}>  </Link>
                 <Link className='play' href={'#'}>  </Link>
              </div>
                  </div>
  )
}

export default FourBtn