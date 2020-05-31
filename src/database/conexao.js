const knex = require('knex');
const configuration = require('../../knexfile'); //pegando a configuraão do arquivo gerado na raiz knexfile.

const conectarComDB = knex(configuration.development);


module.exports = conectarComDB;