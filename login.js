const mensagem = document.querySelector (".mensagem");
const formulario = document.getElementById ("iformulario");
const nome = document.getElementById ("inome");
const senha = document.getElementById ("isenha");

formulario.onsubmit = (evento) =>{
    let dados = JSON.parse(localStorage.getItem("dados"));
   
    dados.forEach((elemento) => {
        if (elemento.nome === nome.value && elemento.senha === senha.value){
            evento.preventDefault();
            let dados = JSON.parse(sessionStorage.getItem("logado")) || [];
            dados.push(
                {
                    nome :nome.value
                }
            )
            sessionStorage.setItem("logado", JSON.stringify(dados));
            window.location.assign("telaprincipal.html");  
            alert("Perfil logado com sucesso");
            return true;
        }
        else{
            evento.preventDefault();
            senha.value = "";
            alert("E-mail ou Senha estão inválidos");
        }

    });
}
