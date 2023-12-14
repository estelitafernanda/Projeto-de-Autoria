function exibirFuncionarios() {
    console.log('Função exibirFuncionarios está sendo chamada.');
    const cadastrados = JSON.parse(localStorage.getItem('funcionarios')) || [];
    const containerDados = document.getElementById('dadosFuncionario');
    const mensagemSemCadastro = document.getElementById('mensagemSemCadastro');
    const container4 = document.querySelector('.container4'); 

    if (!containerDados || !mensagemSemCadastro || !container4) {
        console.error("Elemento 'dadosFuncionario' ou 'mensagemSemCadastro' ou 'container4' não encontrado.");
        return;
    }

    containerDados.innerHTML = '';

    if (cadastrados.length > 0) {
        cadastrados.forEach((funcionario, index) => {
            const divFuncionario = criarDivFuncionario(funcionario, index);
            containerDados.appendChild(divFuncionario);
        });
        mensagemSemCadastro.style.display = 'none';
        container4.style.display = 'block'; 
    } else {
        mensagemSemCadastro.style.display = 'block';
        container4.style.display = 'none'; 
    }
}
function excluirFuncionario(funcionario) {
    const cadastrados = JSON.parse(localStorage.getItem('funcionarios')) || [];
    console.log('Antes da exclusão:', cadastrados);
    cadastrados.splice(funcionario, 1); 
    console.log('Após a exclusão:', cadastrados);
    localStorage.setItem('funcionarios', JSON.stringify(cadastrados));
    exibirFuncionarios(); 
}

function criarDivFuncionario(funcionario) {
    const divFuncionario = document.createElement('div');
    divFuncionario.classList.add('funcionario-item'); 
    divFuncionario.style.width = '400px';
    divFuncionario.style.height = '200px';
    divFuncionario.style.marginRight = '20px';
    divFuncionario.style.display = 'inline-block';
    divFuncionario.style.maxWidth = '100%';
    divFuncionario.style.left = '12px';
    divFuncionario.style.borderRadius = '35px';
    divFuncionario.style.border = '5px solid #3D1D0B';
    divFuncionario.style.background = '#86624E';
    divFuncionario.style.top = '20px';
    divFuncionario.style.flex = '1';
    
    
    const imagemElement = document.createElement('img');
    imagemElement.src = `data:image/png;base64,${funcionario.imagem}`;
    imagemElement.style.width = '25%';
    imagemElement.style.height = '70%';
    imagemElement.style.right = '130px';
    imagemElement.style.top = '25px';
    imagemElement.style.border = '2px solid black';
    imagemElement.style.borderRadius = '10px';
    divFuncionario.appendChild(imagemElement);

    const funcElement = document.createElement('h1');
    funcElement.textContent = 'Funcionário';
    funcElement.style.color = '#FBE9B9';
    funcElement.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
    funcElement.style.fontFamily = 'Nunito';
    funcElement.style.fontSize = '24px';
    funcElement.style.fontWeight = '700';
    funcElement.style.lineHeight = '25px'; 
    funcElement.style.top = '-130px';
    funcElement.style.left = '30px';
    divFuncionario.appendChild(funcElement);


    const nomeElement = document.createElement('p');
    nomeElement.textContent = funcionario.nome;
    nomeElement.style.top = '-120px';
    nomeElement.style.color = '#000';
    nomeElement.style.fontFamily = 'JetBrains Mono';
    nomeElement.style.fontSize = '16px';
    nomeElement.style.fontWeight = '400';
    nomeElement.style.lineHeight = '25px'; 
    nomeElement.style.left = '30px';
    divFuncionario.appendChild(nomeElement);

    const cpfElement = document.createElement('p');
    cpfElement.textContent = funcionario.cpf;
    cpfElement.style.top = '-120px';
    cpfElement.style.color = '#000';
    cpfElement.style.fontFamily = 'JetBrains Mono';
    cpfElement.style.fontSize = '16px';
    cpfElement.style.fontWeight = '400';
    cpfElement.style.lineHeight = '25px'; 
    cpfElement.style.left = '30px';
    divFuncionario.appendChild(cpfElement);

    const codigoElement = document.createElement('p');
    codigoElement.textContent = funcionario.codigo;
    codigoElement.style.top = '-120px';
    codigoElement.style.color = '#000';
    codigoElement.style.fontFamily = 'JetBrains Mono';
    codigoElement.style.fontSize = '16px';
    codigoElement.style.fontWeight = '400';
    codigoElement.style.lineHeight = '25px'; 
    codigoElement.style.left = '30px';
    divFuncionario.appendChild(codigoElement);

    const funcaoElement = document.createElement('p');
    funcaoElement.textContent = funcionario.funcao;
    funcaoElement.style.top = '-120px';
    funcaoElement.style.color = '#000';
    funcaoElement.style.fontFamily = 'JetBrains Mono';
    funcaoElement.style.fontSize = '16px';
    funcaoElement.style.fontWeight = '400';
    funcaoElement.style.left = '30px';
    funcaoElement.style.lineHeight = '25px'; 
    divFuncionario.appendChild(funcaoElement);

    const excluirButton = document.createElement('button');
    excluirButton.textContent = 'Excluir';
    excluirButton.style.fontFamily = 'JetBrains Mono';
    excluirButton.style.fontSize = '12px';
    excluirButton.style.width = "50px";
    excluirButton.style.height = '30px';
    excluirButton.style.top = '-110px';
    excluirButton.style.borderRadius = '5px';
    excluirButton.style.backgroundColor = '#FBEBB9';
    excluirButton.style.border = '3px solid #3D1D0B';
    excluirButton.style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
    excluirButton.style.left = '30px';
    excluirButton.onclick = function() {
        excluirFuncionario(funcionario);
    };

    divFuncionario.appendChild(excluirButton);


    return divFuncionario;
}
window.onload = function() {
    exibirFuncionarios();
};
