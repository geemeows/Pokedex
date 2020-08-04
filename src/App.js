import React from 'react'
import DefaultLayout from '@layouts'
import Home from '@containers/Home/Home'
import Pokemon from '@containers/Pokemon/Pokemon'
import NotFound from '@containers/404/NotFound'
import { createGlobalStyle } from 'styled-components'
import { Route, Switch, Redirect } from 'react-router-dom'

const GlobalStyles = createGlobalStyle`
    h1, h2, h3, h4, h5, p, span {
      font-family: 'Source Sans Pro', sans-serif;

    }
`

const App = () => (
	<>
		<GlobalStyles />
		<DefaultLayout>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/pokemon' component={Pokemon} />
				<Route path='/404' component={NotFound} />
				<Redirect to='/404' />
			</Switch>
		</DefaultLayout>
	</>
)

export default App
