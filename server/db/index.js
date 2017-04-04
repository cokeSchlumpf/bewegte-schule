const cfenv = require('cfenv');
const cloudant = require('cloudant');

console.log('Services:');
console.log(cfenv.getAppEnv());
console.log(cfenv.getAppEnv(),getServices());
console.log(cfenv.getAppEnv().getService('cloudantNoSQLDB'));

if (cfenv.getAppEnv().getService('cloudantNoSQLDB')) {

}

module.exports = {};