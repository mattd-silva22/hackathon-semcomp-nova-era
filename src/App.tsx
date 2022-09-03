import React from 'react';
import MainPage from './components/pages/MainPage';
import  styled  from 'styled-components'
import {GlobalStyle} from './styles/global'
import 'mapbox-gl/dist/mapbox-gl.css';
import { PageContextProvider } from './context/PageContext';
import { DbContextProvider } from './context/Dbcontext';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <DbContextProvider>
      <PageContextProvider>
        <AppContainer id='app'>
              <GlobalStyle/>
              <MainPage/>
              <ToastContainer />
        </AppContainer>
      </PageContextProvider>
    </DbContextProvider>
    
  );
}

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default App;
