// Preencher variáveis pelos dados do Formulário
document.getElementById('btnInscrever').addEventListener('click', function() {
    var email = document.getElementById('inputEmail4').value;
    var senhaoculta = "********";
    var senha = document.getElementById('inputPassword4').value;

    alert(
        "DADOS DO FORMULÁRIO"
        + "\n"
        + "\nO seu e-mail é: " + email 
        + "\nA sua senha é: " + senhaoculta
    );
})