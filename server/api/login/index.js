const express = require('express');
const login = require('./login');
const api = express.Router();

api.post('/', login);

module.exports = api;