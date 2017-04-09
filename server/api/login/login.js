const _ = require('lodash');
const cloudant = require('../../db');
const errors = require('../errors');
const md5 = require('md5');
const uuid = require('uuid');
const winston = require('winston');

module.exports = (req, res) => {
  const pseudonym = _.get(req, 'body.pseudonym');
  const password = _.get(req, 'body.password');

  if (!pseudonym || !password) {
    errors.E003_Required(res);
    return;
  }
  else {
    cloudant((db) => {
      const selector = {
        entity: 'user',
        pseudonym
      };

      db.find({ selector }, (err, result) => {
        if (err) {
          winston.info('Unable find user.', selector);
          errors.E006_UnkownPseudonym(res);
        }
        else {
          const docs = _.get(result, 'docs', []);

          if (_.size(docs) === 0) {
            errors.E006_UnkownPseudonym(res);
          }
          else {
            const user = docs[0];
            const passwordHash = md5(password);

            if (_.isEqual(passwordHash, user.password) && user.attempts < 3) {
              const token = uuid.v4();
              const uuser = _.assign({}, user, {
                attempts: 0,
                token,
                lastActivity: Date.now()
              });

              db.insert(uuser, (err) => {
                if (err) {
                  errors.E000_InternalServerError(res);
                }
                else {
                  winston.info(`Successful login of user ${uuser.pseudonym}.`);

                  res.cookie('auth',
                    {
                      token
                    },
                    {
                      maxAge: 60 * 60 * 1000,
                      httpOnly: false,
                      secure: false
                    });

                  res.json({
                    user: { pseudonym }
                  });
                }
              });
            }
            else if (user.attempts > 2) {
              errors.E008_UsernameLocked(res);
            }
            else {
              const uuser = _.assign({}, user, {
                attempts: (user.attempts || 0) + 1
              });

              winston.info(`Unsuccessful attempt to login user ${uuser.pseudonym}.`, uuser);

              db.insert(uuser, (err) => {
                if (err) {
                  errors.E000_InternalServerError(res);
                }
                else {
                  errors.E007_UsernamePasswordWrong(res);
                }
              });
            }
          }
        }
      });
    });
  }
};