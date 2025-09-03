'use strict';

const campoSenha = document.querySelector("#senha");
const mostrar = document.querySelector("#visivel");

/*Monitoramos o evento pointerup/pointerdown pois ele funcionar tanto para o acionamento com mouse no desktop quanto com o dedo no moblie */ 
mostrar.addEventListener("pointerdown",function(){
    campoSenha.type='text';
    
});
mostrar.addEventListener("pointerup",function(){
    campoSenha.type="password";
});
mostrar.addEventListener("pointerout",function(){
    campoSenha.type="password";
});