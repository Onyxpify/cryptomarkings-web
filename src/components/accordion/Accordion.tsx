import React from 'react';
import { useAccordion } from '../hooks/useAccordion';


interface p{
  data: any[],
  render: string,
}
const MyAccordion = ({data,render}:p) => {
  let Rendertype = useAccordion(data,render);
  
  return (
      <div id='Accordion'>
          {
            Rendertype
          }
    </div>
  )
}

export default React.memo(MyAccordion)