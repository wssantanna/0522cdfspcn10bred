
const Express = require('express');

const WebService = new Express();

WebService.use(Express.json());

// Banco de dados Fake
const DbUsuarios = [
    {
        id: 1,
        usuario: 'wssantanna',
        senha: '123'
    },
    {
        id: 2,
        usuario: 'anwar',
        senha: '123'
    },
    {
        id: 3,
        usuario: 'isac',
        senha: '123'
    },
];

/**
 * 
 * 1 - cliente = requisição (usuario e senha) req
 * 2 - servidor = resposta (usuario e senha) res
 */

WebService.post('/autenticar', (cliente, servidor) => {

    // 1. Capturei usuário e senha do corpo da requisição.
    const { usuario, senha } = cliente.body
    console.log("credenciais:", usuario, senha);

    // 2. Validei se usuário e senha existem no banco de dados.
    let usuarioSenhaValidos = function (credencial) {
        // 2.1. Validar credêncial usuário e senha
        let usuarioValido = usuario == credencial.usuario;
        let senhaValida = senha == credencial.senha;
        let credencialValida = usuarioValido && senhaValida;

        // 2.2. Retorno se encontrou o usuário.
        return credencialValida; // true ou false
    }

    let usuarioEncontrado = DbUsuarios.find(function (credencial) {
        return usuarioSenhaValidos(credencial)
    });

    console.log("Usuário encontrado:", usuarioEncontrado);

    // 3. Condicionei a mensagem que o servidor irá enviar como resposta.
    // underfined = false; {} = true
    if (usuarioEncontrado) {
        servidor.json({ mensagem: "Usuário autenticado", token: 'bruno' });
    }
    else {
        servidor.json({ mensagem: "Usuário ou senha incorreta" });
    }

});


WebService.listen(2093, () => console.log('Servidor de autenticação esta okay...'));