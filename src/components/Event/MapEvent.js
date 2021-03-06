import React from 'react';
import './mapEvent.scss';
import PropTypes from 'prop-types';
// leaflet
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

// const position = [latitude, longitude];
// const position2 = [48.638325, -2.003374];

const Map = ({ latitude, longitude, address }) => {
  const position = [latitude, longitude];
  return (
    <LeafletMap center={position} zoom={14} id="mapEvent">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={position}>
        <Popup>{address}</Popup>
      </Marker>
      {/* <Marker position={position2}>
        <Popup>henri.<br />Easily customizable.</Popup>
      </Marker> */}

    </LeafletMap>
  );
};
Map.propTypes = {
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};
export default Map;
