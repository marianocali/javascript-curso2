/*

jsonp nos permite acceder cuando no podemos acceder de otra forma

https://globe.com/a-api
1 agarrar el submit
2 asignar un evento de tipo submit al formulario
3 adentro del evento construir una url dinamica agarrando 
idioma origne
idioma destin
palabra
 reemplazar la url con los valores
o sea crear la url

3.1 Crear un elemento de tipo script 
3.2 

4 crear un callback que maneje el objeto respuesta

5 Mostrar el objeto en consola

*/


var form = document.querySelector('form');
form.addEventListener('submit',validar);

function validar(event)
{
	event.preventDefault();
	var esValido = false;
	var url = armarUrl();

	//console.log(url);
	var script = document.createElement('script');
	script.src = url;
	document.body.appendChild(script);

	
}

//crear callback
function manejoDeRespuesta(respuesta){

	// respuesta.tuc es un arreglo que contiene datos que debemos analizar para ver si 
	//lo que llega es una traducción valida
	// phrase dice si es traduccion o no

	//obtengo la longitud del array
	var longitud = respuesta.tuc.lenght;	
	var ul = document.createElement('ul');
	var div = document.querySelector('#respuesta');

	for(var i=0; i < longitud; i++){
		var traducción = respuesta.tuc[i];

		if (traducción.phrase){ 
			//tiene traducción
			algunaFuncion(respuesta);
			var li =document.createElement('li');
			li.innerText = traducción.phrase.text;	
			ul.appendChild(li);		
		}
	}
		div.appendChild(ul);
}

function armarUrl(){
	var url = "https://glosbe.com/gapi/translate?from=";
	var optionOrigen = document.querySelector("#origen");	
	var origen = optionOrigen.options[optionOrigen.selectedIndex].value;

	var optionDestino = document.querySelector("#destino");	
	var destino = optionDestino.options[optionDestino.selectedIndex].value;


	var palabra = document.querySelector("#palabra").value;
	console.log(palabra);

	url = url + origen + "&dest=" + destino + "&format=json&callback=manejoDeRespuesta&phrase=" + palabra + "&pretty=true"
	console.log("url: " +  url);

	return url;
	}
 // <script scr="https://glosbe.com/gapi/translate?
 //from=en&dest=es&format=json&phrase=hello&pretty=true">

function algunaFuncion(respuesta){
	console.log(respuesta);
}