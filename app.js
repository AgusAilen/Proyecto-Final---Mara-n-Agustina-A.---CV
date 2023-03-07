
/** Función botones desplegables imagenes sección "Estudios" */

var colegio = document.getElementById ('colegio');
var universidad = document.getElementById ('uni');
var payasos = document.getElementById ('payasos');

var fcolegio = document.querySelector ('.fcolegio');
var funi = document.querySelector ('.funi');
var fpayasos = document.querySelector('.fpayasos');
contadora=0;
contadorb=0;
contadorc=0;
contadora = true;
contadorb = true;
contadorc = true;
contador = false;

function desplegar( objeto, id ) {
    if( id.id == "colegio" ) {
        contador = getContador( contadora );
        contadora = contador;
    }
    else if( id.id == "uni" ) {
        contador = getContador( contadorb );
        contadorb = contador;
    }
    else if( id.id == "payasos" ) {
        contador = getContador( contadorc );
        contadorc = contador;
    }
    if( ! contador ) {
        objeto.classList.add( 'foto' );
    } 
    else{     
        objeto.classList.remove( 'foto' );
    }
}

function getContador( si_no ) {
    return si_no == false;
}

/** Formulario de contacto final de la página */

var nombre = document.getElementById ('nombre');
var mail = document.getElementById ('mail');
var mensaje = document.getElementById ('msj');
var error = document.getElementById('error');
error.style.color = "red";

var form = document.getElementById('formulario');

form.addEventListener ('submit', function(evt){
    var MensajeError = [];

    if (nombre.value === null || nombre.value === ''){
        evt.preventDefault();
        MensajeError.push('Debes ingresar tu nombre');
    } 
    if (mail.value === null || mail.value === ''){
        evt.preventDefault();
        MensajeError.push('Debes ingresar tu correo electrónico');
    }
    if (mensaje.value === null || mensaje.value === ''){
        evt.preventDefault();
        MensajeError.push('Debes ingresar un mensaje');
    }
    error.innerHTML = MensajeError.join ('. ');
});
