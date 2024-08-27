import { useMarketTable2 } from "../hooks/useMarketTable2"
import { gemSignalTable } from "./gemData"

const Signals = () => {

  return (
    <div>
        {
            useMarketTable2({data: gemSignalTable,render: 'gem'})
        }
    </div>
  )
}

export default Signals