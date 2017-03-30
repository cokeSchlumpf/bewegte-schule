const express = require('express');

const api = express.Router();

api.get('/pseudonyms', (req, res) => {
  res.send('hello world');
});

module.exports = api;