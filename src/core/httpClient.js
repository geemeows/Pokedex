import axios from 'axios'

export const baseURL = 'https://pokeapi.co/api/v2/pokemon'
export const serverHttp = axios.create({
    baseURL
})