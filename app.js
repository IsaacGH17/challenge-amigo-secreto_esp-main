// Isaac García
let amigos = [];
let numeroGanador = 0;
let sorteado = '';
function agregarAmigo(){
    let nombre= document.getElementById('amigo').value;
    
    if(nombre === ''){
        alert('Escribe un nombre válido porfavor');
    }
    else{
        amigos.push(nombre);
        document.querySelector('#amigo').value = '';
        return actualizarLista();
    }
}
function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    let i = 0;
    for(i = 0; i < amigos.length; i++){
       let elemento  = document.createElement("li");
       elemento.appendChild(document.createTextNode(amigos[i]));
       lista.appendChild(elemento);
    }
}
function sortearAmigo(){
    if(amigos.length > 0){
        numeroGanador = Math.floor(Math.random() * amigos.length);
        sorteado = amigos[numeroGanador];
        let amigoSecreto = document.getElementById('resultado');
        amigoSecreto.innerHTML = "El amigo secreto sorteado es: " + sorteado;
    }
    else
        alert('No hay amigos para sortear');
}