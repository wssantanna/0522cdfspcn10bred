// Importei o "banco de dados" fake.
const DbContextMock = require('../models/DbContextMock');

module.exports = function RecipesController() {

    // Seleciono a tabela receitas do contexto (banco de dados).
    let dbRecipes = DbContextMock.recipes;

    this.GetAll = function () {
        // Separo a requisição do cliente e do servidor.
        const [, responseServer] = arguments;
        // Nota: Esse processo será realizado utilizando
        // recurso de algum ORM futuramente, este é apenas uma simulação.
        const recipes = dbRecipes.map(recipe => recipe);
        // Retorno status 200 e a lista de receitas.
        responseServer
            .status(200)
            .json(recipes);
    }

    this.GetById = function () {
        // Separo a requisição do cliente e do servidor.
        const [requireClient, responseServer] = arguments;
        // Destruturando id da rota.
        const { id } = requireClient.params;
        // Busco no banco de dados a receite pelo número da id.
        // e armazeno na variável recipeFound.
        const recipeFound = dbRecipes.find(recipe => recipe.id == id);
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
        const newRecipe = { id, title, description }
        // Se id, title e description não forem null ou underfined
        // Nota: id será criada pela ORM futuramente.
        if (id && title && description) {
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

    this.DeleteById = function () {
        // Separo a requisição do cliente e do servidor.
        const [requireClient, responseServer] = arguments;
        // Destruturando id da rota.
        const { id } = requireClient.params;
        // Busco no banco de dados a receite pelo número da id.
        // e armazeno na variável recipeFound.
        const recipeFound = dbRecipes.find(recipe => recipe.id == id);
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
        const recipeFound = dbRecipes.find(recipe => recipe.id == id);
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