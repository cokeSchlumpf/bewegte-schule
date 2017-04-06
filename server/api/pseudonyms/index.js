const _ = require('lodash');
const config = require('../../config');
const cloudant = require('../../db');
const dockerNames = require('docker-names');
const errors = require('../errors');
const express = require('express');
const md5 = require('md5');
const winston = require('winston');

const api = express.Router();

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

api.post('/', (req, res) => {
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
});

api.put('/', (req, res) => {
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
            const message = `There was an error saving the password for "${pseudonym}"`;

            winston.error(message, err);
            errors.E004_SavePassword(res, { pseudonym });
          }
          else {
            winston.info(`Updated password for "${pseudonym}".`);
            res.json(req.body);
          }
        })
      }
    })
  });
});

module.exports = api;