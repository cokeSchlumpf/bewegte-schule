const _ = require('lodash');
const cfenv = require('cfenv');
const Cloudant = require('cloudant');
const config = require('../config');
const devdb = require('./local-dev');
const winston = require('winston');

const dbname = _.lowerCase((process.env.NODE_ENV || 'dev')) + '-' + config.dbname;
const service = cfenv.getAppEnv().getService('cloudantNoSQLDB') || devdb;
const url = service[0].credentials.url;
const cloudant = Cloudant({ url });

let db;
let callback = [
  (db$) => {
    db = db$;
    winston.info(`Initialized database "${dbname}"`);
  }
]

// try to create the database if it does not exist yet
cloudant.db.create(dbname, (err) => {
  if (err) {
    winston.info(`Error creating database with name "${dbname}" - Database already exists.`);
  }
  
  db = cloudant.db.use(dbname);
  _.each(callback, cb => cb(db));
})

module.exports = (callback$) => {
  if (db) {
    callback$(db);
  } 
  else {
    callback = _.concat(callback, callback$);
  }
};