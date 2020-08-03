import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import bgPattern from '@assets/bg-pattern.png'

import Header from './Header/Header'
import Footer from './Footer/Footer'

const Container = styled.div`
    min-height: 100vh;
    background-image: url(${bgPattern});
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
`
const DefaultLayout = ({ children }) => (
  <Container>
    <Header />
    { children }
    <Footer />
  </Container>
)

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default DefaultLayout
