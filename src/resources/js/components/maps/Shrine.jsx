import React from 'react';
import { Box } from '@mui/material';

export const Shrine = React.memo(({ selectedShrine, GoogleApiKey }) => {
  const infoWindowStyle = {
    width: '428px',
    height: 'auto',
    maxHeight: '488px',
    backgroundColor: 'white',
    marginTop: '50px',
    marginBottom: '10px',
    fontSize: 14,
    zIndex: 100,
  };

  let photoUrl = null;
  if (selectedShrine && selectedShrine.photos && selectedShrine.photos.length > 0) {
    const photoReference = selectedShrine.photos[0].photo_reference;
    const width = 400;
    const height = 300;
    photoUrl = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoReference}&key=${GoogleApiKey}&maxwidth=${width}&maxheight=${height}`;
  }

  return (
    selectedShrine && (
      <Box sx={infoWindowStyle}>
        <h3>{selectedShrine.name}</h3>
        <p>{selectedShrine.description}</p>
        {photoUrl && <img src={photoUrl} alt="Shrine Photo" />}
        {/* その他の神社情報を表示する */}
      </Box>
    )
  );
});
