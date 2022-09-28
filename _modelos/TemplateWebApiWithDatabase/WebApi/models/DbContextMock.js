// Simulação (Mock) do banco de dados.
const DbContextMock = {
    // Representação de uma tabela de usuários.
    users: [
        {
            id: 1,
            name: "Willian",
            username: "wssantanna",
            password: "123"
        },
        {
            id: 2,
            name: "Bruno",
            username: "bruno",
            password: "123"
        },
        {
            id: 3,
            name: "Francisco",
            username: "francisco",
            password: "123"
        },
        {
            id: 4,
            name: "Isac",
            username: "isac",
            password: "123"
        },
    ],
    // Representação de uma tabela de receitas.
    recipes: [
        {
            id: 1,
            title: "Bolo de chocolate",
            description: "Bolo de chocolate com cafézinho"
        },
        {
            id: 2,
            title: "Bolo de cenoura",
            description: "Bolo de cenoura com agua bem gelada"
        }
    ]
};
// Exporto o Mock do banco de dados.
module.exports = DbContextMock;