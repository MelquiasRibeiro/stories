import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import history from './services/history';

function App() {
  return (
    <BrowserRouter history={history}>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
