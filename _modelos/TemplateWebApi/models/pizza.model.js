

const { DataTypes } = require('sequelize');

const Database = require('../database');

const PizzaModel = Database.define('pizzas', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    size: DataTypes.ENUM('pequena', 'média', 'grande'),
    flavor: DataTypes.STRING
});

module.exports = PizzaModel;