const _ = require('lodash');

const error = (status, messageKey, message) => (res, parameters = {}) => {
  const body = {
    error: {
      messageKey,
      message,
      parameters
    }
  }

  res.status(status);
  res.send(body);
}

module.exports = {
  E001_WrongCode: error(401, 1, 'Wrong code'),
  E002_PseudonymNotFound: error(400, 2, 'Pseudonym does not exist in the database'),
  E003_Required: err(400, 3, 'Pseudonym and password are required as input.'),
  E004_SavePassword: err(500, 4, 'There was an error saving the password'),
  E005_Pseudonym: err(500, 5, 'Unable to create pseudonym')
}