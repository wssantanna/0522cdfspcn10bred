const Database = require("../Models/Database");

function ProdutosController() {

    // Requerer todos Produtos
    this.GetAll = function () {
        // Separação da Requisição do cliente e Resposta do servidor.
        const [, server] = arguments;
        // Armazenei a lista de products.
        const products = Database.products;
        // Retorno a lista de products.
        server.json(products);
    }

    // Requerer um Produto pela Id
    this.GetById = function () {
        // Separação da Requisição do cliente e Resposta do servidor.
        const [client, server] = arguments;
        // Separei a Id que receberei na rota.
        // HTTP GET: products/1
        const { id } = client.params;
        // Armazenei a lista de products.
        const products = Database.products;
        // Validando se o produto existe no banco de dados a partir de sua id.
        const hasProduct = product => product.id == id;
        // Armazeno o primeiro produto encontrado no banco de dados.
        const productFound = products.find(hasProduct);
        // Retorno o produto encontrado no banco de dados.
        server.json(productFound);
    }

    // Criar um Produto
    this.Create = function () {
        // Separação da Requisição do cliente e Resposta do servidor.
        const [client, server] = arguments;
        // Corpo da requisição.
        // HTTP POST: products/
        const { body } = client;
        //
        const products = Database.products;
        // Armazeno o novo produto.
        const newProduct = body;
        // 
        Database.products = [...products, newProduct];
        // Retorno o produto cadastrado.
        server.json(newProduct);
    }

    // Substituir um Produto
    this.Replace = function () {
        // Separação da Requisição do cliente e Resposta do servidor.
        const [client, server] = arguments;
        // Separei a Id que receberei na rota.
        // HTTP GET: products/1
        const { id } = client.params;
        const { body } = client;
        // Crio uma variável para receber o novo produto 
        let newProduct = body;
        //
        const products = Database.products;
        //
        const searchForProductAndReplaceIt = product => {
            if (product.id == id) {
                product = newProduct;
            }
        }
        // Busco o produto pela Id e quando encontro eu substituo seu valor pelo novo produto.
        products.forEach(searchForProductAndReplaceIt);
        // Retorno o novo produto.
        server.json(newProduct);
    }

    // Deletar um Produto
    this.Delete = function () {
        // Separação da Requisição do cliente e Resposta do servidor.
        const [client, server] = arguments;
        // Separei a Id que receberei na rota.
        // HTTP DELETE: products/1
        const { id } = client.params;
        //
        const [products] = Database;
        //
        let productDeleted;
        //
        const searchForProductAndDeleteIt = (product, indexProduct) => {
            if (product.id == id) {
                productDeleted = product;
                products.splice(indexProduct, 1);
            }
        }
        //
        products.forEach(searchForProductAndDeleteIt);
        //
        server.json(productDeleted);
    }
}

module.exports = ProdutosController;