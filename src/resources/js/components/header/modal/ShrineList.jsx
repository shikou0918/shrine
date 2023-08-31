import * as React from 'react';

import { Modal, Box } from '@mui/material'

export const ShrineList = ({ setModalDisp, modalDisp }) => {

  const modalShrineList = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '1400px',
    height: '620px',
    padding: '16px 15px 18px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.2)',
    transform: 'translate(-50%, -50%)',
    boxSizing: 'border-box'
  }

  const handleClose = () => setModalDisp(false)

  return (
    <>
      <Modal open={modalDisp} onClose={handleClose}>
        <Box sx={modalShrineList}>
        </Box>
      </Modal>
    </>
  );
};
