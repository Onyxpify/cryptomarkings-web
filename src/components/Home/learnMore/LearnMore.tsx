import Link from 'next/link'
import React from 'react';
import './learnmore.scss';

const LearnMore = () => {
    return (
      <div id='LearnMore'>
   <Link href='#' className="learn-more">
                  Learn more <span className="icon"></span>
              </Link>
            
      </div>
  )
}

export default LearnMore