import React from 'react'
import styled from 'styled-components'
import bg_pattern from '@assets/bg-pattern.png'

import Header from './Header/Header'
import Footer from './Footer/Footer'


const Container = styled.div`
    min-height: 100vh;
    background-image: url(${bg_pattern});
`
const DefaultLayout = ({ children }) => {
    return (
        <Container>
            <Header />
            { children }
            <Footer />
        </Container>
    )
}

export default DefaultLayout
