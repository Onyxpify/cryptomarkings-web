import { useState } from 'react'
import DepositeLine1 from '../../dashboard/dash_line1/deposite/depositeLine1/DepositeLine1'
import Dashboard from '../../dashboard/Dashboard'
import Profile_start from './Profile_start'
import Profile_comfirm from './Profile_comfirm'
interface p {
    each: any,
}
const Profile = ({ each }: p) => {
    let [toggle,setToggle] = useState(false);

    return (
        <div className=''>
            <DepositeLine1 title='Trader List' component={<Dashboard />} />
           {
             !toggle && <Profile_start setToggle={setToggle} each={each} />
           }
           {
             toggle && <Profile_comfirm setToggle={setToggle} each={each} />
           }

        </div>
    )
}

export default Profile
