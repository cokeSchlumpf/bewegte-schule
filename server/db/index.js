const cfenv = require('cfenv');
const Cloudant = require('cloudant');
const devdb = require('./local-dev');

console.log('Services:');
console.log(cfenv.getAppEnv());
console.log(cfenv.getAppEnv().getServices());
console.log(cfenv.getAppEnv().getService('cloudantNoSQLDB'));

const service = cfenv.getAppEnv().getService('cloudantNoSQLDB') || devdb;
const url = service[0].credentials.url;
const account = service[0].credentials.username;
const password = service[0].credentials.password;

const cloudant = Cloudant({ vcapServices: JSON.parse(process.env.VCAP_SERVICES) });
cloudant.db.list((err, allDbs) => {
  console.log('All my databases: %s', allDbs.join(', '))
});

console.log(url);
console.log(username);
console.log(password);

module.exports = {};