import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Linearprogress() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress sx={{borderRadius: '16px'}} />
    </Box>
  );
}
