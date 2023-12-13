function salvarCadastro() {
    const id = document.getElementById('id').value;
    const funcionario = document.getElementById('funcionario').value;
    const func = document.getElementById('func').value;

    if (!id || !funcionario || !func) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    const solos = {
        id: id,
        funcionario: funcionario,
        func: func,
        tipo: tipo,
        form: form,
        comp: comp,
    };

        const cadastro = JSON.parse(localStorage.getItem('solos')) || [];
        cadastro.push(solos);
        localStorage.setItem('solos', JSON.stringify(cadastro));

       
        alert('solo cadastrado com sucesso!');

        
        document.getElementById('cadastroForm').reset();

       
        exibirFuncionarios();
    };

    reader.onerror = error => console.error(error);

function catalogarSolo() {
    const id = document.getElementById('id').value;
    const funcionario = document.getElementById('func').value;
    const tipo = document.getElementById('tipo').value;
    const formacao = document.getElementById('form').value;
    const composicao = document.getElementById('comp').value;
    const importancia = document.getElementById('import').value;
    const informacoes = document.getElementById('infor').value;
    
    if (!id || !funcionario || !tipo || !formacao || !composicao || !importancia || !informacoes) {
         alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    const solo = {
        id: id,
        funcionario: funcionario,
        tipo: tipo,
        formacao: formacao,
        composicao: composicao,
        importancia: importancia,
        informacoes: informacoes
    };
    
    const cadastros = JSON.parse(localStorage.getItem('solos')) || [];
    cadastros.push(solo);
    localStorage.setItem('solos', JSON.stringify(cadastros));
    
    
    alert('Solo cadastrado com sucesso!');
    
   
    document.getElementById('cadastroForm').reset();
    
    
    exibirSolos();
}
    
    