//efeito do botão voltar ao Topo

function Topo(){
     window.scrollTo(
        {
          top:0,
          left:0,
          behavior:'smooth'  
        }
     )

}
//Validação de Login
function Login(){
var logado = 0;
var usuario = document.getElementsByName('usuario')[0].value;
var senha = document.getElementById('senha').value;
senha = senha.tolowerCase();

if(usuario == "admin" && senha == "123456"){
window.location = "index.html";
logado = 1;
}
if(logado == 0){
alert("acesso negado.dados incorretos");

}

}

//Ativar alert no botão cadastrar

function cadastro(){
     alert("cadastrado com sucesso!")
    window.location.href = "index.html";
}