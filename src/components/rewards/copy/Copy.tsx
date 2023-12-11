import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { svgs } from '../../svgs';
import './copy.scss';
import { textSpanIntersectsWithPosition } from 'typescript';
interface p{
    text: string,
    copy: string,
}
const Copy = ({text,copy}:p) => {
       const notify = () => toast.success("Copied",{position: 'top-center',autoClose: 500,});

  return (
   <div id="copy">
          <span className="link"> {text} </span>
          <CopyToClipboard  onCopy={()=> {notify()}} text={copy}>
            <button><span> {copy} </span> <span className='copyIcon'>{svgs.copy}</span> </button>
          </CopyToClipboard>
          <ToastContainer />
          </div>
  )
}

export default Copy