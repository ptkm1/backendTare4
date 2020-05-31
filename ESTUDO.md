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

