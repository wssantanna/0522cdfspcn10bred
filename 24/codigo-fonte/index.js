// 1. Importei o Express para o projeto.
const Express = require('express');
// 3.1. Importei as rotas de Produtos.
const ProdutosRouter = require('./Routers/ProdutosRouter');

// 2. Criei uma instância do Servidor.
// Nota: É possível criar múltiplas instâncias de servidor Nodejs,
// importante definir portas diferentes para acesso a cada instância.
// const LocalService = new Express();
const WebService = new Express();

WebService.use(Express.json());

// 3.2. Defini as rotas do Servidor.
WebService.use('/produtos', ProdutosRouter);

// 4. Inicializei o servidor na porta 5678
// LocalService.listen(5434, console.log('Local Service Ok'));
WebService.listen(5678, console.log('Web Service Ok'));