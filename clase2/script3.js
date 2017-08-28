/*
1 Crear un formulario en html con2 input
usuario y pass y un btn submit

2) crear 2 arrays para los usuarios y los passwords

3) asignarle un evento de tipo submit al fomulario

4 validar que ambos campos sean alfanumericos

5 Si la validaci{on da OK cambiar el contenido del body por
	Bienvenido
*/

//var btn = document.querySelector('button');

// btn.addEventListener('click', crearBoton, true);

var form = document.querySelector('form');
form.addEventListener('submit',validar);

function validar()
{
	event.preventDefault();
	var esValido = false;
	var usuario = document.querySelector("#user");
	var pass = document.querySelector("#pass");

//obtenerlo de manera mas rapida
	var usuario = event.target[0].value;
	var usuario = event.target[1].value;

	for(var i = 0; i <usuario.length; i++ )
	{
		var letra = usuario[i].chartCodeAt();
		if(letra) < 48 && letra > 

	}
	if(!esValido){
		event.preventDefault();
	}
	else{
		alert("Bienvenido");
	}

}