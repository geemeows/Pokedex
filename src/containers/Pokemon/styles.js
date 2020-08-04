import styled from 'styled-components'
import PokemonCard from '@components/PokemonCard/styles'
import device from '@utils/responsive_helper'

export default styled(PokemonCard)`
	padding: 20px;
	box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.4);
	&:hover {
		box-shadow: 3px 3px 4px 0px rgba(0, 0, 0, 0.4);
	}
	.pokemon-name {
		text-align: left;
		text-transform: capitalize;
		font-size: 3rem;
		position: relative;
		z-index: 0;
		display: inline-block;
		transition: all 0.2s ease-in-out;
		cursor: pointer;
		@media ${device.mobile} {
			font-size: 1.7rem;
		}
		&:hover {
			color: #ef5350;
		}
		&:before {
			content: '';
			position: absolute;
			bottom: 0.1em;
			z-index: -1;
			display: inline-block;
			width: 100%;
			height: 0.45em;
			background-color: #e5cedc;
		}
	}
	.labels {
		div {
			text-transform: uppercase;
		}
	}
	.stats {
		text-transform: uppercase;
		font-weight: bold;
		.progress {
			margin-bottom: 0.6em;
		}
	}
	.profile {
		.static {
			display: flex;
			margin-bottom: 50px;
			@media ${device.mobile} {
				margin-bottom: 15px;
			}
			.value {
				font-size: 2em !important;
				font-weight: bold;
			}
			.unit {
				text-transform: lowercase;
				font-size: 14px;
				color: #ef5350;
			}
		}
	}
`
