import React from 'react'
import styled from 'styled-components'
import { Placeholder, Button } from 'semantic-ui-react'
import ImageSwitcher from '@components/UI/ImageSwitcher'

import PropTypes from 'prop-types'
import loadingPokemon from '@assets/pikachu.gif'
import device from '@utils/responsive_helper'

export const PokemonCard = styled.div`
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

const Card = ({
	id,
	charName,
	images,
	weight,
	height,
	loading,
	getPokemon
}) => {
	const Pokemons = !loading && (
		<>
			<ImageSwitcher images={images} charName={charName} />
			<h2 className='pokemon-name'>{charName}</h2>
			<span className='pokemon-info'>
				<strong>ID: </strong>
				{id}
			</span>
			<span className='pokemon-info'>
				<strong>Height: </strong>
				{height}′
			</span>
			<span className='pokemon-info'>
				<strong>Weight: </strong>
				{weight}
				lbs
			</span>
			<Button
				className='pokemon-btn'
				animated='fade'
				fluid
				onClick={() => getPokemon(id)}>
				<Button.Content visible>{charName} profile</Button.Content>
				<Button.Content hidden>
					Explore {charName} Abilities Now!
				</Button.Content>
			</Button>
		</>
	)
	return (
		<PokemonCard shadowed>
			{loading ? (
				<>
					<img className='loading' src={loadingPokemon} alt='Pikachu Loading' />
					<Placeholder>
						<Placeholder.Line />
						<Placeholder.Line />
						<Placeholder.Line />
						<Placeholder.Line />
						<Placeholder.Line />
					</Placeholder>
				</>
			) : (
				Pokemons
			)}
		</PokemonCard>
	)
}
Card.defaultProps = {
	id: `${new Date().toISOString()}`,
	charName: 'loading char',
	loading: false,
	images: [],
	weight: 0,
	height: 0,
	getPokemon: () => {}
}

Card.propTypes = {
	id: PropTypes.string,
	charName: PropTypes.string,
	loading: PropTypes.bool,
	images: PropTypes.arrayOf(PropTypes.string),
	weight: PropTypes.number,
	height: PropTypes.number,
	getPokemon: PropTypes.func
}

export default Card
