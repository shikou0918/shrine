import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Shrine from "./Shrine";
import axios from 'axios';
import { Marker } from "@react-google-maps/api";

const containerStyle = {
  height: "100vh",
  width: "100%",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

export const MainGoogleMap = ({ GoogleApiKey }) => {
  const [shrineInformation, setShrineInformation] = useState([]);

  useEffect(() => {
    const fetchShrines = async () => {
      try {
        const response = await axios.get('/api/shrines', {
          params: {
            lat: center.lat,
            lng: center.lng,
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
  }, []);

  return (
    <>
      <LoadScript googleMapsApiKey={GoogleApiKey ? GoogleApiKey : ""}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
         {shrineInformation.map((shrine) => (
            <Marker
              key={shrine.id}
              position={{
                lat: shrine.geometry.location.lat,
                lng: shrine.geometry.location.lng
              }}
              title={shrine.name}
            />
          ))}
          <Shrine shrineInformation={shrineInformation} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

