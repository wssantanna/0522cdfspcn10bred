const { DataTypes } = require('sequelize');

const Database = require('./Context');

const RecipeModel = Database.define('receita', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
});

module.exports = RecipeModel;