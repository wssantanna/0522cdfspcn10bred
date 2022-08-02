const Express = require('express');

const Aplicativo = new Express();

// Configurações
// Converte os valores de retorno do servidor para JSON.
Aplicativo.use(Express.json()); 
// converte os valores recebidos no formulário de application/x-www-form-urlencoded para JSON.
Aplicativo.use(Express.urlencoded({ extended: true })); 

function Autenticar(client, servidor) {

    // Separação dos campos
    const { email, senha } = cliente.body;

    // Retorno o JSON dos dados capturados
    servidor.json({ email, senha });
}

// Rotas
Aplicativo.get('/autenticar', (cliente, servidor) => {
    servidor.sendFile(`${__dirname}/views/Autenticar.html`);
});

Aplicativo.post('/api/autenticar', Autenticar);

Aplicativo.listen(5678);