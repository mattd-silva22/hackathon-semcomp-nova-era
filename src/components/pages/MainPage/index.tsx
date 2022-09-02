import React from 'react'
import { usePages } from '../../../hooks/usePages'
import MainNavbar from '../../MainNavbar'
import MapScreen from '../../MapScreen'
import { MainPageContainer } from './styles'



export default function MainPage() {

  const {currentPage , setPage} = usePages()
  return (
    <MainPageContainer>
        {currentPage === 'mapa' ? <MapScreen/> : ''}
        {currentPage === 'comunidade' ? 'oi'  : ''}
        {currentPage === 'user' ? 'oi' : ''}
        {currentPage === 'denuncia' ? 'oi' : ''}
        <MainNavbar/>
    </MainPageContainer>
  )
}
