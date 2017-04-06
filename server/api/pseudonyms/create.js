const _ = require('lodash');
const cloudant = require('../../db');
const config = require('../../config');
const dockerNames = require('docker-names');
const errors = require('../errors');
const winston = require('winston');

const createPseudonym = (cb) => {
  const pseudonym = dockerNames.getRandomName();

  cloudant(db => {
    db.get(`p-${pseudonym}`, (err, data) => {
      if (data) {
        // Find another pseudonym
        winston.info(`Pseudonym ${pseudonym} already exists ...`);
        createPseudonym(cb);
      }
      else {
        const doc = {
          _id: `p-${pseudonym}`,
          entity: 'user',
          inserted: Date.now()
        };

        db.insert(doc, (err, data) => {
          if (err) {
            winston.error('Unable to insert new pseudonym.', err);
            cb(undefined, err);
          }
          else {
            winston.info(`Created new pseudonym "${pseudonym}".`)
            cb(pseudonym);
          }
        });
      }
    });
  });
}

module.exports = (req, res) => {
  if (req.body.code === config.code) {
    createPseudonym((pseudonym, err) => {
      if (err) {
        errors.E005_Pseudonym(res, { pseudonym });
      }
      else {
        res.json({
          pseudonym,
          code: req.body.code
        });
      }
    });
  }
  else {
    errors.E001_WrongCode(res);
  }
};