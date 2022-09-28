/*

    1. Configurações inicias
    Conexão com o banco de dados
*/

// Importo o ORM Sequelize para minha aplicação
const { Sequelize } = require('sequelize');

// Criei uma instância do banco de dados Blog
const BlogContext = new Sequelize('blog', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Validei se teve algum problema na conexão
try {
    BlogContext.authenticate();
    console.log('Comunicação com banco de dados Okay!');
}
catch (error) {
    console.error('Não foi possível se comunicar com banco de dados:', error);
}

module.exports = BlogContext;