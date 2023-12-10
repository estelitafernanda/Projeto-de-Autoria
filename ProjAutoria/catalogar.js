// Movemos o conteúdo do script dentro de uma função para garantir que seja chamado após o carregamento do documento
function setupCatalogarScript() {
    document.getElementById('cadastroForm').addEventListener('submit', function (event) {
        event.preventDefault();

        var id = document.getElementById('id').value;
        var func = document.getElementById('func').value;
        var tipo = document.getElementById('tipo').value;
        var form = document.getElementById('form').value;
        var comp = document.getElementById('comp').value;
        var impor = document.getElementById('import').value;
        var infor = document.getElementById('infor').value;

        if (id && func && tipo && form && comp && impor && infor) {
            var dados = {
                id: id,
                func: func,
                tipo: tipo,
                form: form,
                comp: comp,
                impor: impor,
                infor: infor
            };

            var dadosSalvos = JSON.parse(localStorage.getItem('dados') || '[]');
            dadosSalvos.push(dados);

            localStorage.setItem('dados', JSON.stringify(dadosSalvos));

            document.getElementById('cadastroForm').reset();

            carregarDadosSalvos();
        } else {
            alert('Preencha todos os campos antes de enviar.');
        }
    });
    function carregarDadosSalvos() {
        var container3 = document.getElementById('dynamicContainer');
        container3.innerHTML = "";
    
        var dadosSalvos = JSON.parse(localStorage.getItem('dados') || '[]');
    
        dadosSalvos.forEach(function (dados, index) {
            var div = document.createElement('div');
            div.innerHTML = '<img src="imagens/solo2.png" class="solo"></img><p class="id">' + dados.id + '</p>';
            container3.appendChild(div);
        });
    }
    // Outras partes do seu código...
}

// Adicionamos o evento 'DOMContentLoaded' para chamar a função após o carregamento do documento
document.addEventListener('DOMContentLoaded', setupCatalogarScript);
