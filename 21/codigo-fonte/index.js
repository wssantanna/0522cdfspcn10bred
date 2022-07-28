
const Express = require('express');

const Aplicativo = new Express();

Aplicativo.use(Express.json());

Aplicativo.get('/', (RequisicaoCliente, RespostaServidor) => RespostaServidor.send('API Ok!'));

Aplicativo.get('/post', (RequisicaoCliente, RespostaServidor) => RespostaServidor.json());

Aplicativo.post('/post', (RequisicaoCliente, RespostaServidor) => RespostaServidor.json());

Aplicativo.put('/post', (RequisicaoCliente, RespostaServidor) => RespostaServidor.json());

Aplicativo.patch('/post', (RequisicaoCliente, RespostaServidor) => RespostaServidor.json());

Aplicativo.delete('/post', (RequisicaoCliente, RespostaServidor) => RespostaServidor.json());


Aplicativo.listen(1234, () => console.log('Servidor funcionando!'));