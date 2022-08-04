const Express = require('express');

const { RequererTodos, RequererUmPelaId } = require('../Controllers/ProfessoresController');

const Rotas = Express.Router();

Rotas.get('/', RequererTodos);

Rotas.get('/:id', RequererUmPelaId);

module.exports = Rotas;