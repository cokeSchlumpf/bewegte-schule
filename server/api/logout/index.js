const _ = require('lodash');
const express = require('express');
const cloudant = require('../../db');
const errors = require('../errors');
const winston = require('winston');

const api = express.Router();

api.get('/', (req, res) => {
  const pseudonym = _.get(req, 'user.pseudonym');

  if (pseudonym) {
    cloudant(db => {
      const selector = {
        entity: 'user',
        pseudonym: req.user.pseudonym
      };

      db.find({ selector }, (err, result) => {
        const docs = _.get(result, 'docs', []);

        if (err || _.size(docs) < 1) {
          winston.error(`Unable to load user data to logout user '${req.user.pseudonym}'.`, err);
        }
        else {
          const user = docs[0];
          const uuser = {
            _id: user._id,
            _rev: user._rev,
            token: 0,
            lastActivity: Date.now()
          };

          db.insert(uuser, (err) => {
            if (err) {
              const winston = require('winston');
              winston.error(`Unable to logout user '${req.user.pseudonym}'.`, err);
            }
            else {
              winston.info(`Logged out '${req.user.pseudonym}'.`);
            }

            res.redirect('/');
          });
        }
      });
    });
  }
  else {
    res.redirect('/');
  }
});

module.exports = api;
