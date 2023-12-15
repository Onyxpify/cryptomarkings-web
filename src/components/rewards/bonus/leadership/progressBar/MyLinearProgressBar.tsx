import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

interface p{
    value?: number,
    bg?: string,
    bg_progress?: string,
    height?: number
    radius?: number
}
const MyLinearProgressBar = ({value,bg,bg_progress,height,radius}:p) => {
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: height?height:15,
  borderRadius:  radius?radius:36,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: bg?bg:'#95CEA5',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: radius?radius:36,
    backgroundColor: bg_progress?bg_progress: '#003D2B',
  },
}));
  return (
      <div id='MyLinearProgressBar'>
           <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={value?value: 50} />
    </Box>
    </div>
  )
}

export default MyLinearProgressBar