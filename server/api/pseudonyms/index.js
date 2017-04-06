const express = require('express');

const create = require('./create');
const update = require('./update');

const api = express.Router();

api.post('/', create);
api.put('/', update);

module.exports = api;