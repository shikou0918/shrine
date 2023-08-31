import React from 'react';
import { Box } from '@mui/material';
import { HeaderFavoriteButton } from './HeaderFavoriteButton';
import { HeaderShrineButton } from './HeaderShrineButton';
import { HeaderVisitedButton } from './HeaderVisitedButton';

export const HeaderRightSide = () => {

  const BoxStyle = {
    display: 'flex',
    flexFlow: 'column',
  };

  return (
    <>
      <Box sx={BoxStyle}>
        <HeaderFavoriteButton />
        <HeaderShrineButton />
        <HeaderVisitedButton />
      </Box>
    </>
  );
};
