import { Link } from 'react-router-dom'
import './header.scss';
import React from 'react';

const Header = (props:any) => {
  return (
    <div className="Header">
              <div className="line1">
                   <Link to={'/'} className="icon">
                 {props.icon}
              </Link>
              <div className="text">
                  {props.text}
              </div>
             </div>

              <div className={`subheader ${props.class}`}>
                  {props.comp}
              </div>
          </div>
  )
}

export default React.memo(Header)