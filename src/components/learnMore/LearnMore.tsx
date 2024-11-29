import './learnmore.scss';
import { Link } from 'react-router-dom';
import { svgs } from '../svgs';
import React from 'react';
interface p{
  text?: string,
}
const LearnMore = ({text}:p) => {
    return (
      <div id='LearnMore'>
   <Link to='#' className="learn-more">
                 {text?text: 'See more'} <span className="icon"> {svgs.gt} </span>
              </Link>
            
      </div>
  )
}

export default React.memo(LearnMore)