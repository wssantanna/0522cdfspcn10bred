
const Express = require('express');

const ProfessoresRouter = require('./Routers/ProfessoresRouter');
const AlunosRouter = require('./Routers/AlunosRouter');

const Aplicativo = new Express();

Aplicativo.use(Express.json());

Aplicativo.use('/', ProfessoresRouter);
Aplicativo.use('/', AlunosRouter);
Aplicativo.get('/', (_, servidor) => servidor.send('Home'));

Aplicativo.listen(5678, () => console.log('servidor rodando!'));