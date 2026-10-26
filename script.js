var texto = document.getElementById("texto");
var contador = document.getElementById("contador");
var error = document.getElementById("error");

texto.oninput = function() {
    // Contamos las letras
    var cantidad = texto.value.length;
    
    // Actualizamos el texto del contador
    contador.innerHTML = cantidad + " / 250";

   if (cantidad >= 250) {
        texto.classList.add("error");
    } else {
        texto.classList.remove("error");
    }
};