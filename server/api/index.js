const express = require('express');
const login = require('./login');
const pseudonyms = require('./pseudonyms');

const api = express.Router();

api.use('/login', login);
api.use('/pseudonyms', pseudonyms);

module.exports = api;