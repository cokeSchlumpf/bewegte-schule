const cfenv = require('cfenv');
const Cloudant = require('cloudant');
const devdb = require('./local-dev');

console.log('Services:');
console.log(cfenv.getAppEnv());
console.log(cfenv.getAppEnv().getServices());
console.log(cfenv.getAppEnv().getService('cloudantNoSQLDB'));

const service = cfenv.getAppEnv().getService('cloudantNoSQLDB') || devdb;
const url = service[0].credentials.url;
const username = service[0].credentials.username;
const password = service[0].credentials.password;

console.log(url);
console.log(username);
console.log(password);

module.exports = {};