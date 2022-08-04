
function RequererTodos() {

    const [ , servidor] = arguments;

    servidor.json([
        {
            id: 1,
            nome: 'Anwar'
        },
        {
            id: 2,
            nome: 'Willian'
        },
    ]);
}

function RequererUmPelaId() {
    
    const [cliente , servidor] = arguments;

    const { id } = cliente.params;

    const professores = [
        {
            id: 1,
            nome: 'Anwar'
        },
        {
            id: 2,
            nome: 'Willian'
        },
    ];

    let professor = professores.find(professor => professor.id == id);

    
    servidor.json(professor);

}

module.exports = { RequererTodos, RequererUmPelaId }