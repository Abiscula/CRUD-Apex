import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StatesProvider } from './Provider/States';


ReactDOM.render(
  <React.StrictMode>
    <StatesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StatesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

