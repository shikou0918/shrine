import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

export const ShrineDetail = React.memo(({ selectedShrine, GoogleApiKey }) => {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    if (selectedShrine && selectedShrine.photos) {
      const photoReference = selectedShrine.photos[0].photo_reference;
      const width = 400;
      const height = 300;
      const url = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoReference}&key=${GoogleApiKey}&maxwidth=${width}&maxheight=${height}`;
      setPhotoUrl(url);
      setIsImageVisible(false); // 新しい写真を読み込む前に非表示にする
    }
  }, [selectedShrine]);

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

  useEffect(() => {
    if (photoUrl) {
      // 写真が読み込まれたら表示を切り替える
      setIsImageVisible(true);
    }
  }, [photoUrl]);

  return (
    selectedShrine && (
      <Box sx={infoWindowStyle}>
        <h3>{selectedShrine.name}</h3>
        {photoUrl && (
          <img
            className={`transitioning-image ${isImageVisible ? 'visible' : 'hidden'}`}
            src={photoUrl}
            alt="Shrine Photo"
          />
        )}
      </Box>
    )
  );
});
