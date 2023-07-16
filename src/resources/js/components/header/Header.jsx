import React from 'react';
import { Box } from '@mui/material';

export const Header = () => {
  return (
    <Box position="fixed" sx={{ boxShadow: 3, background: '#00aaec', width: '100%', height: '94px' }}>
      <Box alt="Shrine" sx={{ marginTop: '25px', marginLeft: '20px', width: '114px', height: '44px' }} />
    </Box>
  );
};
