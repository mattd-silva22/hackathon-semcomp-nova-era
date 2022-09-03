import  styled  from 'styled-components'


export const ProfilePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: green;
    border: 1px solid red;

    width: 100%;
    height: 100%;

    .user-profile-area {
        display: flex;
        background-color: red;
        width: 100%;
        align-items: center;
        justify-content: center;
        background-image: url("./assets/user-bg.png");

        .user-info {
            
            padding: 32px 32px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
        }

       .user-img {
        width: 162px;
        height: 162px;
        max-width: 162px;
        max-height: 162px;
        border-radius: 100%; 
        border-style: solid;
        border-width: 15px;
        border-image: linear-gradient(162.46% 520.88% at 9.83% 3.6%, rgba(255, 255, 255, 0.56) 0%, rgba(217, 217, 217, 0.08) 100%);
        backdrop-filter: blur(12px);
        img {
              
            }
       } 
    }
`