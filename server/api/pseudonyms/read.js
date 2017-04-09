const _ = require('lodash');
const cloudant = require('../../db');
const errors = require('../errors');

module.exports = (req, res) => {
  cloudant(db => {
    const selector = {
      entity: 'user'
    };

    db.find({ selector }, (err, data) => {
      if (err) {
        errors.E000_InternalServerError(res);
      } 
      else {
        res.json(_.get(data, 'docs', []));
      }
    });
  });
}