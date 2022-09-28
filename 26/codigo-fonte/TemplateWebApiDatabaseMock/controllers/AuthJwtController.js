// Importei o "banco de dados" fake.
const DbContextMock = require('../models/DbContextMock');
// Importei o Token Service, responsável por criar Token e Validar autorização.
// Nota: Não estou utilizando a validação, pois será utilizada em rotas protegidas.
const TokenService = require('../services/TokenService');
// Do Token Service, importei apenas o CreateToken, responsável por criar um Token válido.
const { CreateToken } = new TokenService();

module.exports = function AuthJwtController() {

    // Seleciono a tabela usuário do contexto (banco de dados).
    let dbUser = DbContextMock.users;

    // Validar se usuário existe e é válido.
    // Se for válido retornar um Token Jwt para autorização de uso das rotas.
    this.Authentication = function () {
        // Separo a requisição do cliente e do servidor.
        const [requireClient, responseServer] = arguments;
        // Capturo o corpo da requisição do cliente.
        const credential = requireClient.body;
        // Busco no servidor um usuário que tenha username e senha identicas ao corpo da requisição.
        const userFound = dbUser.find(currentDbCredendial => hasUser(currentDbCredendial, credential))
        // Caso o usuário seja encontrado...
        if (userFound) {
            // Destrutudando os atributos que desejo retornar para usuário
            // autenticado persistir no Front-end.
            const { id, name } = userFound;
            // O servidor responde no corpo nome, token e status 200.
            responseServer
                .status(200)
                .json({
                    user: {
                        id,
                        name
                    },
                    token: CreateToken({ name })
                });
        }
        else {
            // O servidor responde no corpo mensagem de erro e status 400.
            responseServer
                .status(400)
                .json({
                    messengeError: "Usuário ou senha incorreta."
                });
        }
    }

    function hasUser(dbCredencial, credential) {
        // Valido se o username é igual no banco de dados e no corpo da requisição do usuário.
        let usernameIsValid = (dbCredencial.username == credential.username);
        // Valido se a senha é igual no banco de dados e no corpo da requisição do usuário.
        let passwordIsValid = (dbCredencial.password == credential.password);
        // Comportado se username e senha são iguais.
        let credentialIsValid = (usernameIsValid && passwordIsValid);
        // Retorno true ou false se a credencial é válida.
        return credentialIsValid;
    }
}