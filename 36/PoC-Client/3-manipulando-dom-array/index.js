
// 1. Funções assíncronas

// Publicações
async function requererTodasPublicacoes() {

    // 1. Requisição para o endpoint
    const requisicao = await fetch('https://jsonplaceholder.typicode.com/posts/')
    // 2. Eu converto os dados em json()
    const listaDePublicacoes = await requisicao.json();

    return listaDePublicacoes;
}

requererTodasPublicacoes()
    .then(publicacoes => {
        publicacoes.map(publicacao => {
            const lista = document.getElementById('elementoLista');
            lista.innerHTML += `
                <li>
                    <h2>${publicacao.title}</h2>
                    <p>${publicacao.body}</p>
                </li>
            `;
        })
    });