import { serverHttp, baseURL } from './httpClient'
import { pokemonsList, pokemonInfo, pokemonSpecies } from './pokemon.models'

export const getPokemons = async (offset, limit) => {
  const response = await serverHttp.get(`/pokemon/?offset=${offset}&limit=${limit}`)
  const pokes = response.data.results
  const pokemons = pokemonsList(pokes, baseURL)

  return Promise.all(pokemons.map(async (pokemon) => {
    const { data } = await serverHttp.get(`/pokemon/${pokemon.id}`)
    return pokemonInfo(data, pokemon)
  }))
}

export const getPokemonInfo = async (id) => {
  const { data } = await serverHttp.get(`/pokemon/${id}`)
  const resData = await serverHttp.get(`/pokemon-species/${id}`)
  const pokemon = {
    id: data.id,
    name: data.name,
    ...pokemonSpecies(resData.data)
  }
  return pokemonInfo(data, pokemon)
}
//
