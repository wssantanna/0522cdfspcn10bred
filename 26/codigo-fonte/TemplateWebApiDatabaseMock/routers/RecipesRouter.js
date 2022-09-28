
// Importei o Express para as configurações das rotas de Receitas.
const Express = require('express');

// Importei os Controllers para as configurações das rotas de Receitas.
const RecipesController = require('../controllers/RecipesController');

// Do RecipestController importei as rotas.
const { Create, GetAll, GetById, UpdateById, DeleteById } = new RecipesController();

// Inicializei a instância de Router.
const RecipesRouter = Express.Router();

// Configurei a rota de receitas.
RecipesRouter.post('/', Create);
RecipesRouter.get('/', GetAll);
RecipesRouter.get('/:id', GetById);
RecipesRouter.patch('/:id', UpdateById);
RecipesRouter.delete('/:id', DeleteById);

// Exportei as configurações de todas as rotas de Receitas.
module.exports = RecipesRouter;