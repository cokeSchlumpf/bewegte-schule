const _ = require('lodash');
const cloudant = require('../../db');
const winston = require('winston');

module.exports = {
  cookieParser: (req, res, next) => {
    const auth = req.cookies.auth;
    const token = _.get(auth, 'token');

    if (token) {
      cloudant((db) => {
        const selector = {
          entity: 'user',
          token: token
        };

        db.find({ selector }, (err, result) => {
          const docs = _.get(result, 'docs', []);

          if (err || _.size(docs) < 1) {
            next();
          }
          else {
            const user = docs[0];
            const uuser = _.assign({}, user, {
              lastActivity: Date.now()
            });

            db.insert(uuser, (err) => {
              if (err) {
                winston.error('Unable to update user data in database', err);
              } 
              else {
                req.user = user;
              }

              next();
            });
          }
        });
      });
    }
    else {
      next();
    }
  }
};