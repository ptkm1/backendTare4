const express = require('express');
//Recurso nativo do node pra gerar criptografias
const crypto = require('crypto');
const conectarComDB = require('./database/conexao');

const routes = express.Router()

routes.post('/usuario', async (req, res) => {
    
    const { nome, email, senha, cpfcnpj, cidade, uf } = req.body; // Pegando os campos por filtro de variáveis de objeto|
    
    
    const id = crypto.randomBytes(4).toString('HEX');   // gerando um byte randômico com 4 caracters para ser o ID do usuário|

    //  Inserção dos dados no DB
   await conectarComDB('usuarios').insert({ id, nome, email, senha, cpfcnpj, cidade, uf });

    return res.json({ id }); // pegando o id criptado acima, e retornando pro usuário se identificar na aplicação.
});


module.exports = routes;