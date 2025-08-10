// Array global para almacenar los amigos.
let amigos = [];

function agregarAmigo() {
    //Obtener el valor del input.
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    //Validar que el campo no esté vacío.
    if (nombre === "") {
        alert("Por favor, inserte un nombre.")
       return; 
    }
        
    //Agregar el nombre al array de amigos.
    amigos.push(nombre);
    
    //Mostrar la lista actualizada.
    mostrarAmigos();

    input.value = "";
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //Limpiar lista antes de actualizarla.
    
    //Recorrer el array y crear un <li> por cada amigo.
    amigos.forEach((amigo) => {let li = document.createElement("li"); li.textContent = amigo; lista.appendChild(li);});
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if(amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;    
}