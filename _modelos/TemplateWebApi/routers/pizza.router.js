
const Express = require('Express');
const PizzaRouter = Express.Router();

// Importei os recursos do controlador Pizza
const { getAll, getById, create, deleteById, updateById } = require('../controllers/pizza.controller');

// Configuração das rotas Pizza
PizzaRouter.post('/', create)
PizzaRouter.get('/', getAll);
PizzaRouter.get('/:id', getById);
PizzaRouter.patch('/:id', updateById);
PizzaRouter.delete('/:id', deleteById);

module.exports = PizzaRouter;