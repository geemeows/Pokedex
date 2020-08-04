import React from 'react'
import { Placeholder, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import ImageSwitcher from '@components/UI/ImageSwitcher'
import loadingPokemon from '@assets/pikachu.gif'
import PokemonCard from './styles'

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
