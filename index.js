/*
* Adds ESM which is ES module loader for Node.
* Reference: https://github.com/standard-things/esm
*/

// eslint-disable-next-line no-global-assign
require = require('esm')(module/* , options */);

module.exports = require('./main.js');
