import React from 'react'
import MainNavbar from '../../MainNavbar'
import MapScreen from '../../MapScreen'
import { MainPageContainer } from './styles'

export default function MainPage() {
  return (
    <MainPageContainer>
        <MapScreen/>
        <MainNavbar/>
    </MainPageContainer>
  )
}
