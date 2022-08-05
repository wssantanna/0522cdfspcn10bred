const Express = require('express');

const {     
    RequererTodos, 
    RequererUmPelaId,
    RequererFiltrarPor, 
    RequererCriarUm,
    RequererSubstituirUmPelaId,
    RequererAtualizarUmPelaId,
    RequererDeletarUmPelaId } = require('../Controllers/AlunosControllers');

const AlunosRouter = Express.Router(); 

AlunosRouter.get('/alunos', RequererTodos);

AlunosRouter.get('/alunos', RequererFiltrarPor);

AlunosRouter.get('/alunos/:id', RequererUmPelaId);

AlunosRouter.post('/alunos', RequererCriarUm);

AlunosRouter.put('/alunos/:id', RequererSubstituirUmPelaId);

AlunosRouter.patch('/alunos/:id', RequererAtualizarUmPelaId);

AlunosRouter.delete('/alunos/:id', RequererDeletarUmPelaId);

module.exports = AlunosRouter;