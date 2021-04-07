import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import MapGL, { Marker, Popup } from "react-map-gl";
//import * as parkDate from "./skateboard-parks.json";
import { useEffect } from "react";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYW51YWdhcndhbCIsImEiOiJja24zYnY4YTUwNXp1MndzOXFzN3V4bzkwIn0.JN0rZmOSqXk7IWSrk4eu5Q";

export default function Root() {
  const [viewport, setViewport] = useState({
    latitude: 22.22691236594665,
    longitude: 84.82434434265838,
    zoom: 14,
    bearing: 0,
    pitch: 30
  });
  // const [selectedPark, setSelectedPark] = useState(null);

  // useEffect(() => {
  //   const listener = (e) => {
  //     if (e.key === "Escape") {
  //       setSelectedPark(null);
  //     }
  //   };
  //   window.addEventListener("keydown", listener);

  //   return () => {
  //     window.removeEventListener("keydown", listener);
  //   };
  // }, []);

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      {/* {" "}
      {parkDate.features.map((park) => (
        <Marker
          key={park.properties.PARK_ID}
          latitude={park.geometry.coordinates[1]}
          longitude={park.geometry.coordinates[0]}
        >
          <button
            className="marker-btn"
            onClick={(e) => {
              e.preventDefault();
              setSelectedPark(park);
            }}
          >
            <img src="/skateboarding.svg" alt="Skate Park Icon" />
          </button>
        </Marker>
      ))}
      {selectedPark ? (
        <Popup
          latitude={selectedPark.geometry.coordinates[1]}
          longitude={selectedPark.geometry.coordinates[0]}
          onClose={() => {
            setSelectedPark(null);
          }}
        >
          <div>
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTIO}</p>
          </div>
        </Popup>
      ) : null} */}
    </MapGL>
  );
}

document.body.style.margin = 0;
//render(<Root />, document.body.appendChild(document.createElement("div")));