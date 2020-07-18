import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import APIContextProvider from '@context/api_context'

import App from './App';

ReactDOM.render(
    <APIContextProvider>
      <App />
    </APIContextProvider>,
  document.getElementById('root')
);