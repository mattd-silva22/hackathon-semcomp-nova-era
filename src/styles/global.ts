import "react-dropdown/style.css";
import "react-datepicker/dist/react-datepicker.css";
import "leaflet/dist/leaflet.css";
import "react-toastify/dist/ReactToastify.css";

import { createGlobalStyle } from "styled-components";
const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  :root {
    --leaflet-tile-filter: brightness(0.6) invert(1) contrast(3)
      hue-rotate(200deg) saturate(0.3) brightness(0.7);

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
    --background-label2: #f0f0f0;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  html {
    font-size: 62.5%;
    background-color: #b5b5b5;
  }

  body {
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
