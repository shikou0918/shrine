import React from 'react';
import { Box, Typography } from '@mui/material';
import { HeaderRightSide } from './HeaderRightSide';

export const Header = () => {
  return (
    <Box
      position="fixed"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: 3,
        background: '#00aaec',
        width: '100%',
        height: '95px',
        padding: '0 20px',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" component="h1" sx={{ color: '#fff', fontWeight: 'bold' }}>
          神社さがしGO
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexFlow: 'row' }}>
        <HeaderRightSide />
      </Box>
    </Box>
  );
};
