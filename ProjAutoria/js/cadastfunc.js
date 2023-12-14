function salvarCadastro() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const funcao = document.getElementById('funcao').value;
    const codigo = document.getElementById('codigo').value;

    if (!nome || !cpf || !funcao) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    const inputImagem = document.getElementById('inputImagem');
    const file = inputImagem.files[0];

    if (!file) {
        alert('Por favor, selecione uma imagem.');
        return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const imagemBase64 = reader.result.split(',')[1];

        const cadastrados = JSON.parse(localStorage.getItem('funcionarios')) || [];
        
        const funcionarioExistente = cadastrados.find(funcionario => funcionario.codigo === codigo);

        if (funcionarioExistente) {
            alert('Já existe um funcionário cadastrado com este código.');
            return;
        }
        const funcionarioCpfExistente = cadastrados.find(funcionario => funcionario.cpf === cpf);
        
        if (funcionarioCpfExistente) {
            alert('Já existe um funcionário cadastrado com este CPF.');
            return;
        }
        const funcionario = {
            nome: nome,
            cpf: cpf,
            funcao: funcao,
            imagem: imagemBase64,
            codigo: codigo
        };

    
        cadastrados.push(funcionario);
        localStorage.setItem('funcionarios', JSON.stringify(cadastrados));

        
        alert('Funcionário cadastrado com sucesso!');

        
        document.getElementById('cadastroForm').reset();

        
        exibirFuncionarios();
    };

    reader.onerror = error => console.error(error);
}
function formatarCPF(campo) {
    
    var cpfSemFormato = campo.value.replace(/[^\d]/g, '');

   
    var cpfFormatado = cpfSemFormato.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    
    campo.value = cpfFormatado;
}