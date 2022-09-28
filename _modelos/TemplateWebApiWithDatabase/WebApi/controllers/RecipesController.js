// Importei o "banco de dados" fake.
// const DbContextMock = require('../models/DbContextMock');
const DbContext = require('../../Database/services/RecipeService');

module.exports = function RecipesController() {

    // Seleciono a tabela receitas do contexto (banco de dados).
    // let dbRecipes = DbContextMock.recipes;

    this.GetAll = async function () {
        // Separo a requisição do cliente e do servidor.
        const [, responseServer] = arguments;
        // Nota: Esse processo será realizado utilizando
        // recurso de algum ORM futuramente, este é apenas uma simulação.

        // Anteriormente: Acesso ao Mock
        // const recipes = dbRecipes.map(recipe => recipe);

        // Atualmente: Acesso a tabela no Database
        const recipes = await DbContext.GetAll();

        // Retorno status 200 e a lista de receitas.
        responseServer
            .status(200)
            .json(recipes);
    }

    this.GetById = async function () {
        // Separo a requisição do cliente e do servidor.
        const [requireClient, responseServer] = arguments;
        // Destruturando id da rota.
        const { id } = requireClient.params;
        // Busco no banco de dados a receite pelo número da id.
        // e armazeno na variável recipeFound.

        // Anteriormente: Acesso ao Mock
        // const recipeFound = dbRecipes.find(recipe => recipe.id == id);

        // Atualmente: Acesso a tabela no Database
        const recipeFound = await DbContext.GetById(id);

        // Se conseguir encontrar a receita.
        if (recipeFound) {
            // Retorno status 200 e a receita.
            responseServer
                .status(200)
                .json(recipeFound);
        }
        // Caso não encontre a receita.
        else {
            // Retorno 404 e uma mensagem personalizada.
            responseServer
                .status(404)
                .json({ message: 'Receita não foi encontrada!' });
        }
    }

    this.Create = function () {
        // Separo a requisição do cliente e do servidor.
        const [requireClient, responseServer] = arguments;
        // Destruturando id, title, description do corpo da requisição.
        const { id, title, description } = requireClient.body;
        // Armazeno id, title, description em uma variável.
        // Nota: Esse processo deixará de existir quando utilizarmos 
        // um ORM para manipular o banco de dados.
        const newRecipe = { title, description }


        // Se id, title e description não forem null ou underfined
        // Nota: id será criada pela ORM futuramente.
        if (title && description) {
            // Atualmente: Acesso a tabela no Database para Criar
            DbContext.Create(newRecipe);
            // Retorno status 201 e o elemento criado.
            // Obs.: não estamos salvando a informação, apenas retornando-a.
            responseServer
                .status(201)
                .json(newRecipe);
        }
        else {
            // Caso o corpo da requisição não possua
            // os atributos necessários, retorno 400 e uma mensagem personalizada.
            responseServer
                .status(400)
                .json({ message: 'Formato do objeto inválido!' });
        }
    }

    this.DeleteById = async function () {
        // Separo a requisição do cliente e do servidor.
        const [requireClient, responseServer] = arguments;
        // Destruturando id da rota.
        const { id } = requireClient.params;
        // Busco no banco de dados a receite pelo número da id.
        // e armazeno na variável recipeFound.

        // Anteriormente: Acesso ao Mock
        //const recipeFound = dbRecipes.find(recipe => recipe.id == id);

        // Atualmente: Acesso a tabela no Database para Deletar
        const recipeFound = await DbContext.DeleteById(id)

        // Se conseguir encontrar a receita.
        if (recipeFound) {
            // Retorno status 200 e uma mensagem personalizada.
            responseServer
                .status(200)
                .json({ message: "Receita deletada!" });
        }
        // Caso não encontre a receita.
        else {
            // Retorno 404 e uma mensagem personalizada.
            responseServer
                .status(404)
                .json({ message: 'Receita não foi encontrada!' });
        }
    }

    this.UpdateById = function () {
        // Separo a requisição do cliente e do servidor.
        const [requireClient, responseServer] = arguments;
        // Destruturando id da rota.
        const { id } = requireClient.params;
        // Destruturando title, description do corpo da requisição.
        const { title, description } = requireClient.body;
        // Busco no banco de dados a receite pelo número da id.
        // e armazeno na variável recipeFound.

        // Anteriormente: Acesso ao Mock
        // const recipeFound = dbRecipes.find(recipe => recipe.id == id);

        // Atualmente: Acesso a tabela no Database para Atualizar
        const recipeFound = {}

        // Se conseguir encontrar a receita.
        if (recipeFound) {
            // Atualizo title e description.
            // Nota: A atualização das propriedades não será realizada
            // desta maneira pelo ORM.
            recipeFound.title = title;
            recipeFound.description = description;
            // Retorno status 200 e valor atualizado.
            responseServer
                .status(200)
                .json(recipeFound);
        }
        // Caso não encontre a receita.
        else {
            // Retorno 404 e uma mensagem personalizada.
            responseServer
                .status(404)
                .json({ message: 'Receita não foi encontrada!' });
        }
    }
}