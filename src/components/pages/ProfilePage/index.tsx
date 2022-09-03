import React from 'react'
import { ProfilePageContainer } from './styles'
 
export default function ProfilePage() {
  return (
    <ProfilePageContainer>
        <div className="user-profile-area">
            <div className="user-info">
                <img 
                   alt="" 
                   className="user-img" 
                   src='https://observatoriodosfamosos.uol.com.br/portal/wp-content/uploads/2021/08/Juliana-Caetano.jpg'
                   />
                <h1 className="user-name-area">
                  fulano
                </h1>

                <p className="user-description">
                  Gente fina
                </p>

                <div className="medals-area">

                </div>
            </div>
        </div>

        <div className="user-ong-area">
          <h1>ola</h1>
        </div>
    </ProfilePageContainer>
  )
}
