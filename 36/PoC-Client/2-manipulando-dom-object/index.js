
// Requisição com servidor do endereço a partir do CEP
async function requererUmEnderecoPeloCep(CEP) {
    // 1. Requisição para o endpoint
    const requisicao = await fetch(`https://viacep.com.br/ws/${CEP}/json/`)
    // 2. Eu converto os dados em json()
    const enderecoEncontrado = await requisicao.json();

    return enderecoEncontrado;
}

function pesquisarPeloCep() {
    // 1. Seleção do elemento
    const elementoCep = document.getElementById('inputCep');
    // 2. Capturar o valor do elemento
    const cep = elementoCep.value;
    // 3. Realizo uma requisição e apresento na tela
    requererUmEnderecoPeloCep(cep)
        .then(endereco => {
            // 1. Apresentar em tela
            // 1.1. Selecionar o elemento pai
            const cabecalho = document.getElementById('root');
            // 1.2. Adicione um valor ao elemento pai
            cabecalho.innerHTML += `
            <p>
                <strong>Endereço:</strong> ${endereco.logradouro} - ${endereco.uf}
            </p>
        `;
        });
}

