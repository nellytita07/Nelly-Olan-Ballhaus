function saludar()
{
 let nombre = prompt("ingresa tu nombre");

 if (nombre) {
   
    alert("Hola " + nombre +  ", suerte en tu examen!")
   
    }
}

function calcularCuadrado()
 {

    let entrada = prompt("Por favor, ingresa un número:");
    let numero = parseFloat(entrada);

    if (isNaN(numero)) {
        alert("Lo que ingresaste no es un número válido. Inténtalo de nuevo.");
    } else {
        let cuadrado = numero * numero;
        alert("El cuadrado del número es: " + cuadrado);
    }
}