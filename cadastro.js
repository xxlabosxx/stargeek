const formulario = document.getElementById ("iformulario");
const nome = document.getElementById ("inome");
const email = document.getElementById ("imail");
const senha = document.getElementById ("isenha");
const csenha = document.getElementById("csenha")


formulario.onsubmit = (evento) =>{
    if (nome.value == ""){
        evento.preventDefault();
        nome.focus();
        return null;

    }
    if (email.value == ""){
        evento.preventDefault();
        email.focus();
        return null;
    }

    if (senha.value == ""){
        evento.preventDefault();
        senha.focus();
        return null;
    }
    let dados = JSON.parse(localStorage.getItem("dados")) || [];
    dados.push({
        nome : nome.value,
        email : email.value,
        senha : senha.value
    })
    localStorage.setItem("dados", JSON.stringify(dados));
    evento.preventDefault();
    alert("Cadastro realizado com sucesso");
    window.location.assign("login.html");
}