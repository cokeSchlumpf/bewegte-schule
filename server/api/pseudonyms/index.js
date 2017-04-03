const config = require('../../config');
const dockerNames = require('docker-names');
const express = require('express');

const api = express.Router();

const createPseudonym = () => {
  const pseudonym = dockerNames.getRandomName();

  // TODO: Check whether the name is still free.
  // TODO: What happens if there is no free random name?

  return pseudonym;
}

api.post('/', (req, res) => {
  if (req.body.code === config.code) {
    const pseudonym = createPseudonym();
    res.json({
      pseudonym,
      code: req.body.code
    });
  } else {
    res.status(401);
    res.send({
      error: {
        messageKey: 1,
        message: 'Wrong code',
        parameters: {}
      }
    });
  }
});

api.put('/', (req, res) => {
  res.send(req.body);
});

module.exports = api;