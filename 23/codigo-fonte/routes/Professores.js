const Express = require('express');

const { TodosProfessores } = require('../controllers/Professores');

const Rotas = Express.Router();

Rotas.get('/', TodosProfessores);

module.exports = Rotas;