

//Agarro todos los links
var links = document.querySelectorAll('.link');
//Como el querySelectorAll me da un array de nodos, lo recorro
for (var i = 0; i < links.length; i++) {
	//A cada elemento en el array le asigno un evento
	links[i].addEventListener('click', function(e){
		//Como trabajamos con clicks en un <a> hay que prevenir su comportamiento por defecto
		e.preventDefault();
		//Construimos la url de forma dinamica asi siempre vamos a pedir un archivo distinto
		var url = e.target.href;
		ajax('get',url, render);
	})
}

function ajax(metodo, url, callback){
	//Iniciamos la secuencia de ajax: Crear el objeto, configurarlo, darle un evento y enviarlo
	var xhr = new XMLHttpRequest();
	xhr.open(metodo , url);
	xhr.addEventListener('load', function(e){
		if (xhr.status == 200) {
			callback(xhr.response);
		}
	})
	xhr.send();
}

function ajaxImagenes(metodo, url, callback){
	//Iniciamos la secuencia de ajax: Crear el objeto, configurarlo, darle un evento y enviarlo
	var xhr = new XMLHttpRequest();
	xhr.open(metodo , url);
	xhr.addEventListener('load', function(e){
		if (xhr.status == 200) {
			console.log('Finalizo la carga');
			var progress = document.querySelector('progress');
			var loader = document.querySelector('#youtube-loader');
			loader.style.display = 'none';
			progress.style.display = 'none';
		}
	});
	xhr.addEventListener('progress', function(e){
		/*
			Adentro del progreso de descarga de ajax, el objeto evento va a contenter la siguiente informacion:

			- .lengthComputable : Es un boolean que nos dice si la cabecera 'Content-length' esta disponible y encima es numerica
			- .loaded : Es un numero que nos representa la cantidad de informacion que se descargo hasta el momento
			- .total : Es un nuemero que nos representa la cantidad total del tamaño del archivo solicitado

		*/
		if (e.lengthComputable) {
			var cuenta = ( e.loaded / e.total ) * 100;
			var porcentaje = cuenta + '%';
			console.log(porcentaje);
			var progress = document.querySelector('progress');
			var loader = document.querySelector('#youtube-loader');
			loader.style.width = porcentaje;
			progress.value = cuenta;
		}
	});
	//https://static.pexels.com/photos/55787/pexels-photo-55787.jpeg
	xhr.send();
}

function verImagen(){
	console.log('Imagen');
}


function render(data){
	document.querySelector('main').innerHTML = data;
}