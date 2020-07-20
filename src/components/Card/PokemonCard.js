import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Placeholder, Button } from 'semantic-ui-react'

import PropTypes from 'prop-types'
import loading_pokemons from '@assets/pikachu.gif'
import device from '@utils/responsive_helper'

export const PokemonCard = styled.div`
    background: #fff;
    width: 100%;
    margin: 14px 0;
    padding: 10px;
    border-radius: 3px;
    transition: box-shadow .2s ease-in-out;
    .pokemon-btn {
        &:hover {
            background: #EF5350;
            color: white;
        }
        background: #1F95F3;
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
        box-shadow: ${({ shadowed }) => shadowed && '3px 3px 7px 0px rgba(0, 0, 0, 0.4)'}
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

const Card = ({ id, charName, images, weight, height, loading, getPokemon }) => {
    const [currImage, setCurrImage] = useState(0)
    useEffect(() => {
        const fn = () => {
            if (images) {
                return currImage < images.length - 1  ? setCurrImage(currImage + 1) : setCurrImage(0)
            } else {
                return () => {
                    console.log(images)
                }
            }
        }
        const interval = setInterval(fn, 2000)
        return () => {
            clearInterval(interval)
        }
    }, [images, currImage, setCurrImage])
    
    const Pokemons = !loading && (
        <React.Fragment>
            <img className='pokemon' src={images[currImage]} alt={charName} />
            <h2 className='pokemon-name'>{ charName }</h2>
            <span className="pokemon-info"><strong>ID: </strong>{ id }</span>
            <span className="pokemon-info"><strong>Height: </strong>{ height }″ </span>
            <span className="pokemon-info"><strong>Weight: </strong>{ weight }lb</span>
            <Button className="pokemon-btn" animated='fade' fluid onClick={() => getPokemon(id)}>
                <Button.Content visible>{charName} profile</Button.Content>
                <Button.Content hidden>Explore {charName} Abilities Now!</Button.Content>
            </Button>
        </React.Fragment>
    )
    return (
        <PokemonCard shadowed>
            { loading ? (
                <React.Fragment>
                    <img className='loading' src={loading_pokemons} alt="Pikachu Loading" />
                    <Placeholder>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder>
                </React.Fragment>
            ) : Pokemons 
            }
            
        </PokemonCard>   
    )
}

Card.propTypes = {
    id: PropTypes.string,
    charURL: PropTypes.string,
    charName: PropTypes.string,
    loading: PropTypes.bool
}

export default Card
