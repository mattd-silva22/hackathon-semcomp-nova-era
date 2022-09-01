import React from 'react'
import  styled  from 'styled-components'
export default function Mapa() {
  return (
    <MapaContainer>
        {/* <iframe title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15550.931702772146!2d-38.52853775024416!3d-12.98892641101057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716102af3d594cd%3A0x67eb9b4743e7689b!2sTeatro%20Castro%20Alves!5e0!3m2!1spt-BR!2sbr!4v1662063328178!5m2!1spt-BR!2sbr" width="600" height="450" style={ {border: '0px'}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}

        <span className='test-mapa'>oi</span>
    </MapaContainer>
  )
}

const MapaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
    height: 500px;
    width: 100%;
    `
