const config = require('../../config');
const dockerNames = require('docker-names');
const express = require('express');

const api = express.Router();

const createPseudonym = (req, res) => {
  const pseudonym = dockerNames.getRandomName();

  // TODO: Check whether the name is still free.
  // TODO: What happens if there is no free random name?

  res.json({
    pseudonym
  });
}

api.get('/', createPseudonym);
api.post('/', (req, res) => {
  console.log(req.body);
  if (req.body.code === config.code) {
    createPseudonym(req, res);
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

module.exports = api;