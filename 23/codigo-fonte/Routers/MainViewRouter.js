const Express = require('express');

const { HomeViewController } = require('../Controllers/HomeViewController');

const MainViewRouter = Express.Router(); 

MainViewRouter.get('/', HomeViewController);

module.exports = MainViewRouter;