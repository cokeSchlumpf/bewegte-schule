const _ = require('lodash');
const cloudant = require('./db');
const schedule = require('node-schedule');
const winston = require('winston');

module.exports = () => {
  schedule.scheduleJob('*/5 * * * *', () => {
    cloudant(db => {
      const minutes = 1000 * 60 * 30;
      const minutesago = Date.now() - minutes;
      const selector = {
        entity: 'user',
        inserted: {
          '$lt': minutesago
        },
        password: {
          '$exists': false
        }
      };

      db.find({ selector }, function (err, result) {
        if (err) {
          winston.info('Unable to execute query.', selector);
        }
        else {
          _.each(_.get(result, 'docs', []), (doc) => {
            db.destroy(doc._id, doc._rev, (err, body) => {
              if (err) {
                winston.error(`Unable to delete user '${doc._id}'.`, err);
              }
              else {
                winston.info(`Deleted user '${doc._id}'.`);
              }
            });
          });
        }
      });
    });
  });
}