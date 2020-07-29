import React, { useState, useEffect, useContext, useCallback } from 'react'
import { Grid,  Modal, Header, Button, Icon, Transition } from 'semantic-ui-react'
import Container from '@components/UI/Container'
import PokemonCard from '@components/Card/PokemonCard'
import NavCard from '@components/NavCard/NavCard'

import { getPokemons } from '@services/pokemon.services'
import { APIContext } from '@context/api_context'
import { useHistory } from 'react-router-dom'


const Home = () => {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { offset, limit, nextOffset, prevOffset } = useContext(APIContext)
    const { push } = useHistory()


    useEffect(() => {
        (async () => {
            try {                    
                setLoading(true)
                const pokes = await getPokemons(offset, limit)
                setPokemons(pokes)
                setLoading(false)
            } catch (err) {
                setLoading(false)
                setError(err)
            }
        })()
    }, [offset, limit, setPokemons])
    
    const clearError = useCallback(() => setError(null), [])

    const getPokemon = useCallback((id) => {
        push(`/pokemon?id=${id}`)
    }, [push])
    
    const pokemonsCards = useCallback(() => {
        if (loading) {
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
                            images={images}
                            weight={weight}
                            height={height}
                            getPokemon={getPokemon} />
                    </Grid.Column>
                )
            })
            if (!error && pokemons.length) {
                pokemonsList.push((
                    <React.Fragment key={(new Date()).toISOString()}>
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
            }
            return pokemonsList
        }
    }, [pokemons, prevOffset, nextOffset, offset, limit, loading, error, getPokemon])

    return (
        <div>
            <Transition unmountOnHide visible={error !== null } animation='fade' duration={{ hide: 500, show: 500 }}>
                <Modal open={error && true} basic size='small'>
                    <Header icon='close' content='Something went wrong!' />
                    <Modal.Content>
                    <p>
                        Something went wrong with the server, reload the page please!
                    </p>
                    </Modal.Content>
                    <Modal.Actions>
                    <Button color='green' inverted onClick={clearError}>
                        <Icon name='checkmark' /> Okay
                    </Button>
                    </Modal.Actions>
                </Modal>
            </Transition>
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

export default React.memo(Home)
