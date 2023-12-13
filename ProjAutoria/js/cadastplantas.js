function catalogarPlanta() {
    const id = document.getElementById('name').value; // Alterei o id para usar o nome como identificador
    const tipo = document.getElementById('tipo').value;
    const colheita = document.getElementById('colheita').value;
    const desc = document.getElementById('desc').value;
    const rest = document.getElementById('rest').value;

    if (!id || !tipo || !colheita || !desc || !rest) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    const planta = {
        id: id,
        tipo: tipo,
        colheita: colheita,
        desc: desc,
        rest: rest
    };

    const plantacoes = JSON.parse(localStorage.getItem('plantacoes')) || [];
    plantacoes.push(planta);
    localStorage.setItem('plantacoes', JSON.stringify(plantacoes));

   
    alert('Plantação cadastrada com sucesso!');

   
    document.getElementById('cadastroForm').reset();

    
    exibirPlantacoes();
}
