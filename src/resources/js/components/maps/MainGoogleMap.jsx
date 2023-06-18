import * as React from "react";
import {
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";

const containerStyle = {
  height: "100vh",
  width: "100%",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

export const  MainGoogleMap = ({GoogleApiKey}) =>  {
  return (
    <>
      <LoadScript googleMapsApiKey={GoogleApiKey ? GoogleApiKey : ''}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
        ></GoogleMap>
      </LoadScript>
    </>
  );
}
