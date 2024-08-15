import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { svgs } from '../svgs';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface p{
  handleClose: any,
  open: boolean,
  action: any
}

export default function AlertDialogSlideConfirm({open,handleClose,action}:p) {
  

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={()=> handleClose()}
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle>{"Use Google's location service?"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           <div className="flex flex-col gap-4 items-center justify-center">
            <span className='h-[67.2px] flex items-center justify-center w-[67.2px]  object-cover '> {svgs.attention} </span>
            <h6 className='font-lato text-center font-bold text-[18px] leading-5 text-mainText '> Risk Warning </h6>
            <span className='font-lato text-center font-normal text-[18px] leading-5 text-bodyText '>Cryptocurrencies are volatile and past performance of a trader does not guarantee future success.
            Note that it is your responsibility and decision to copy this trade</span>
           </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions className=''>
          <div className="flex w-full gap-4 items-center justify-center">
          <button className='font-lato font-normal text-[18px] leading-5 text-white py-4 px-8 rounded-2xl bg-pri w-[128px] h-[54px]  ' onClick={()=> {handleClose(); action()}}>Accept</button>
          <button className='font-lato font-normal text-[18px] leading-5 text-pri py-4 px-8 rounded-2xl border border-pri bg-transparent w-[128px] h-[54px]  ' onClick={()=> handleClose()}>Cancel</button>
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
