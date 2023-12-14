function preencherDadosDoPerfil() {
    // Obter os elementos HTML pelos IDs
    const nomeElement = document.getElementById('nome');
    const emailElement = document.getElementById('email');
    const cpfElement = document.getElementById('cpf');
    const dataElement = document.getElementById('data');

    // Obter os dados do usuário do armazenamento local
    const userDataJSON = localStorage.getItem('userData');

    if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);

        // Preencher os elementos com os dados do usuário
        nomeElement.textContent = userData.usuario;
        emailElement.textContent = userData.email;
        cpfElement.textContent = userData.cpf;
        dataElement.textContent = userData.date;
    } else {
        console.error('Dados do usuário não encontrados no armazenamento local.');
    }
}

// Chamar a função para preencher os dados do perfil ao carregar a página
window.onload = function () {
    preencherDadosDoPerfil();
};