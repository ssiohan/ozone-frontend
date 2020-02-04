import React from 'react';
import './mapHomepage.scss';
// leaflet
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import PropTypes from 'prop-types';


// const position2 = [48.638325, -2.003374];

const Map = ({ latitude, longitude, address }) => {
  const position = [latitude, longitude];
  return (
    <LeafletMap center={position} zoom={14} id="map">
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
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
};
export default Map;
