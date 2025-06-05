
import React, { useEffect, useRef } from 'react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import '@arcgis/core/assets/esri/themes/light/main.css';

const SatelliteMap = () => {
  const mapDiv = useRef<HTMLDivElement>(null);
  const mapView = useRef<MapView | null>(null);

  useEffect(() => {
    if (!mapDiv.current) return;

    // Create the map
    const map = new Map({
      basemap: 'satellite'
    });

    // Create the map view
    mapView.current = new MapView({
      container: mapDiv.current,
      map: map,
      center: [12.606513, 55.690362], // Copenhagen coordinates [longitude, latitude]
      zoom: 18
    });

    // Create a point geometry for the marker
    const point = new Point({
      longitude: 12.606513,
      latitude: 55.690362
    });

    // Create a symbol for the marker with pulsing effect
    const markerSymbol = new SimpleMarkerSymbol({
      color: [255, 0, 0, 0.8],
      outline: {
        color: [255, 255, 255],
        width: 2
      },
      size: 12
    });

    // Create a graphic and add it to the view
    const pointGraphic = new Graphic({
      geometry: point,
      symbol: markerSymbol
    });

    mapView.current.graphics.add(pointGraphic);

    // Disable navigation for a locked view
    mapView.current.when(() => {
      if (mapView.current) {
        mapView.current.navigation.mouseWheelZoomEnabled = false;
        mapView.current.navigation.browserTouchPanEnabled = false;
        mapView.current.popup.dockEnabled = true;
        mapView.current.popup.dockOptions = {
          buttonEnabled: false,
          breakpoint: false
        };
      }
    });

    // Cleanup function
    return () => {
      if (mapView.current) {
        mapView.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full h-screen relative">
      <div ref={mapDiv} className="w-full h-full" />
      
      {/* Overlay with location info */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg z-[1000]">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Satellite View</h2>
        <p className="text-sm text-gray-600">
          High-resolution satellite imagery<br/>
          Powered by ArcGIS
        </p>
      </div>
    </div>
  );
};

export default SatelliteMap;
