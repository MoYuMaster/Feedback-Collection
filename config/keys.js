// key.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // In production - return prod sets of keys
  module.exports = require('./prod');
} else {
  // In development - return the dev keys
  module.exports = require('./dev');
}
