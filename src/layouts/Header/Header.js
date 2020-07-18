import React from 'react'
import styled from 'styled-components'
import Container from '@components/UI/Container'

const HeaderContainer = styled.header`
    background: #e5cedc;
    padding: 20px;
    margin-bottom: 20px;
`
export const Image = styled.img`
    width: 40px;
    height: auto
`
const Logo = styled.div`
    display: flex;
    align-items: center;
`
const LogoHeading = styled.h1`
    margin: 0;
    font-weight: bold;
    text-transform: uppercase;
    
`
const Header = () => {
    return (
        <HeaderContainer className="header">
            <Container>
                <Logo>
                    <Image src={`${process.env.PUBLIC_URL}/pokemon_logo.svg`} alt="app logo" />
                    <LogoHeading>Pokédex</LogoHeading>
                </Logo>
            </Container>
        </HeaderContainer>
    )
}
export default Header
