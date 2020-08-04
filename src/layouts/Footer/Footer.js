import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

const FooterContainer = styled.footer`
	background: #e5cedc;
	padding: 20px;
	margin-bottom: 0;
	margin-top: 30px;
	text-align: center;
`

const Footer = () => (
	<FooterContainer>
		Made with &nbsp;
		<Icon name='heart' color='red' />
		and &nbsp;
		<Icon name='react' color='blue' />
	</FooterContainer>
)

export default Footer
