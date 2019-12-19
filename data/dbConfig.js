const knex = require('knex');
const knexFile = require('../knexfile');

const environment = 'testing';

module.exports = knex(knexFile[environment]);
