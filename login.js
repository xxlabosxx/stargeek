const nome = document.getElementById("inome");
const senha = document.getElementById("senha");
const csenha = document.getElementById("csenha");


formulario.onsubmit = (evento) =>{
if (nome.value == ""){
    evento.preventDefault();
    mensagem.innerHTML= "<p> Digite seu nome </p>";
    nome.focus();
    return null;
}

}