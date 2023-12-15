import React from 'react';
import './binaryline1.scss';
import LearnMore from '../../../../learnMore/LearnMore';
import { svgs } from '../../../../svgs';
interface p{
    text: string,
}
const Binary_Line1 = ({text}:p) => {
  return (
      <div id='Binary_Line1'>
            <h5> {text} {svgs.alert_circle} </h5>
            <div>
              <LearnMore />
          </div>
    </div>
  )
}

export default Binary_Line1