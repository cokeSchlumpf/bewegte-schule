const express = require('express');
const login = require('./login');
const logout = require('./logout');
const pseudonyms = require('./pseudonyms');

const api = express.Router();

api.use('/login', login);
api.use('/logout', logout);
api.use('/pseudonyms', pseudonyms);

module.exports = api;