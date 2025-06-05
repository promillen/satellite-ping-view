
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Create a custom ping icon
const createPingIcon = () => {
  return L.divIcon({
    className: 'ping-marker',
    html: `
      <div class="ping-container">
        <div class="ping-dot"></div>
        <div class="ping-pulse"></div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
};

const SatelliteMap = () => {
  // Coordinates for San Francisco (you can change these to any location)
  const position: [number, number] = [37.7749, -122.4194];
  const zoomLevel = 18; // Maximum zoom for detailed view

  return (
    <div className="w-full h-screen relative">
      <MapContainer
        center={position}
        zoom={zoomLevel}
        scrollWheelZoom={false}
        dragging={false}
        zoomControl={false}
        doubleClickZoom={false}
        touchZoom={false}
        keyboard={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.esri.com/">Esri</a> &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          maxZoom={19}
        />
        <Marker position={position} icon={createPingIcon()}>
          <Popup>
            <div className="text-center">
              <h3 className="font-semibold text-lg">Location Ping</h3>
              <p className="text-sm text-gray-600">
                Lat: {position[0].toFixed(4)}<br/>
                Lng: {position[1].toFixed(4)}
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      
      {/* Overlay with location info */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg z-[1000]">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Satellite View</h2>
        <p className="text-sm text-gray-600">
          High-resolution satellite imagery<br/>
          Zoom level: {zoomLevel}x
        </p>
      </div>
    </div>
  );
};

export default SatelliteMap;
