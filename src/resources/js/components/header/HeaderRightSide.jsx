import React from 'react';
import { Box } from '@mui/material';
// import { DefaultButtonEmotion } from '../DefaultButtonEmotion';
import { ShrineList } from './modal/ShrineList';
import { FavoriteList } from './modal/FavoriteList';
import { VisitedList } from './modal/VisitedList';

export const HeaderRightSide = () => {

  const BoxStyle = {
    display: 'flex',
    flexFlow: 'column',
  };

  return (
    <>
      <Box sx={BoxStyle}>
        <ShrineList />
        <FavoriteList />
        <VisitedList />
      </Box>
    </>
  );
};
