import React from "react";
import { Marker } from "@react-google-maps/api";

export const ShrineMarkers = React.memo(({ lat, lng, title, onClick }) => {
  return (
    <Marker
      position={{
        lat: lat,
        lng: lng,
      }}
      title={title}
      onClick={onClick}
    />
  );
});
