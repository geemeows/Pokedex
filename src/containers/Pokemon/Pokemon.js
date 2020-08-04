import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation, useHistory } from 'react-router-dom'
import queryParser from '@utils/helpers'
import { getPokemonInfo } from '@services/pokemon.services'
import Container from '@components/UI/Container'
import { PokemonCard } from '@components/Card/PokemonCard'
import LoaderSkeleton, { Spacer } from '@components/UI/LoaderSkeleton'
import ImageSwitcher from '@components/UI/ImageSwitcher'
import device from '@utils/responsive_helper'
import {
	Icon,
	Grid,
	Divider,
	Statistic,
	Label,
	Progress
} from 'semantic-ui-react'

const PokemonInfo = styled(PokemonCard)`
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
			margin-bottom: 15px;
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
							<Statistic className='static' color='red'>
								<Statistic.Value>{pokemon.height}</Statistic.Value>
								<Statistic.Label>
									Height
									<span className='unit'>(ft.)</span>
								</Statistic.Label>
							</Statistic>
						</Grid.Column>
						<Grid.Column>
							<Statistic className='static' color='orange'>
								<Statistic.Value>{pokemon.weight}</Statistic.Value>
								<Statistic.Label>
									Weight
									<span className='unit'>(lbs)</span>
								</Statistic.Label>
							</Statistic>
						</Grid.Column>
						<Grid.Column>
							<Statistic className='static' color='yellow'>
								<Statistic.Value>{pokemon.catchRate}</Statistic.Value>
								<Statistic.Label>
									Catch Rate
									<span className='unit'>(%)</span>
								</Statistic.Label>
							</Statistic>
						</Grid.Column>
						<Grid.Column>
							<Statistic className='static' color='olive'>
								<Statistic.Value>
									{pokemon.genderRatioMale}/{pokemon.genderRatioFemale}
								</Statistic.Value>
								<Statistic.Label>
									Gender Ratio
									<span className='unit'>(Male/Female)</span>
								</Statistic.Label>
							</Statistic>
						</Grid.Column>
						<Grid.Column width={4}>
							<Statistic className='static' color='green'>
								<Statistic.Value>{pokemon.hatchSteps}</Statistic.Value>
								<Statistic.Label>Hatch Steps</Statistic.Label>
							</Statistic>
						</Grid.Column>
						<Grid.Column width={4}>
							<Statistic className='static' color='teal'>
								<Statistic.Value>
									{pokemon.genderRatioMale}/{pokemon.genderRatioFemale}
								</Statistic.Value>
								<Statistic.Label>
									Gender Ratio
									<span className='unit'>(Male/Female)</span>
								</Statistic.Label>
							</Statistic>
						</Grid.Column>
						<Grid.Column width={8}>
							<Statistic className='static' color='blue'>
								<Statistic.Value className='long-text'>
									{pokemon.eggGroups}
								</Statistic.Value>
								<Statistic.Label>Egg Groups</Statistic.Label>
							</Statistic>
						</Grid.Column>
						<Grid.Column width={8}>
							<Statistic className='static' color='violet'>
								<Statistic.Value className='long-text'>
									{pokemon.evs}
								</Statistic.Value>
								<Statistic.Label>EVs</Statistic.Label>
							</Statistic>
						</Grid.Column>
						<Grid.Column width={8}>
							<Statistic className='static' color='purple'>
								<Statistic.Value className='long-text'>
									{pokemon.abilities}
								</Statistic.Value>
								<Statistic.Label>Abilities</Statistic.Label>
							</Statistic>
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
