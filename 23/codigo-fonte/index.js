
const Express = require('express');

const ProfessoresRouter = require('./Routers/ProfessoresRouter');
const AlunosRouter = require('./Routers/AlunosRouter');
const MainViewRouter = require('./Routers/MainViewRouter');

const Aplicativo = new Express();

Aplicativo.use(Express.json());

Aplicativo.use('/', MainViewRouter);

Aplicativo.use('/api', ProfessoresRouter);
Aplicativo.use('/api', AlunosRouter);

Aplicativo.listen(5678, () => console.log('servidor rodando!'));