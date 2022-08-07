function HomeViewController() {
    const [,servidor] = arguments;

    servidor.sendFile('../Views/Home.html');
}

module.expots = { HomeViewController };