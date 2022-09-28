
// 1. Funções assíncronas

// Publicações
async function requererTodasPublicacoes() {

    // 1. Requisição para o endpoint
    const requisicao = await fetch('https://jsonplaceholder.typicode.com/posts/')
    // 2. Eu converto os dados em json()
    const resposta = await requisicao.json();

    console.log('async/await - Requerer todas as publicações');
    console.log(resposta);
}

async function requererUmaPublicacaoPelaId() {

    // 1. Requisição para o endpoint
    const requisicao = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    // 2. Eu converto os dados em json()
    const resposta = await requisicao.json();

    console.log('async/await - Requerer uma publicação');
    console.log(resposta);
}

// Cep
async function requererUmEnderecoPeloCep(CEP) {

    // 1. Requisição para o endpoint
    const requisicao = await fetch(`https://viacep.com.br/ws/${CEP}/json/`)
    // 2. Eu converto os dados em json()
    const resposta = await requisicao.json();

    console.log('async/await - Requerer um endereço');
    console.log(resposta);
}

requererUmEnderecoPeloCep('01001000');
requererUmaPublicacaoPelaId()
requererTodasPublicacoes()

// 2. then

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(resposta => resposta.json())
    .then(respostaEmJSON => {

        console.log('then() - Requerer uma publicação');
        console.log(respostaEmJSON);
    });

// 3. async/await + then()

async function requererTodasTarefas() {
    // 1. Requisição para o endpoint
    const requisicao = await fetch('https://jsonplaceholder.typicode.com/todos/')
    // 2. Eu converto os dados em json()
    const resposta = await requisicao.json();

    return resposta;
}

requererTodasTarefas()
    .then(resposta => {
        console.log('async/await + then()', resposta);
    });