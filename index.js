/*
* Adds ESM which is ES module loader for Node.
* Reference: https://github.com/standard-things/esm
*/
require = require("esm")(module/*, options*/)
module.exports = require("./main.js")