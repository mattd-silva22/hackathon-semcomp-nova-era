import React from 'react';
import MainPage from './components/pages/MainPage';
import  styled  from 'styled-components'
import {GlobalStyle} from './styles/global'

function App() {
  return (
    <AppContainer id='app'>
      <GlobalStyle/>
      <MainPage/>
    </AppContainer>
  );
}


const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid red;

  
  

`

export default App;
