const express = require('express');

const create = require('./create');
const read = require('./read');
const update = require('./update');

const api = express.Router();

api.post('/', create);
api.get('/', read);
api.put('/', update);

module.exports = api;