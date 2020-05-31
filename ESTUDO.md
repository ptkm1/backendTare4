# BACKEND ESTUDOS
- Como Startar
  * npm init -y
  * npm install express
  
- Tecnologias de requisição http:
  * Express

- Tecnologias de banco:
  * SQLite3
  * KnexJS

**HTTP METHOD | METODOS HTTP**
  * GET | Pesquisa em back-end e mostrar um recurso em tela pegando ele do banco ou semelhantes;
  * POST | Cria, posta, objetos no back-end, envia dados para serem armazenados;
  * DELETE | Deleta o que for passado em parâmetro na requisição.
  * PUT | atualiza os dados que já existem;

**PARAMETROS PASSADOS NA FUNÇÃO**
- **Parâmetros passados na construção da requisição:**
   * *REQUEST -> Trás informações e/ou dados da requisição, guarda os objetos;*
   * *RESPONSE -> Envia a mensagem de retorno, seja para o console, ou para o front-end mostrar em tela.*
- **Parâmetros passados no retorno, dentro da função, para tratar**

   * *QUERY PARAMS: Parâmetros nomeados na rota apos "?" (Filtros, Paginação);*
   * *ROUTE PARAMS: Passamos .params; para identificar os recursos;*
   * *REQUEST BODY: Parâmetros de corpo da requisição, se for enviado um objeto usuario, usamos o .body para receber os dados.*


1 - Criar uma pasta para ser o banco de dados vou armazenar lá as tabelas
  - 3 abstrações, em pastas... a pasta database será o banco de dados, dentro do banco, terá a tabela gerada pelo *comando* { *knex migrate:make* } (o arquivo em js gerado apos o comando), pronto. apos ter entendido q a pasta database é o banco e o arquivo gerado pelo knex é a tabela, dentro do arquivo, ficarão as **colunas**, q são feitos com a **função**: 
  -------------
  
  *knex*.schema.createTable(*table*){

    *table*.string().notNullable() <- not nullable = Não pode ser nulo
  }

  ---------------------------------------
  **Conexão da APLICAÇÃO BACKEND com o SQLITE3 (Banco de dados)**

  * Dentro da pasta criada no processo anterior, a pasta database, colocaremos também a conexão: dei o nome de " conexao.js ";
  * dentro do arquivo, é só importar o knex com require('knex')
    - após importar o knex, criamos a variável que vai armazenar a *function* "knex";
    - declaramos: var conexao = knex();
    - buscamos a configuração do arquivo knexfile.js na raiz do projeto.
      - declaramos: var configuration = require('../../knexfile');
    - depois de pegar a configuração, é só criar uma variável que vai servir como conexão do model de inserção com o banco.
      - var **conectarcombanco** = *knex(configuration.development)*;
      - Exportar a variável com o module.exports = **conectarcombanco**
  
  * Com a configuração de conexão pronta, e a variável de conexão estar devidamente exportada, podemos começar a criar as rotas no arquivo **routes.js**

  - Importamos o crypto (função nativa do node) para fazer a criptografia do **ID** do usuário
  - Importamos a variável de **conexao** (*conectarcombanco*);
  - Importamos a função **Router** do express e armazenamos em uma variável chamada routes;
 
//*Usaremos o cadastro de usuario como exemplo*
  - Agora é só chamar a função de chamada api 
  
routes.post('/usuarios', async (requisicao, resposta){
    
        var data = requisicao.body;
        
        var id = *crypto.randomBytes(4)* <-- isso irá gerar um id randomico para o usuário

        como a função é assincrona,

//Declaramos o await na inserção do banco

    --> await conectarcombanco('nomedatabela').insert({ nome, dos, campos, inseridos })

// No final da inserção, retornamos um json do ID
// o ID so será retornado depois do AWAIT na inserção do banco, pra isso serve o async await

    resposta.json({id});

  })

  
  