export const pokemonsList = (pokes, baseURL) => {
    return pokes.map(({ name, url }) => {
        const id = url.split(baseURL)[1].replace(/\//g, "")
        return {
            id,
            name,
            url
        }
    })
}

export const pokemonInfo = (resData, pokemon) => {
    let sprites = resData.sprites
    const weight = resData.weight
    const height = resData.height
    const images = []
    for (let key in sprites) {
        if (sprites[key]) images.push(sprites[key])
    }
    return {
        ...pokemon,
        height,
        weight,
        images
    }
}