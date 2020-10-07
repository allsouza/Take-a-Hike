if (process.env.NODE_ENV === 'production') {
  module.exports = require('./my_keys_prod');
} else {
  module.exports = require('./my_keys_dev');
}