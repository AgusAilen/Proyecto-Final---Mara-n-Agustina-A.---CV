var nombre = document.getElementById ('nombre');
var mail = document.getElementById ('mail');
var mensaje = document.getElementById ('msj');
var error = document.getElementById('error');
error.style.color = "red";

var form = document.getElementById('formulario');
form.addEventListener ('submit', function(evt){
    evt.preventDefault ();
    var MensajeError = ["Valor invalido. Para continuar debes de ingresar"];

    if (nombre.value === null && mail.value == null && mensaje.value === null 
        || nombre.value === '' && mail.value === '' && mensaje.value === ''){
        MensajeError.push('tu nombre, tu mail y un mensaje.');
    } else{
        if (nombre.value === null && mail.value == null 
        || nombre.value === '' && mail.value === '' ){
            MensajeError.push('tu nombre y tu mail.');
        } else{
            if  (nombre.value === null && mensaje.value == null 
        || nombre.value === '' && mensaje.value === '' ){
            MensajeError.push('tu nombre y un mensaje.');
        }else {
            if (mail.value === null && mensaje.value == null 
        || mail.value === '' && mensaje.value === '' ){
            MensajeError.push('tu mail y un mensaje.');
        }else {
            if (nombre.value === null ||nombre.value === ''){
                 MensajeError.push('tu nombre.');
            } else{ 
                if (mail.value == null || mail.value === ''){
                    MensajeError.push('tu mail.');
                } else { MensajeError.push('un mensaje.');
                }
            }
        }
    }}}
    error.innerHTML = MensajeError.join (' ');
});