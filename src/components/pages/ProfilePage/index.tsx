import React from 'react'
import { useDb } from '../../../hooks/useDb'
import OngCard from '../../OngCard'
import { ProfilePageContainer } from './styles'
 
export default function ProfilePage() {

  const { usersList ,ongsList} = useDb()
  const testUser = usersList[1]
  return (
    <ProfilePageContainer>
        <div className="user-profile-area">
            <div className="user-info">
              <div className="user-img-container">
                <img 
                    alt="" 
                    className="user-img" 
                    src={testUser.image}
                    />
              </div>
                
                <h1 className="user-name-area">
                  {testUser.name}
                </h1>

                <p className="user-description">
                {testUser.description}
                </p>

                <div className="medals-area">

                </div>
            </div>
        </div>

        <div className="user-ong-area">
          <h1 className="title-area">
            Instituições apoiada  
          </h1>
          <div className="ong-list">
              {ongsList.map(ong=>{
                return (
                  <OngCard 
                    name={ong.name} 
                    description={ong.description} 
                    image={ong.image} 
                    meta={ong.meta} 
                    valorAtual={ong.valorAtual}
                  />
                )
              })}

          </div>
        </div>


        
    </ProfilePageContainer>
  )
}
