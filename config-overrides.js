const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');

/* config-overrides.js */
module.exports = function override(config, env) {
	config = rewireAliases.aliasesOptions({
		'@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
		'@containers': path.resolve(__dirname, `${paths.appSrc}/containers/`),
		'@layouts': path.resolve(__dirname, `${paths.appSrc}/layouts/`),
		'@services': path.resolve(__dirname, `${paths.appSrc}/core/`),
		'@assets': path.resolve(__dirname, `${paths.appSrc}/assets/`),
		'@utils': path.resolve(__dirname, `${paths.appSrc}/utils/`),
		'@context': path.resolve(__dirname, `${paths.appSrc}/context/`)
	})(config, env);
  return config;
}