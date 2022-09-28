// Importei minhas variáveis de ambiente local.
require('dotenv')
    .config();
// Importei recurso JsonWebToken.
const Jwt = require('jsonwebtoken');

module.exports = function TokenService() {
    // Definir a palavra chave secreta que será utilizada na criptografia do Token.
    const secretKey = process.env.TOKEN_SECRET_KEY;

    this.CreateToken = function (bodyPayload) {
        // Cria um token válido considerando o payload recebido.
        let token = Jwt.sign(bodyPayload, secretKey);
        // Retorna o token válido.
        return token;
    }

    this.VerifyToken = function (currentToken) {
        // Verifica se o Token é válido...
        const payloadDecoded = Jwt.verify(
            currentToken,
            secretKey,
            (error, decoded) => {
                // Caso o token não seja válido...
                if (error) {
                    // dispara uma excessão/error.
                    throw new UserException("InvalidToken");
                }
                // Caso o token seja válido...
                else {
                    // retorna payload...
                    return decoded;
                }
            });

        // Retorno o payload, caso eu precise para definir tipos de acessos 
        // ou retornar alguma informação para usuário.
        return payloadDecoded;
    }
}