import React from 'react'
import  styled  from 'styled-components'

export default function Mapa() {

  return (
    <MapaContainer>
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
