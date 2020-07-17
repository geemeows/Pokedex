import axios from 'axios'

export const serverHttp = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})