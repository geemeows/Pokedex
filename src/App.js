import React from 'react';
import DefaultLayout from '@layouts'
import Home from '@containers/Home/Home'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    h1, h2, h3, h4, h5, p, span {
      font-family: 'Source Sans Pro', sans-serif;

    }
`

const App = () => {
  return (
      <React.Fragment>
        <GlobalStyles />
        <DefaultLayout>
            <Home />
        </DefaultLayout>
      </React.Fragment>
  );
}

export default App;
