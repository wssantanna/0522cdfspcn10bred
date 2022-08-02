const Express = require('express');

// Inicialização da instância do Servidor.
const Aplicativo = new Express();

Aplicativo.use(Express.json());

// Controladores
function RequererTodos(Cliente, Servidor) {
    let corpo = {
        recurso: 'Listar todos'
    }
    
    return Servidor.json(corpo);
}

function RegistrarUm(Cliente, Servidor) {
    let corpo = {
        recurso: 'Registrar'
    }
    
    return Servidor.json(corpo);
}

function SubstituirUm(Cliente, Servidor) {
    let corpo = {
        recurso: 'Substituir'
    }
    
    return Servidor.json(corpo);
}

function AtualizarUm(Cliente, Servidor) {
    let corpo = {
        recurso: 'Atualizar'
    }
    
    return Servidor.json(corpo);
}

function DeletarUm(Cliente, Servidor) {
    let corpo = {
        recurso: 'Deletar'
    }
    
    return Servidor.json(corpo);
}

// Rotas
Aplicativo.get('/posts/', RequererTodos);

Aplicativo.post('/posts', RegistrarUm);

Aplicativo.put('/posts', SubstituirUm);

Aplicativo.patch('/posts', AtualizarUm);

Aplicativo.delete('/posts', DeletarUm);

// Configurações de inicialização do Servidor.

function DetalheServidor() {
    console.log('Servidor esta funcionando')
}

Aplicativo.listen(5678, DetalheServidor);

/*
    Opção 1 

    let DetalheServidor = () => console.log('Servidor esta funcionando');

    Aplicativo.listen(1234, DetalheServidor);

    Opção 2

    Aplicativo.listen(1234, () => console.log('Servidor esta funcionando'));

    Opção 3

    function DetalheServidor() {
        console.log('Servidor esta funcionando')
    }

    Aplicativo.listen(1234, DetalheServidor);
*/