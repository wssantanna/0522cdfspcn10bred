// Importei minhas variáveis de ambiente local.
require('dotenv')
    .config();

// Importei o Express.
const Express = require('express');

// Importei as Rotas.
const AuthRouter = require('./routers/AuthRouter');
const RecipesRouter = require('./routers/RecipesRouter');

// Importei os Middlewares
const TokenInterpector = require('./middlewares/TokenInterpector');

// Criei uma instância do Express.
// Nota: Estudar Programação Orientada Objeto (porque POO é vida).
const WebService = new Express();

// Adicionei suporte a extensão json.
WebService.use(Express.json());

// Estou interceptando todos os métodos das rotas de Receitas
// para validando se existe Token de autorização e se a autorização é válida. 
WebService.use('/recipes', TokenInterpector.Authorize);

// Criei todas as nossas Rotas.
WebService.use('/auth', AuthRouter);
WebService.use('/recipes', RecipesRouter);

// Inicializar a instância do Express em alguma porta do meu servidor.
WebService.listen(process.env.SERVE_PORT, console.log('Web Service Okay'));