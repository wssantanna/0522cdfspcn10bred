
const Express = require('express');

const Aplicativo = new Express();

// Configurações
// Converte os valores de retorno do servidor para JSON.
Aplicativo.use(Express.json()); 
// converte os valores recebidos no formulário de application/x-www-form-urlencoded para JSON.
Aplicativo.use(Express.urlencoded({ extended: true })); // application/json

// Model
const Model = [
    {
        id: 1,
        nome: "Willian"
    },
    {
        id: 2,
        nome: "Isac"
    },
    {
        id: 3,
        nome: "Savio"
    },
]

// Controller Web API
function HomeController(cliente, servidor) {
    servidor.json(Model);
}

function AutenticarController(cliente, servidor) {

    const { usuario, senha } = cliente.body;

    if(usuario == null || senha == null) {
        servidor.send('Preencha o formulário!')
    }
    else {
        servidor.json({ usuario, senha });
    }

}

// View Controller 
function AutenticarViewController(cliente, servidor) {
    servidor.sendFile(__dirname + '/Autenticar.html');
}

function HomeViewController(cliente, servidor) {
    servidor.sendFile(__dirname + '/Home.html');
}

// Rota
Aplicativo.get('/api', HomeController);
Aplicativo.post('/api/autenticar', AutenticarController);

Aplicativo.get('/view', HomeViewController);
Aplicativo.get('/view/autenticar', AutenticarViewController);


// Rota + Controlador  = Endpoint

Aplicativo.listen(5678, () => console.log('Servidor rodando!'));