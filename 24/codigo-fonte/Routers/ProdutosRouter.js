const Express = require('express');

const ProdutosController = require('../Controllers/ProdutosController');

const Router = Express.Router();

const { GetAll, GetById, Create, Replace, Delete } = new ProdutosController();

// Requerer todos Produtos
Router.get("/", GetAll);
// Requerer um Produto pela Id
Router.get("/:id", GetById);
// Criar um Produto
Router.post("/", Create);
// Substituir um Produto
Router.put("/", Replace);
// Deletar um Produto
Router.delete("/", Delete);

module.exports = Router;