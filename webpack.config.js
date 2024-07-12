const path = require('path');

module.exports = {
  entry: './santander-coders/open-weather/js/open-weather/index002.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve("./santander-coders/open-weather/js", 'dist'),
  },
};