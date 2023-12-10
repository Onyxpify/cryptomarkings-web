import React from 'react'
import { Link } from 'react-router-dom';
import './icontextbtn.scss';

interface p{
    bg?: string,
    icon: any,
    text: string,
    color?: string,
    href: string,
}
const IconTextBtn = ({bg,
icon,
text,
color,
    href,}:p) => {
  return (
      <Link style={{backgroundColor: bg,color: color}} to={href} id='IconTextBtn'>
          <span className="icon">
             {icon}
          </span>
          <span className="text">
              {text}
          </span>
    </Link>
  )
}

export default IconTextBtn