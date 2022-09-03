import React, { useEffect } from "react";
import styled from "styled-components";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";

const addressPoints: L.HeatLatLngTuple = [51.505, -0.09, 123];

export default function Mapa() {
  return (
    <MapaContainer>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <LeafletMapa />
      </MapContainer>
    </MapaContainer>
  );
}

function LeafletMapa() {
  const map = useMap();

  useEffect(() => {
    const points = [addressPoints];

    L.heatLayer(points, {
      radius: 10,
      blur: 24,
      maxZoom: 13,
    }).addTo(map);
  }, [map]);
  return (
    <>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  );
}

const MapaContainer = styled.div`
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;

  .leaflet-container {
    height: calc(100vh - 100px);
  }

  .leaflet-tile {
    filter: var(--leaflet-tile-filter, none);
  }

  .leaflet-container {
    background: #303030;
  }
`;
