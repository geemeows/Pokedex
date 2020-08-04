import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import device from '@utils/responsive_helper'

const UIContainer = styled.div`
	margin: 0 auto;
	width: 100%;
	@media ${device.laptop} {
		max-width: calc(100% - 200px);
	}
	@media ${device.tablet} {
		max-width: calc(100% - 70px);
	}
	@media ${device.mobile} {
		max-width: calc(100% - 25px);
	}
`
const Container = ({ children }) => <UIContainer>{children}</UIContainer>

Container.propTypes = {
	children: PropTypes.node.isRequired
}

export default Container
