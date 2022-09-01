import React from 'react'
import styled from 'styled-components'
import ReportButton from '../ReportButton'
import SearchBar from '../SearchBar'

export default function MapScreen() {
  return (
    <MapScreenContainer>
        <div className="test">
        <SearchBar/>
        <ReportButton/>
        </div>
        
    </MapScreenContainer>
  )
}


const MapScreenContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    .test {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: green;
        height: 500px;
        width: 100%;
        padding: 32px 0;

        flex-direction: column;
    }
`
