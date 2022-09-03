import  styled  from 'styled-components'


export const ProfilePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: #fff;

    width: 100%;
    height: 100%;

    .user-profile-area {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        background-image: url("./assets/user-bg.png"); 
        background-repeat: no-repeat;
        background-position:center ;
        background-size: cover;
        

        .user-info {
            
            padding: 32px 32px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
        }
        .user-img-container {
            background: radial-gradient(162.46% 520.88% at 9.83% 3.6%, rgba(255, 255, 255, 0.56) 0%, rgba(217, 217, 217, 0.08) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
            background-blend-mode: overlay;
            backdrop-filter: blur(12px);
            border-radius: 100%;
            border-width: 8px;

            display: flex;
            align-items: center;
            justify-content: center;
            height: 197px;
            width: 197px;
        }
       .user-img {
        width: 162px;
        height: 162px;
        max-width: 162px;
        max-height: 162px;
        border-radius: 100%; 
        backdrop-filter: blur(12px);
    
        
       } 

       .user-name-area {
            color: #FFFFFF;
            font-size: 24px;
            font-weight: 900;
       }
       .user-description {
            color: #ffeeef;
            font-weight: 600;
            font-size: 12px;
       }

       .medals-area {

       }
    }

    .user-ong-area {
        
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 10px;
        gap: 12px;

        h1.title-area {
            width: 100%;
            text-align: left;
        }
        .ong-list{
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px 0;
        }
    }
`