function salvarCadastro() {
    var usuario = document.getElementById('usuario').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;
    var date = document.getElementById('date').value;
    var password = document.getElementById('password').value;

    if((!usuario || !email || !cpf || !date || !password) && (!email)) {
        alert('Por favor, preencha todos os campos antes de cadastrar.');
        return;
    }
    var storedUserData = localStorage.getItem('userData');
    if(storedUserData){
        var existir = JSON.parse(storedUserData);
        if (
            existir.usuario === usuario && 
            existir.email === email && 
            existir.cpf === cpf
        ){
            alert('Este cadastro já existe');
            return; 
        }

    }

    var userData = {
        usuario: usuario,
        email: email,
        cpf: cpf,
        date: date,
        password: password
    };

    var userDataJSON = JSON.stringify(userData);
    
    localStorage.setItem('userData', userDataJSON);

    alert('Cadastro salvo com sucesso!');

    window.location.reload();
}

function verificarLogin() {
    var usuarioLogin = document.getElementById('usuario').value;
    var senhaLogin = document.getElementById('senha').value;
    var userDataJSON = localStorage.getItem('userData');

    if (userDataJSON) {
        var userData = JSON.parse(userDataJSON);

        if (usuarioLogin === userData.usuario && senhaLogin === userData.password) {
            window.location.href = "entrou.html";
        } else {
            alert('Usuário ou senha incorretos');
        }
    } else {
        alert('Nenhum usuário cadastrado');
    }
}
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    verificarLogin(); 
});

function formatarCPF(campo) {
   
    var cpfSemFormato = campo.value.replace(/[^\d]/g, '');

    
    var cpfFormatado = cpfSemFormato.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

   
    campo.value = cpfFormatado;
}

