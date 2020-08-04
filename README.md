![Travis (.com)](https://img.shields.io/travis/com/Gazouly/Pokedex?style=for-the-badge) ![GitHub](https://img.shields.io/github/license/Gazouly/Pokedex?style=for-the-badge) [![Website pokedex-pokemons.netlify.app](https://img.shields.io/website-up-down-green-red/http/pokedex-pokemons.netlify.app.svg?style=for-the-badge)](https://pokedex-pokemons.netlify.app/) [![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/Gazouly/)

# Pokémon React App (Pokédex)
Pokédex is a pokémon dictionary that provides a detailed information related to pokémons, like their names, description, abilities, stats, height, weight, and much more. All data from [PokeAPI](https://pokeapi.co/) .

Pokédex was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.<br />
The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`

**Note: if you want to fix  auto-fixable problems and errors just add `--fix` flag before you run this script**

My basic configuration contains some rules such as: strings should be written inside single quotes rather than double quotes, disable console logs, prevent trailing commas. I could add more, but it's more common to find an existing set of rules that come close to what I want, then customize from there.

So, I used Airbnb linting rules, which bills itself as "a mostly reasonable approach to JavaScript." And it's true: their linting rules are popular because they are simple, sensible, and beautifully consistent.

### `yarn netlify:deploy`

I used `netlify-cli` to configure my webapp deployment to Netlify PaaS. You can read more about this cli at [Netlify CLI](https://docs.netlify.com/cli/get-started/)
