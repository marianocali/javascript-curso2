// agrego un evento "load" para que se invoque una función cuando se termina de cargar
//la página. sumamente útil
window.addEventListener("load", funcion_inicial,false);


// Agrega las validaciones de cada elemento luego que se carga la página
function funcion_inicial(){
	agregarEventoOnBlurNombre();
	agregarEventoOnBlurEmail();
	agregarEventoOnBlurMensaje();
	agregarEventoSubmitForm();

}

// se toma el form y se cambia el sumbit para que se valide
//antes de enviarse
function agregarEventoSubmitForm(){
	var form = document.querySelector('form');
	form.addEventListener('submit',validarForm);
}

function agregarEventoOnBlurNombre(){
	//se obtiene el tag html nombre
	var nombre = document.querySelector('input');

	//se le asigna al evento blur la funcion validarNombre
	nombre.addEventListener("blur", validarNombre);
}

function agregarEventoOnBlurEmail(){
	// obtener el tag email
	var inputs = document.querySelectorAll('input');
	var email = inputs[1];

	//asignar evento blur la función validarEmail
	email.addEventListener("blur", validarEmail);
}

function agregarEventoOnBlurMensaje(){
	//se obtiene el tag html nombre
	var mensaje = document.querySelector('textarea');

	//se le asigna al evento blur la funcion validarNombre
	mensaje.addEventListener("blur", validarMensaje);
}


/******************************************************************************/
/*										VALIDACIONES 		*/			
/******************************************************************************/

function validarNombre(){
	var nombre = document.querySelector('input');
	console.log(nombre.value);
	if (esNombreValido(nombre)){
		//nombre.addClass("error");
		nombre.classList.add('ok');
		nombre.classList.remove('error');
	}
	else{
		nombre.classList.add('error');
		nombre.classList.remove('ok');
	}
}

function esNombreValido(nombre){
	return (nombre.value.length > 4 && isNaN(nombre.value));
}

function validarEmail(){
	var inputs = document.querySelectorAll('input');
	var email= inputs[1];

	if(esEmailValido(email)){
		email.classList.remove('error');
		email.classList.add('ok');
	}
	else
	{
		email.classList.remove('ok');
		email.classList.add('error');
	}
}

function validarMensaje(){
	//se obtiene el tag html nombre
	let mensaje = getMensaje();
	
	if(isMensajeValido(mensaje)){
		mensaje.classList.remove('error');
		mensaje.classList.add('ok');		
	}	
	else{
		mensaje.classList.remove('ok');
		mensaje.classList.add('error');
	}
}

function getMensaje(){
	return document.querySelector('textarea');
}

//Al salir del área mensaje verificar si el mismo no está vacío y si es menor a 200 caracteres...
function isMensajeValido(mensaje){
	let longitud = mensaje.value.length;
	return (longitud > 0 && longitud < 200);
}


//Valida un email usando expresiones regulares
function esEmailValido(email) {
    let re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    console.dir(re);
    let esValido = re.test(email.value);
    return esValido;
}

/******************
VALIDACION DEL FORMULARIO
*****************/
function validarForm(){
	event.preventDefault(); //evita que el form se submitee
	let claseMsg = document.querySelector('textarea').classList[0];
	var f = document.querySelector("form");

	if(esFormularioValido(claseMsg)){
		window.setTimeout(function() { f.submit(); },2000);
	}else{
		return false;
	}
}

function esFormularioValido(claseMsg){
	if (isMensajeValido(getMensaje())){
		return true;
	}
	else
		return false;
	//return claseMsg == "ok";
}






