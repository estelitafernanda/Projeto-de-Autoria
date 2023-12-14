function exibirSolos() {
    console.log('Função exibirSolos está sendo chamada.');
    const cadastrados = JSON.parse(localStorage.getItem('solos')) || [];
    const containerDados = document.getElementById('dadosSolo');
    const mensagemSemCadastro = document.getElementById('mensagemSemCadastro');
    const container4 = document.querySelector('.container4'); 

    if (!containerDados || !mensagemSemCadastro || !container4) {
        console.error("Elemento 'dadosSolo' ou 'mensagemSemCadastro' ou 'container4' não encontrado.");
        return;
    }

    containerDados.innerHTML = '';

    if (cadastrados.length > 0) {
        for (const solo of cadastrados) {
            const divSolo = criarDivSolo(solo);
            containerDados.appendChild(divSolo);
        }
        mensagemSemCadastro.style.display = 'none';
        container4.style.display = 'block'; 
    } else {
        mensagemSemCadastro.style.display = 'block';
        container4.style.display = 'none'; 
    }
}
function excluirSolos(solo) {
    const cadastrados = JSON.parse(localStorage.getItem('solos')) || [];
    console.log('Antes da exclusão:', cadastrados);
    cadastrados.splice(solo, 1); 
    console.log('Após a exclusão:', cadastrados);
    localStorage.setItem('solos', JSON.stringify(cadastrados));
    exibirSolos(); 
}
function criarDivSolo(solo) {
    const divSolo = document.createElement('div');
    divSolo.classList.add('solo-item'); 
    divSolo.style.display = 'inline-block';
    divSolo.style.marginRight = '20px';
    divSolo.style.left = '20px';
    divSolo.style.maxWidth = '100%';
    divSolo.style.marginTop = '20px';
    divSolo.style.width = '150px';
    divSolo.style.height = '170px';
    divSolo.style.borderRadius = '25px';
    divSolo.style.border = '3px solid #3D1D0B';
    divSolo.style.background = '#86624E';
    divSolo.style.boxShadow = '0px 4px 4px 0px rgba(0, 0, 0, 0.25)';

    const imgElement = document.createElement('img');
    imgElement.src = `imagens/solo2.png`; 
    imgElement.classList.add('solo-image'); 
    divSolo.appendChild(imgElement);

    const idElement = document.createElement('p');
    idElement.textContent = solo.id;
    divSolo.appendChild(idElement);

    const tipoElement = document.createElement('p');
    tipoElement.textContent = solo.tipo;
    divSolo.appendChild(tipoElement);

    const excluirButton = document.createElement('button');
    excluirButton.textContent = 'X';
    excluirButton.style.fontFamily = 'JetBrains Mono';
    excluirButton.style.left = '60px';
    excluirButton.style.fontSize = '12px';
    excluirButton.style.width = "30px";
    excluirButton.style.height = '25px';
    excluirButton.style.top = '-138px';
    excluirButton.style.borderRadius = '5px';
    excluirButton.style.backgroundColor = '#FBEBB9';
    excluirButton.style.border = '3px solid #3D1D0B';
    excluirButton.style.filter = 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))';
    excluirButton.onclick = function() {
        excluirSolos(solo);
    };

    divSolo.appendChild(excluirButton);

    return divSolo;
}

window.onload = exibirSolos;


