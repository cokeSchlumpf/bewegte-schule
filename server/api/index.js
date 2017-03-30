const express = require('express');
const pseudonyms = require('./pseudonyms');

const api = express.Router();

api.use('/pseudonyms', pseudonyms);

module.exports = api;