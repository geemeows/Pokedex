import { serverHttp, baseURL } from './httpClient'
import { pokemonsList, pokemonInfo } from './pokemon.models'

export const getPokemons = async (offset, limit) => {
    const response = await serverHttp.get(`/?offset=${offset}&limit=${limit}`)
    const pokes = response.data.results
    const pokemons =  pokemonsList(pokes, baseURL)
    
    return Promise.all(pokemons.map(async (pokemon) => {
        const { data } = await serverHttp.get(`/${pokemon.id}`)   
        return pokemonInfo(data, pokemon)
    }))
}