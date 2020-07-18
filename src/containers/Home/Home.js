import React, { useState, useEffect, useContext, useCallback } from 'react'
import { Grid } from 'semantic-ui-react'
import Container from '@components/UI/Container'
import PokemonCard from '@components/Card/PokemonCard'
import NavCard from '@components/NavCard/NavCard'

import { getPokemons } from '@services/pokemon.services'
import { APIContext } from '@context/api_context'

const Home = () => {
    const [pokemons, setPokemons] = useState([])
    const { offset, limit, nextOffset, prevOffset } = useContext(APIContext)

    useEffect(() => {
        (async () => {
            setPokemons([])
            const pokes = await getPokemons(offset, limit)
            setPokemons(pokes)
        })()
    }, [offset, limit, setPokemons])
    
    const pokemonsCards = useCallback(() => {
        if (!pokemons.length) {
            const LoadingPokemons = []
            for (let i = 0; i < 3; i++) {
                LoadingPokemons.push((
                    <Grid.Column key={i}>
                        <PokemonCard loading />
                    </Grid.Column>
                ))
            }
            return LoadingPokemons
        } else {
            const pokemonsList = pokemons.map(({ id, name, url, images, weight, height }) => {
                return(
                    <Grid.Column key={id}>
                        <PokemonCard 
                            id={id} 
                            charName={name} 
                            charURL={url}
                            images={images}
                            weight={weight}
                            height={height} />
                    </Grid.Column>
                )
            })
            pokemonsList.push((
                <React.Fragment>
                    <Grid.Column>
                        <NavCard 
                            disabled={ offset < limit }
                            type='prev'
                            functionality={prevOffset} />
                    </Grid.Column>
                    <Grid.Column>
                        <NavCard 
                            type='next'
                            functionality={nextOffset} />
                    </Grid.Column>
                </React.Fragment>
            ))
            return pokemonsList
        }
    }, [pokemons, prevOffset, nextOffset, offset, limit])
    return (
        <div>
            <Container>
                <Grid stackable container padded>
                    <Grid.Row columns={3} only='computer' stretched>
                        { pokemonsCards() }
                    </Grid.Row>
                    <Grid.Row columns={2} only='tablet'>
                        { pokemonsCards() }
                    </Grid.Row>
                    <Grid.Row columns={1} only='mobile'>
                        { pokemonsCards() }
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
}

export default Home
