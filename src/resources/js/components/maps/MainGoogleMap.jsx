import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Shrine from "./Shrine";
import axios from 'axios';

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
        console.log(response);
        setShrineInformation(response.data.results);
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
          <Shrine shrineInformation={shrineInformation} />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

