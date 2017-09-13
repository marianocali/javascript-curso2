// agrego un evento "load" para que se invoque una función cuando se termina de cargar
//la página. sumamente útil
window.addEventListener("load", funcion_inicial,false);



// Esta función deberá ir invocando a las demás validaciones
function funcion_inicial(){
	console.log('funcion_inicial');
	agregarEventoOnBlurNombre();
	agregarEventoOnBlurEmail();
}

function agregarEventoOnBlurNombre(){
	//se obtiene el tag html nombre
	var nombre = document.querySelector('input');

	//se le asigna al evento blur la funcion validarNombre
	nombre.addEventListener("blur", validarNombre);
}

function validarNombre(){
	var nombre = document.querySelector('input');
	console.log(nombre.value);
	if(nombre.value.length < 4){
		//nombre.addClass("error");
		nombre.className += " error";
	}
	else{
		nombre.className += " ok";	
	}

}

function agregarEventoOnBlurEmail(){
	// obtener el tag email
	var inputs = document.querySelectorAll('input');
	var email = inputs[1];

	//asignar evento blur la función validarEmail
	email.addEventListener("blur", validarEmail);
}

function validarEmail(){
	var inputs = document.querySelectorAll('input');
	var email= inputs[1];

	if(isEmailValido(email)){
		email.className += " ok";
	}
	else
	{
		email.className += " error";
	}
}

function ValidateEmail(mail)   
{  
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))  
	{  
		return (true)  
	}  
	alert("You have entered an invalid email address!")  
	return (false)  
} 

//valida un email usando expresion regular que analiza que tenga la @ 
function isEmailValido(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
} 













