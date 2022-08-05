const Express = require('express');

const { 
    RequererTodos, 
    RequererUmPelaId,
    RequererFiltrarPor, 
    RequererCriarUm,
    RequererSubstituirUmPelaId,
    RequererAtualizarUmPelaId,
    RequererDeletarUmPelaId } = require('../Controllers/ProfessoresControllers');

const ProfessoresRouter = Express.Router(); 

ProfessoresRouter.get('/professores', RequererTodos);

ProfessoresRouter.get('/professores', RequererFiltrarPor);

ProfessoresRouter.get('/professores/:id', RequererUmPelaId);

ProfessoresRouter.post('/professores', RequererCriarUm);

ProfessoresRouter.put('/professores/:id', RequererSubstituirUmPelaId);

ProfessoresRouter.patch('/professores/:id', RequererAtualizarUmPelaId);

ProfessoresRouter.delete('/professores/:id', RequererDeletarUmPelaId);


module.exports = ProfessoresRouter;