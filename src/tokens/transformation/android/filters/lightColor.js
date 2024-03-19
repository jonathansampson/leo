const { matchLightThemeToken } = require('../../common/tokenFilters')

module.exports = (token) =>
  // We are adding primitive colors in light colors as values/colors.xml would be the default color file and we don't have dark version of primitive colors.
  matchLightThemeToken(token) || token.name.startsWith('primitive')
