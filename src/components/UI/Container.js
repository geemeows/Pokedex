import React from 'react'
import styled from 'styled-components'

import device from '@utils/responsive_helper'

const UIContainer = styled.div`
    margin: 0 auto;
    @media ${device.laptop} {
        max-width: 1100px;
    }
    @media ${device.tablet} {
        max-width: 625px;
    }
    @media ${device.mobile} {
        max-width: 280px;
    }
`
const Container = ({ children }) => {
    return (
        <UIContainer>
            { children }
        </UIContainer>
    )
}

export default Container
