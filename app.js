var nombre = document.getElementById ('nombre');
var mail = document.getElementById ('mail');
var mensaje = document.getElementById ('msj');
var error = document.getElementById('error');
error.style.color = "red";

var form = document.getElementById('formulario');
form.addEventListener ('submit', function(evt){
    evt.preventDefault ();
    var MensajeError = ["Valor invalido"];

    if (nombre.value === null || nombre.value === ''){
        MensajeError.push('debes ingresar tu nombre');
    } 
    if (mail.value === null || mail.value === ''){
        MensajeError.push('debes ingresar tu correo electrónico');
    }
    if (mensaje.value === null || mensaje.value === ''){
        MensajeError.push('debes ingresar un mensaje');
    }
    error.innerHTML = MensajeError.join (', ');
});
