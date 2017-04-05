const _ = require('lodash');
const winston = require('winston');

const entities = require('./entities');

module.exports = (db, cb) => {
  const indexes = [
    entities
  ];

  _.each(indexes, (idx) => {
    db.insert(idx, (err) => {
      if (err) {
        winston.info(`Unable to create ${idx._id} - Might already exist in the database.`, err);
        cb();
      }
      else {
        winston.info(`Created design document '${idx._id}'`);
        cb();
      }
    });
  });
}