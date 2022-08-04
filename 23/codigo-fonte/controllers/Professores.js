
function TodosProfessores() {
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

module.exports = { TodosProfessores }