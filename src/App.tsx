import React from "react";
import MainPage from "./components/pages/MainPage";
import styled from "styled-components";
import { GlobalStyle } from "./styles/global";
import { PageContextProvider } from "./context/PageContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <PageContextProvider>
      <AppContainer id="app">
        <GlobalStyle />
        <MainPage />
        <ToastContainer />
      </AppContainer>
    </PageContextProvider>
  );
}

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default App;
