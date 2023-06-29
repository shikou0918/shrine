import React from "react";

function Shrine({ shrineInformation }) {
  return (
    <div>
      <div id="map" style={{ width: '100%', height: '400px' }} />
      <ul>
        {shrineInformation.map((shrine) => (
          <li key={shrine.place_id}>{shrine.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Shrine;
