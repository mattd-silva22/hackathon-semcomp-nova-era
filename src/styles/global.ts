import { createGlobalStyle } from 'styled-components'
const styled = { createGlobalStyle }

export const GlobalStyle = styled.createGlobalStyle`
     * {
        margin : 0px;
        padding: 0px;
        box-sizing: border-box;
        
    }

    html {
         font-size: 62.5%;
         background-color: #B5B5B5;
    }

    body {
        font-family: 'DM Sans', sans-serif;
        p,label,span,button,input {
            font-size: 1.6rem;
            font-family: 'DM Sans', sans-serif;
        }
    }

    button:hover {
        cursor: pointer;
        filter: brightness(0.7);
    }
`