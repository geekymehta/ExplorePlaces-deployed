import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  useEffect(() => {
    // Initialize the map
    const map = L.map("map").setView(
      [props.center.lat, props.center.lng],
      props.zoom
    );

    // Add the OpenStreetMap layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker to the map
    const marker = L.marker([props.center.lat, props.center.lng]).addTo(map);
    marker.bindPopup(props.title).openPopup();
  }, [props.center, props.zoom, props.title]);

  return (
    <div id="map" style={{ width: "100%", height: "400px" }}>
      {/* The map will be rendered here */}
    </div>
  );
};

export default Map;
