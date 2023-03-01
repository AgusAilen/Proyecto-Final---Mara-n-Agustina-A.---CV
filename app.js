var nombre = document.getElementById ('nombre');
var mail = document.getElementById ('mail');
var mensaje = document.getElementById ('msj');
var error = document.getElementById('error');
error.style.color = "red";

var form = document.getElementById('formulario');
form.addEventListener ('submit', function(evt){
    evt.preventDefault ();
    var MensajesError = [];

    if (nombre.value === null || nombre.value === ''){
        MensajesError.push('Debes ingresar tu nombre');
    } 
    if (mail.value === null || mail.value === ''){
        MensajesError.push('Debes ingresar tu correo electrónico');
    }
    if (mensaje.value === null || mensaje.value === ''){
        MensajesError.push('Debes ingresar un mensaje');
    }
    error.innerHTML = MensajesError.join ('. ');
});
