
import TableIconsTw from '../../table/TableIconsTw';
import { newManualTable } from './newManualData';

const NewManual = () => {
  return (
      <div id='NewManual'>
        
      <div className="mt-9 ">
      <TableIconsTw data={newManualTable} unit='%' />
      </div>
    </div>
  )
}

export default NewManual