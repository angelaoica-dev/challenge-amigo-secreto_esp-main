// Array global para almacenar los amigos.
let amigos = [];

function agregarAmigo(){
    //Obtener el valor del input.
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    //Validar que el campo no esté vacío.
    if (nombre === "") {
        alert("Por favor, inserte un nombre.")
       return; 
    }
        
    //Agregar el nombre al array de amigos
    amigos.push(nombre);
    
    //Mostrar la lista actualizada
    mostrarAmigos();

    input.value = "";
    }
