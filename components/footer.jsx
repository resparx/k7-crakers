import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 9.3758566,
  lng: 77.7795919,
};

const Footer = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <footer className="flex">
      <div className="h-[400px] relative w-full m-4 rounded-xl overflow-hidden">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            defaultZoom={5}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </footer>
  );
};

export default Footer;
