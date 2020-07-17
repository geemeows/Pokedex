import { serverHttp } from './httpClient'

export const getPokemons = async (offset, limit) => {
    const response = await serverHttp(`/?offset=${offset}&limit=${limit}`)
    const pokes = response.data.results
    return pokes
}