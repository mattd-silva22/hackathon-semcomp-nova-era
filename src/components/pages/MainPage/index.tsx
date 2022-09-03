import React from 'react'
import { usePages } from '../../../hooks/usePages'
import MainNavbar from '../../MainNavbar'
import MapScreen from '../../MapScreen'
import ProfilePage from '../ProfilePage'
import { MainPageContainer } from './styles'



export default function MainPage() {

  const {currentPage } = usePages()
  return (
    <MainPageContainer>
        {currentPage === 'mapa' ? <MapScreen/> : ''}
        {currentPage === 'comunidade' ? 'oi'  : ''}
        {currentPage === 'user' ? <ProfilePage/> : ''}
        {currentPage === 'denuncia' ? 'oi' : ''}
        <MainNavbar/>
    </MainPageContainer>
  )
}
