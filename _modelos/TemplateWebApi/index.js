require('dotenv')
    .config();

const Express = require('express');
const Routers = require('./routers');

const WebService = new Express();

// Adicionar suporte a arquivos JSON
WebService.use(Express.json());

// Todas as rotas da Aplicação
WebService.use('/api', Routers);

WebService.listen(process.env.SERVER_PORT || 1234, console.log('Web API  Okay'));