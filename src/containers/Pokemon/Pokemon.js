import React, { useState, useEffect } from 'react'

import { useLocation, useHistory } from 'react-router-dom'
import queryParser from '@utils/helpers'
import { getPokemonInfo } from '@services/pokemon.services'
import Container from '@components/UI/Container'
import PokemonStatistic from '@components/PokemonStatistic/PokemonStatistic'
import LoaderSkeleton, { Spacer } from '@components/UI/LoaderSkeleton'
import ImageSwitcher from '@components/UI/ImageSwitcher'
import { Icon, Grid, Divider, Label, Progress } from 'semantic-ui-react'
import PokemonInfo from './styles'

const Pokemon = () => {
	const [title, setTitle] = useState('Pokémon React App')
	const [pokemon, setPokemon] = useState(null)
	const [loading, setLoading] = useState(false)
	const { push } = useHistory()

	const { search } = useLocation()
	const { id } = queryParser(search)

	useEffect(() => {
		;(async () => {
			try {
				setLoading(true)
				const pokemonInfo = await getPokemonInfo(id)
				setLoading(false)
				setPokemon(pokemonInfo)
				setTitle(
					`${
						pokemonInfo.name.charAt(0).toUpperCase() + pokemonInfo.name.slice(1)
					} Profile`
				)
			} catch (err) {
				if (err.response.status === 404) {
					push('/404')
				} else {
					push('/')
				}
			}
		})()
	}, [id, push])

	useEffect(() => {
		document.title = title
	})

	const pokeInfo = pokemon && (
		<>
			<Grid stackable container padded columns={2}>
				<Grid.Row style={{ alignItems: 'center' }}>
					<Grid.Column width={6}>
						<ImageSwitcher
							images={pokemon.images}
							charName={pokemon.name}
							large
						/>
					</Grid.Column>
					<Grid.Column width={10}>
						<h2 className='pokemon-name'>
							{pokemon.name}({pokemon.jpName})
						</h2>
						<div className='labels'>
							{pokemon.types.map((type) => (
								<Label key={type}>
									<Icon name='tag' />
									{type}
								</Label>
							))}
						</div>
						<Spacer vertical={25} horizontal={0} />
						<div className='stats'>
							{Object.keys(pokemon.stats).map((stat) => (
								<div className='stat' key={stat}>
									{stat}
									<Progress
										className='progress'
										progress='percent'
										value={pokemon.stats[stat]}
										total={100}
										indicating
									/>
								</div>
							))}
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<Divider horizontal>Description</Divider>
			<Grid stackable container padded columns={1}>
				<Grid.Row>
					<Grid.Column>
						<p>
							{`${pokemon.description[0]} ${pokemon.description[1]} ${pokemon.description[2]}`}
						</p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<Divider horizontal>Profile</Divider>
			<div className='profile'>
				<Grid stackable container padded columns={4}>
					<Grid.Row>
						<Grid.Column>
							<PokemonStatistic
								value={pokemon.height}
								label='Height'
								unit='ft.'
								color='red'
							/>
						</Grid.Column>
						<Grid.Column>
							<PokemonStatistic
								value={pokemon.weight}
								label='Weight'
								unit='lbs'
								color='orange'
							/>
						</Grid.Column>
						<Grid.Column>
							<PokemonStatistic
								value={pokemon.catchRate}
								label='Catch Rate'
								unit='%'
								color='yellow'
							/>
						</Grid.Column>
						<Grid.Column>
							<PokemonStatistic
								value={`${pokemon.genderRatioMale}/${pokemon.genderRatioFemale}`}
								label='Gender Ratio'
								unit='Male/Female'
								color='olive'
							/>
						</Grid.Column>
						<Grid.Column width={4}>
							<PokemonStatistic
								value={pokemon.hatchSteps}
								label='Hatch Steps'
								unit='Male/Female'
								color='green'
							/>
						</Grid.Column>
						<Grid.Column width={6}>
							<PokemonStatistic
								value={pokemon.eggGroups}
								label='Egg Groups'
								color='blue'
								long
							/>
						</Grid.Column>
						<Grid.Column width={6}>
							<PokemonStatistic
								value={pokemon.evs}
								label='EVs'
								color='violet'
								long
							/>
						</Grid.Column>
						<Grid.Column width={16}>
							<PokemonStatistic
								value={pokemon.abilities}
								label='Abilities'
								color='purple'
								long
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		</>
	)

	return (
		<Container>
			<PokemonInfo>{loading ? <LoaderSkeleton /> : pokeInfo}</PokemonInfo>
		</Container>
	)
}
export default Pokemon
