import React from 'react'
import  styled  from 'styled-components'
import { MapContainer, TileLayer } from 'react-leaflet'

export default function Mapa() {

  return (
    <MapaContainer>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
      </MapContainer>
    </MapaContainer>
  )
}

const MapaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
    position: absolute;
    top: 0;
    
    height: 100%;
    width: 100%;
    max-width: 512px;
    max-height: 980px;
    `
