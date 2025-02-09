import './binaryline1.scss';
import LearnMore from '../../../../learnMore/LearnMore';
import { svgs } from '../../../../svgs';
import React from 'react';
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

export default React.memo(Binary_Line1)