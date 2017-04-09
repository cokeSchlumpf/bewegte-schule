const _ = require('lodash');
const cloudant = require('../../db');
const errors = require('../errors');
const md5 = require('md5');
const winston = require('winston');

module.exports = (req, res) => {
  const pseudonym = _.get(req, 'body.pseudonym');
  const password = _.get(req, 'body.password');

  if (!pseudonym || !password) {
    errors.E003_Required(res);
    return;
  }

  cloudant(db => {
    db.get(`p-${pseudonym}`, (err, doc) => {
      if (!doc || err) {
        winston.error(`Cannot update not existing pseudonym "${pseudonym}"`, err);
        errors.E002_PseudonymNotFound(res, { pseudonym });
      }
      else {
        const udoc = _.assign(doc, {
          password: md5(password)
        });
        
        db.insert(udoc, (err) => {
          if (err) {
            winston.error(`There was an error saving the password for "${pseudonym}"`, err);
            errors.E004_SavePassword(res, { pseudonym });
          }
          else {
            winston.info(`Updated password for "${pseudonym}".`);
            res.json({
              pseudonym
            });
          }
        })
      }
    })
  });
};
