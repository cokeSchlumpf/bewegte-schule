const cfenv = require('cfenv');
const cloudant = require('cloudant');

console.log('Services:');
console.log(cfenv.getAppEnv());
console.log(cfenv.getAppEnv().getService('cloudantNoSQLDB'));

module.exports = {};