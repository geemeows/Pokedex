import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import APIContextProvider from '@context/api_context'
import { BrowserRouter } from 'react-router-dom'

import App from './App';

ReactDOM.render(
    <BrowserRouter>
      <APIContextProvider>
        <App />
      </APIContextProvider>
    </BrowserRouter>,
  document.getElementById('root')
);