const Express = require('express');

const Routers = new Express();
const PizzaRouter = require('./pizza.router');

Routers.use('/pizza', PizzaRouter);

module.exports = Routers;