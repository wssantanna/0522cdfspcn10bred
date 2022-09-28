
const RecipeModel = require('./models/RecipeModel');

const RecipeService = {

    Create: async function (bodyRecipe) {

        const newRecipe = await RecipeModel.create(bodyRecipe);

        return newRecipe;

    },

    GetAll: async function () {

        const recipes = await RecipeModel.findAll();

        return recipes;

    },

    GetById: async function (idRecipe) {

        const recipe = await RecipeModel.findAll();

        return recipe;

    },

    DeleteById: async function (idRecipe) {

        const recipe = await RecipeModel.findAll();

        return recipe;

    },

    UpdateById: async function (idRecipe) {

        const recipe = await RecipeModel.findAll();

        return recipe;
    }
}

module.exports = RecipeService;


