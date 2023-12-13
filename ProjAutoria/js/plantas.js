function exibirPlantacoes() {
    console.log('Função exibirPlantacoes está sendo chamada.');
    const cadastrados = JSON.parse(localStorage.getItem('plantacoes')) || [];
    const containerDados = document.getElementById('dadosPlanta');
    const mensagemSemCadastro = document.getElementById('mensagemSemCadastro');
    const container4 = document.querySelector('.container4'); 

    if (!containerDados || !mensagemSemCadastro || !container4) {
        console.error("Elemento 'dadosPlanta' ou 'mensagemSemCadastro' ou 'container4' não encontrado.");
        return;
    }

    containerDados.innerHTML = '';

    if (cadastrados.length > 0) {
        for (const planta of cadastrados) {
            const divPlanta = criarDivPlanta(planta);
            containerDados.appendChild(divPlanta);
        }
        mensagemSemCadastro.style.display = 'none';
        container4.style.display = 'block'; 
    } else {
        mensagemSemCadastro.style.display = 'block';
        container4.style.display = 'none'; 
    }
}

function criarDivPlanta(planta) {
    const divPlanta = document.createElement('div');
    divPlanta.classList.add('planta-item'); 
    divPlanta.style.left = '20px';
    divPlanta.style.marginTop = '20px';
    divPlanta.style.width = '150px';
    divPlanta.style.height = '170px';
    divPlanta.style.display = 'inline-block';
    divPlanta.style.maxWidth = '100%';
    divPlanta.style.marginRight = '20px';
    divPlanta.style.borderRadius = '25px';
    divPlanta.style.border = '3px solid #3D1D0B';
    divPlanta.style.background = '#86624E';
    divPlanta.style.boxShadow = '0px 4px 4px 0px rgba(0, 0, 0, 0.25)';

    const imgElement = document.createElement('img');
    imgElement.src = `imagens/campo1.png`; 
    imgElement.classList.add('planta-image'); 
    imgElement.style.top = '20px';
    imgElement.style.width = '40%';
    imgElement.style.height = '40%';
    divPlanta.appendChild(imgElement);

    const idElement = document.createElement('p');
    idElement.textContent = planta.id;
    idElement.style.top = '20px';
    divPlanta.appendChild(idElement);

    const tipoElement = document.createElement('p');
    tipoElement.textContent = planta.tipo;
    tipoElement.style.top = '20px';
    divPlanta.appendChild(tipoElement);

    const colheitaElement = document.createElement('p');
    colheitaElement.textContent = planta.colheita;
    colheitaElement.style.top = '20px';
    divPlanta.appendChild(colheitaElement);

    

    return divPlanta;
}

window.onload = exibirPlantacoes;
