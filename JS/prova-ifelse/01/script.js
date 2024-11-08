let nome = "admin";
let senha = 1234;
let usuario;
let senhaInformada;

usuario = prompt('Digite o nome de usuario:');
senhaInformada = prompt('Digite a senha:');

if (usuario == nome && senhaInformada == senha) {
    console.log('Login efetuado com sucesso!');
} else if (usuario == nome && senhaInformada != senha) {
    console.log('Senha incorreta!');
} else if (usuario != nome && senhaInformada == senha) {
    console.log('Nome de usuario não encontrado!');
}
