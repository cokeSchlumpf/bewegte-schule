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
  E000_InternalServerError: error(500, 0, 'An internal server error occured'),
  E001_WrongCode: error(401, 1, 'Wrong code'),
  E002_PseudonymNotFound: error(400, 2, 'Pseudonym does not exist in the database'),
  E003_Required: error(400, 3, 'Pseudonym and password are required as input'),
  E004_SavePassword: error(500, 4, 'There was an error saving the password'),
  E005_Pseudonym: error(500, 5, 'Unable to create pseudonym'),
  E006_UnkownPseudonym: error(400, 6, 'The pseudonym is unkown'),
  E007_UsernamePasswordWrong: error(401, 7, 'Username and password are not correct'),
  E008_UsernameLocked: error(401, 8, 'The username is locked due to too many failed logins. Please contact the administrator.'),
}