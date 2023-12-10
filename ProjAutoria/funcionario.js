document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('cadastroForm').addEventListener('submit', function (event) {
        event.preventDefault(); 
       
        var nome = document.getElementById('nome').value;
        var cpf = document.getElementById('cpf').value;
        var contratacao = document.getElementById('cont').value;
        var ultimaAtividade = document.getElementById('ult').value;
        var codigo = document.getElementById('codigo').value;
        var funcao = document.getElementById('funcao').value;
        var observacoes = document.getElementById('obs').value;

        
        if (!nome || !cpf || !contratacao || !ultimaAtividade || !codigo || !funcao || !observacoes) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        
        var funcionariosCadastrados = localStorage.getItem('funcionarios');
        if (funcionariosCadastrados) {
            var funcionariosArray = JSON.parse(funcionariosCadastrados);
            var funcionarioExistente = funcionariosArray.find(function (funcionario) {
                return funcionario.codigo === codigo;
            });

            if (funcionarioExistente) {
                alert('Funcionário com o mesmo código já cadastrado.');
                return;
            }
        }

        var fotoInput = document.getElementById('inputImagem');
        var fotoPreview = document.getElementById('imagemPreview');

        if (fotoInput.files.length > 0) {
            
            var imagemTemporaria = URL.createObjectURL(fotoInput.files[0]);
            
           
            fotoPreview.src = imagemTemporaria;
        }
       
        var dadosFuncionario = {
            nome: nome,
            cpf: cpf,
            contratacao: contratacao,
            ultimaAtividade: ultimaAtividade,
            codigo: codigo,
            funcao: funcao,
            observacoes: observacoes
        };

      
        var funcionarios = localStorage.getItem('funcionarios') || '[]';
        var funcionariosArray = JSON.parse(funcionarios);
        funcionariosArray.push(dadosFuncionario);
        localStorage.setItem('funcionarios', JSON.stringify(funcionariosArray));

        
        document.getElementById('cadastroForm').reset();

        
        alert('Funcionário cadastrado com sucesso!');
    });
});
function formatarCPF(campo) {
   
    var cpfSemFormato = campo.value.replace(/[^\d]/g, '');

    
    var cpfFormatado = cpfSemFormato.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    
    campo.value = cpfFormatado;
}
document.addEventListener('DOMContentLoaded', function () {
    
    var funcionariosCadastrados = localStorage.getItem('funcionarios');

    if (funcionariosCadastrados) {
        var funcionariosArray = JSON.parse(funcionariosCadastrados);
        
        console.log('Último funcionário:', ultimoFuncionario);
        
        var ultimoFuncionario = funcionariosArray[funcionariosArray.length - 1];
       
        var nomeParagrafo = document.createElement('p');
        nomeParagrafo.textContent =  ultimoFuncionario.nome;

        var cpfParagrafo = document.createElement('p');
        cpfParagrafo.textContent =  ultimoFuncionario.cpf;

        var funcaoParagrafo = document.createElement('p');
        funcaoParagrafo.textContent = ultimoFuncionario.funcao;

        var fotoElement = document.createElement('img');
        fotoElement.src = ultimoFuncionario.foto; 
       
        var dadosFuncionarioDiv = document.getElementById('dadosFuncionario');
        dadosFuncionarioDiv.appendChild(nomeParagrafo);
        dadosFuncionarioDiv.appendChild(cpfParagrafo);
        dadosFuncionarioDiv.appendChild(funcaoParagrafo);
        dadosFuncionarioDiv.appendChild(fotoElement);
    } else {
       
        document.getElementById('dadosFuncionario').textContent = 'Nenhum funcionário cadastrado.';
    }
});