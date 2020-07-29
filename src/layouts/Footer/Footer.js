import React from 'react'
import { HeaderContainer } from '@layouts/Header/Header'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

const FooterContainer = styled(HeaderContainer)`
    margin-bottom: 0;
    margin-top: 10px;
    text-align: center;
`

const Footer = () => {
    return (
        <FooterContainer>
            Made with
            &nbsp;
            <Icon name="heart" color="red" />
            and 
            &nbsp;
            <Icon name="react" color="blue" />
        </FooterContainer>
    )
}

export default Footer