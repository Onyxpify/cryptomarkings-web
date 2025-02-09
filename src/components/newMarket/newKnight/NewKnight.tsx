import { newKightTable } from '../newManual/newManualData'
import TableIconsTw from '../../table/TableIconsTw'
import React from 'react'

const NewKnight = () => {
  return (
    <div className="mt-9 ">
    <TableIconsTw data={newKightTable}  />
    </div>
  )
}

export default React.memo(NewKnight)