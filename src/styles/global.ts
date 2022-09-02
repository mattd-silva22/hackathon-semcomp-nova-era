import { createGlobalStyle } from "styled-components";
const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  :root {
    --cinza: #727171;
    --esmeralda: #0b7675;
    --azul-ciano: #46e3da;
    --gradiente: linear-gradient(
      93.4deg,
      #78f2eb 0%,
      #4ec9b0 59.63%,
      rgba(76, 255, 47, 0.54) 149.16%
    );
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    background-color: #b5b5b5;
  }

  body {
    font-family: "DM Sans", sans-serif;
    p,
    label,
    span,
    button,
    input {
      font-size: 1.6rem;
      font-family: "DM Sans", sans-serif;
    }
  }

  h1 {
    color: var(--cinza);
    font-weight: 700;
    font-size: 24px;
  }

  label {
    color: var(--cinza);
    font-weight: 700;
    font-size: 16px;
  }

  button:hover {
    border: 0;
    cursor: pointer;
    filter: brightness(0.7);
  }
`;
