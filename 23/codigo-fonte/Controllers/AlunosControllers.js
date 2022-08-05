

function RequererTodos() {
    const [ , servidor] = arguments;

    servidor.json([
        {
            id: 1,
            nome: 'Willian'
        },
        {
            id: 2,
            nome: 'Anwar'
        },
        {
            id: 3,
            nome: 'Weslley'
        },
    ]);

}

function RequererUmPelaId() {

    const [cliente, servidor] = arguments;

    servidor.json({
        id: 1,
        nome: 'Willian'
    });
}

function RequererFiltrarPor() {

    const [cliente, servidor] = arguments;

    servidor.json({
        id: 1,
        nome: 'Francisco'
    });
}

function RequererCriarUm() {
    const [cliente, servidor] = arguments;

    servidor.json({
        id: 4,
        nome: 'Willian'
    });
}

function RequererSubstituirUmPelaId() {

    const [cliente, servidor] = arguments;

    servidor.json({
        id: 1,
        nome: 'Pedro'
    });
}

function RequererAtualizarUmPelaId() {

    const [cliente, servidor] = arguments;

    servidor.json({
        id: 3,
        nome: 'Lucas'
    });
}

function RequererDeletarUmPelaId() {

    const [cliente, servidor] = arguments;

    servidor.json({
        id: 3,
        nome: 'Lucas'
    })
}


module.exports = { 
    RequererTodos, 
    RequererUmPelaId,
    RequererFiltrarPor, 
    RequererCriarUm,
    RequererSubstituirUmPelaId,
    RequererAtualizarUmPelaId,
    RequererDeletarUmPelaId
};