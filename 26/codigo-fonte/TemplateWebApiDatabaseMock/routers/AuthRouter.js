
// Importei o Express para as configurações das rotas de Autenticação.
const Express = require('express');

// Importei os Controllers para as configurações das rotas de Autenticação.
const AuthJwtController = require('../controllers/AuthJwtController');

// Do AuthJwtController importei apenas a rota Authentication.
const { Authentication } = new AuthJwtController();

// Inicializei a instância de Router.
const AuthRouter = Express.Router();

// Configurei a rota auth/ para receber o Authentication.
AuthRouter.post('/', Authentication);

// Exportei as configurações de todas as rotas de Autenticação.
module.exports = AuthRouter;