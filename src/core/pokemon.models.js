export const pokemonsList = (pokes, baseURL) => pokes.map(({ name, url }) => {
  const id = url.split(`${baseURL}/pokemon`)[1].replace(/\//g, '')
  return {
    id,
    name
  }
})

export const pokemonInfo = (resData, pokemon) => {
  const { sprites } = resData
  let {
    hp, attack, defense, speed, specialAttack, specialDefense
  } = ''
  const weight = Math.round((resData.weight * 0.220462 + 0.00001) * 100) / 100
  const height = Math.round((resData.height * 0.328084 + 0.00001) * 100) / 100
  const images = []
  const types = resData.types.map((type) => type.type.name)
  const abilities = resData.abilities.map((ability) => ability.ability.name
    .toLowerCase()
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' '))
    .join(', ')

  const evs = resData.stats.filter(({ effort }) => effort > 0)
    .map((stat) => `${stat.effort} ${stat.stat.name
      .toLowerCase()
      .split('-')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ')}`)
    .join(', ')

  resData.stats.forEach((stat) => {
    switch (stat.stat.name) {
      case 'hp':
        hp = stat.base_stat
        break
      case 'attack':
        attack = stat.base_stat
        break
      case 'defense':
        defense = stat.base_stat
        break
      case 'speed':
        speed = stat.base_stat
        break
      case 'special-attack':
        specialAttack = stat.base_stat
        break
      case 'special-defense':
        specialDefense = stat.base_stat
        break
      default:
        break
    }
  })
  Object.keys(sprites).forEach((key) => {
    if (typeof sprites[key] === 'string') images.push(sprites[key])
  })

  return {
    ...pokemon,
    types,
    abilities,
    evs,
    height,
    weight,
    images,
    stats: {
      hp,
      attack,
      defense,
      speed,
      specialAttack,
      specialDefense
    }

  }
}

export const pokemonSpecies = (resData) => {
  let description = resData.flavor_text_entries.map((flavor) => flavor.language.name === 'en' && flavor.flavor_text)
  description = [...new Set(description)]

  const femaleRate = resData.gender_rate
  const genderRatioFemale = 12.5 * femaleRate
  const genderRatioMale = 12.5 * (8 - femaleRate)
  let jpName = ''

  resData.names.every(({ language, name }) => {
    if (language.name === 'ja-Hrkt') {
      jpName = name
      return false
    }
    return true
  })

  const catchRate = Math.round((100 / 255) * resData.capture_rate)

  const eggGroups = resData.egg_groups.map((group) => group.name
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' '))
    .join(', ')

  const hatchSteps = 255 * (resData.hatch_counter + 1)
  return {
    jpName,
    description,
    genderRatioFemale,
    genderRatioMale,
    catchRate,
    eggGroups,
    hatchSteps

  }
}
