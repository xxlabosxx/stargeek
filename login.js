const nome = document.getElementById("inome");
const senha = document.getElementById("senha");
const csenha = document.getElementById("csenha");
const formulario = document.getElementById("formulario")
const mensagem = document.querySelector(".mensagem")

formulario.onsubmit = (evento) => {
    if (nome.value == ""){
    evento.preventDefault();
    mensagem.innerHTML = " Nome incorreto";
    nome.focus();
    return null;}

    if (senha.value == ""){
    evento.preventDefault();
    mensagem.innerHTML = " Senha Incorreta";
    senha.focus();
    return null;}

    if (csenha.value != senha.value){
        evento.preventDefault();
        mensagem.innerHTML = " Senhas não se coencidem";
        csenha.focus();
        return null;}

    dados.forEach((elemento) => {
        if (elemento.csenha == senha.value && elemento.senha == senha.value) {
            evento.preventDefault();
            mensagem.innerHTML="Logado";
            return true;
        } else {
            mensagem.innerHTML ="Senha ou E-mail Incorreto"
        }
    });
}

