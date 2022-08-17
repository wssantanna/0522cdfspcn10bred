
const Express = require('express');
var jwt = require('jsonwebtoken');

const WebService = new Express();

WebService.use(Express.json());

WebService.get('/autorizar', (cliente, servidor) => {
    // 1. Configurei a chave secreta;
    let chaveSecreta = 'digital-house';
    // 2. Corpo do token ou payload
    let payload = { nome: 'Willian' }
    // 2. Token gerado
    let token = jwt.sign(payload, chaveSecreta);
    // 3. Retorno o token para usuário
    servidor.json({ token: token });
});

WebService.post('/autorizar', (cliente, servidor) => {

    // 1. Capturando o token enviado no corpo.
    const { token } = cliente.body;
    console.log("Token enviado pelo usuário", token);

    /* 
        try...catch

        É utilizada para realizar o tratamento de um erro... 
        Normalmente uma aplicação para de funcionar quando temos um erro,
        utilizando try, podemos testar se o recurso irá funcionar,
        e caso não consiga, utilizando catch temos a possibilidade de executar
        um script para o tratamento do erro.
    */
    try {
        // 2.1. Validando se o token é válido.
        let chaveSecreta = 'digital-house';
        let payloadDesmascarado = jwt.verify(token, chaveSecreta);
        // 2.2. Se o token for válido, retorno o payload "Corpo do Token".
        console.log('Corpo desmarado:', payloadDesmascarado);
        // - Retorno da mensagem de autorização e o payload "Corpo do Token".
        servidor.json({ mensagem: 'Autorizado', payload: payloadDesmascarado });
    }
    catch (error) {
        // 3. Caso dê erro, retorno o objeto do erro.
        console.log('Erro', error);
        // - Retorno uma mensagem para usuário.
        servidor.json({ mensagem: 'Não autorizado' });
    }
});

WebService.listen(2093, console.log('Servidor de autorização esta okay...'));