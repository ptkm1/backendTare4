const express = require('express');
//Recurso nativo do node pra gerar criptografias
const crypto = require('crypto');
// importando as configuraçoes de conexão, usaremos a variavel pra inserir no banco
const conectarComDB = require('./database/conexao');

const routes = express.Router();

//-> LISTAR USUARIOS CADASTRADOS NO BANCO
routes.get('/usuario', async (req, res) => {
            // Funcao de conexao('nome da tabela').select('*');
    const data = await conectarComDB('usuarios').select('*');

    return res.json(data);

});
//-> CADASTRAR USUÁRIOS NO BANCO
routes.post('/usuario', async (req, res) => {

     //-> Pegando os campos por filtro de variáveis de objeto
    const { nome, email, senha, cpfcnpj, cidade, uf } = req.body;
    
    
    const id = crypto.randomBytes(4).toString('HEX');//-> gerando um byte randômico com 4 caracters para ser o ID do usuário |

    //->  Inserindo dados no Banco de Dados |
    try{
        await conectarComDB('usuarios').insert({ id, nome, email, senha, cpfcnpj, cidade, uf });

        return res.json({ id, nome, email, cpfcnpj, cidade, uf }); //-> Retornando os dados cadastrados para o FRONT |
    }catch(err){
        //-> Caso algum campo não seja digitado corretamente, retorna o erro
            console.log(err.errno);
            if(err.errno == 19){
                res.json({erro: "Você já é cadastrado!"});
            }else{
                res.json({erro: "não foi possivel te cadastrar, tente novamente."})
            }
    }


 //-> **ROTAS PÓS AUTENTICAÇÃO DO USUÁRIO** <-\\

 routes.post('/auth/index')

    
});


module.exports = routes;