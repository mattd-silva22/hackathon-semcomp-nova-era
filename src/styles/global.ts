import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";

import { createGlobalStyle } from "styled-components";
const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  :root {
    --white: #ffffff;
    --cinza: #727171;
    --esmeralda: #0b7675;
    --azul-ciano: #46e3da;
    --gradiente: linear-gradient(
      93.4deg,
      #78f2eb 0%,
      #4ec9b0 59.63%,
      rgba(76, 255, 47, 0.54) 149.16%
    );
    --background-label: #b5b5b533;
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

  button {
    border: 0;
    color: var(--cinza);
    font-size: 12px;
    font-weight: 700;
    transition: all 0.2s;
  }

  button:hover {
    border: 0;
    cursor: pointer;
    filter: brightness(0.9);
  }
`;
