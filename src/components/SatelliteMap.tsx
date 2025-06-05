
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

    // Create the map view with fixed zoom level
    mapView.current = new MapView({
      container: mapDiv.current,
      map: map,
      center: [12.606513, 55.690362], // Copenhagen coordinates [longitude, latitude]
      zoom: 19 // Fixed zoom level
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
        // Disable interactive navigation
        mapView.current.navigation.mouseWheelZoomEnabled = false;
        mapView.current.navigation.browserTouchPanEnabled = false;
        
        // Configure popup settings
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
    <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg">
      <div ref={mapDiv} className="w-full h-full" />
      
      {/* Small overlay with location info */}
      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-md px-3 py-2 shadow-md z-[1000]">
        <p className="text-xs text-gray-600">
          Glacier #1<br/>
          <span className="text-xs text-gray-500">Plant east of pool door</span>
        </p>
      </div>
    </div>
  );
};

export default SatelliteMap;
