// global-setup.js
//const { bsLocal, BS_LOCAL_ARGS } = require('./browserstack.config');
const { promisify } = require('util');
const sleep = promisify(setTimeout);
const redColour = '\x1b[31m';
const whiteColour = '\x1b[0m';
module.exports = async () => {
};
