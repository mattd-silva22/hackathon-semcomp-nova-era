import React from 'react'
import styled from 'styled-components'
import Mapa from '../Mapa'
import ReportButton from '../ReportButton'
import SearchBar from '../SearchBar'

export default function MapScreen() {
  return (
    <MapScreenContainer>
        
        <SearchBar/>
        <Mapa/>
        <ReportButton/>
        
        
    </MapScreenContainer>
  )
}


const MapScreenContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
        
    width: 100%;
    padding: 32px 0;

    flex-direction: column;
    position: relative;

    height: 100%;
    
`
