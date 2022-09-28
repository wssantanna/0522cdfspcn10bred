
const { Sequelize } = require('sequelize');

// Configurar a conexão com o banco de dados
const Database = new Sequelize('pizzaria', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Tentar...
try {
    // Autenticar com a configuração de conexão anterior
    Database.authenticate();
    // Sincronizar as alterações com o banco de dados
    Database.sync();
    console.log('Conexão realizada com sucesso');
}
catch (error) {
    console.log('Não foi possível realizar a conexão com banco de dados', erro);
}

module.exports = Database;