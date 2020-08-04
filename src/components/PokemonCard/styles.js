import styled from 'styled-components'
import device from '@utils/responsive_helper'

export default styled.div`
	background: #fff;
	width: 100%;
	margin: 14px 0;
	padding: 10px;
	border-radius: 3px;
	transition: box-shadow 0.2s ease-in-out;
	.pokemon-btn {
		&:hover {
			background: #ef5350;
			color: white;
		}
		background: #1f95f3;
		color: white;
		text-transform: capitalize;
	}
	.pokemon-name {
		text-align: center;
		text-transform: capitalize;
	}
	.pokemon-info {
		margin: 10px;
		font-size: 1.3rem;
		display: block;
	}
	&:hover {
		box-shadow: ${({ shadowed }) =>
			shadowed && '3px 3px 7px 0px rgba(0, 0, 0, 0.4)'};
	}
	img.loading {
		max-width: 100%;
		display: block;
		margin: 0 auto;
	}
	img.pokemon {
		display: block;
		margin: 0 auto;
	}
	@media ${device.mobile} {
		margin-bottom: 0;
	}
`
