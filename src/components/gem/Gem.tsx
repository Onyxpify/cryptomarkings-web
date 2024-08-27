import { useTab } from '../hooks/useTab'
import { gemTab } from './gemData'

const Gem = () => {
  let {tab,component} = useTab({data:gemTab,render: 'gem'});
  return (
    <div>
      <div className="flex items-center justify-center "> {tab} </div>
      <div className=""> {component} </div>
    </div>
  )
}

export default Gem