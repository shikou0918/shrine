import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, InfoWindow, Marker } from "@react-google-maps/api";
import { Shrine } from "./Shrine";
import axios from 'axios';

const containerStyle = {
  height: "100vh",
  width: "100%",
};

const initializeCenter = {
  lat: 35.69575,
  lng: 139.77521,
};

export const MainGoogleMap = ({ GoogleApiKey }) => {
  const [shrineInformation, setShrineInformation] = useState([]);
  const [selectedShrine, setSelectedShrine] = useState(null);

  const [infoWindowPosition, setWindowPosition] = useState(null);
  const [center, setCenter] = useState(initializeCenter);
  const [map, setMap] = useState(null);

  // GoogleMapのLoadCallback
  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const handleOnChange = () => {
    if (map) {
      // Mapの中心を更新
      const newCenter = {
        lat: map.getCenter().lat(),
        lng: map.getCenter().lng()
      };

      setCenter(newCenter);

      const fetchShrines = async () => {
        try {
          const response = await axios.get('/api/shrines', {
            params: {
              lat: newCenter.lat,
              lng: newCenter.lng,
              language: 'ja'
            }
          });
          const shrinesWithId = response.data.results.map((shrine, index) => ({
            ...shrine,
            id: index + 1, // 一意のIDを生成して神社情報に追加
          }));
          setShrineInformation(shrinesWithId);
        } catch (error) {
          console.error(error);
        }
      };
      fetchShrines();
    }
  };

  useEffect(() => {
    if (selectedShrine) {
      const position = {
        lat: selectedShrine.geometry.location.lat,
        lng: selectedShrine.geometry.location.lng
      }
      setWindowPosition(position);
    }
  }, [selectedShrine]);

  return (
    <>
      <LoadScript googleMapsApiKey={GoogleApiKey ? GoogleApiKey : ""}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          onLoad={onLoad}
          onZoomChanged={handleOnChange}
          onDragEnd={handleOnChange}
          zoom={17}
        >
          {shrineInformation.map((shrine) => (
            <Marker
              key={shrine.id}
              position={{
                lat: shrine.geometry.location.lat,
                lng: shrine.geometry.location.lng
              }}
              title={shrine.name}
              onClick={() => setSelectedShrine(shrine)}
            />
          ))}
          {infoWindowPosition && (
            <InfoWindow
              position={infoWindowPosition}
              onCloseClick={() => {
                setSelectedShrine(null);
                setWindowPosition(null);
              }}
            >
              <Shrine selectedShrine={selectedShrine} GoogleApiKey={GoogleApiKey} />
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </>
  );
};
