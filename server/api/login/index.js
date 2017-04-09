const express = require('express');
const login = require('./login');
const userdata = require('./userdata.js');

const api = express.Router();

api.get('/', userdata);
api.post('/', login);

module.exports = api;