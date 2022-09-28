// Importei o Token Service.
const TokenService = require('../services/TokenService');

// Destruturei o recurso VerifyToken para verificar
// se o Token de Autorização é válido.
const { VerifyToken } = new TokenService();

module.exports = function TokenInterpector() {

    this.Authorize = function () {
        // Separei a requisição do cliente, a resposta do servidor 
        // e método para executar o próximo controlador.
        const [requireClient, responseServer, runNextController] = arguments;
        // Capturo do cabecalho o token da variável Authorization.
        const currentToken = requireClient.header('Authorization');
        // Se a variável Autorization possui um Token.
        if (currentToken) {
            // Nota: Utilizei uma estrutura try...catch, pois implementei
            // o método VerifyToken para retornar o payload ou uma excessão.
            try {
                // Varifico se o token é válido e armazeno o payload desmarcarado.
                const payloadDecoded = VerifyToken(currentToken);
                // Se o token for válido, no caso possuir um payload desmarcarado.
                if (payloadDecoded) {
                    // Autorizo o acesso do próximo controlador.
                    runNextController();
                }
                else {
                    // Caso o token não seja válido, retorno status 401 e uma mensagem
                    // informando que o Token não é válido.
                    responseServer
                        .status(401)
                        .json({
                            mensage: 'Token de autorização inválido!'
                        });
                }
            }
            catch (error) {
                // Caso exista algum erro na verificação do token
                // retorno status 500, uma mensagem personalizada.
                responseServer
                    .status(500)
                    .json({
                        mensage: 'Erro na validação do Token!',
                        bodyMessage: error.mensage
                    });
            }
        }
        else {
            // Caso receba requisição sem token de autenticação
            // retorno status 401 e uma mensagem personalizada.
            responseServer
                .status(401)
                .json({
                    mensage: 'Não há autorização.'
                });
        }
    }
}