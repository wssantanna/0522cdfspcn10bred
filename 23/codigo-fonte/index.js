const Express = require('express');

const Rotas = require('./routes/Professores');

const Aplicativo = new Express();

Aplicativo.use(Express.json());

Aplicativo.use('/professores', Rotas);

Aplicativo.listen(5678, () => console.log('Servidor rodando!'));