import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
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
  name: string,
}

export default React.memo(function AlertDialogSlide({open,handleClose,name}:p) {
  

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
            <h6 className='font-lato text-center font-bold text-[18px] leading-5 text-mainText '> Success </h6>
            <span className='font-lato font-normal text-[18px] leading-5 text-bodyText '>You have copied {name}’s trading successfully</span>
           </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions className='flex items-center justify-center'>
          <button className='font-lato font-normal text-[18px] leading-5 text-white py-4 px-8 rounded-2xl mx-auto bg-pri w-[128px] h-[54px]  ' onClick={()=> handleClose()}>Go back</button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
});
