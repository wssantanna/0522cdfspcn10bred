
const RecipeModel = require('../models/RecipeModel');

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

        const recipe = await RecipeModel.findByPk(idRecipe);

        return recipe;

    },

    DeleteById: async function (idRecipe) {

        const recipe = await RecipeModel.findByPk(idRecipe);

        recipe.destroy();

        return recipe;

    },

    UpdateById: async function (idRecipe, bodyNewRecipe) {

        const recipe = await RecipeModel.findByPk(idRecipe);

        recipe.set(bodyNewRecipe);

        const recipeUpdated = await recipe.save();

        return recipeUpdated;
    }
}

module.exports = RecipeService;


