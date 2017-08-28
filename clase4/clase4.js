

	var xhr = new XMLHttpRequest();
	xhr.open('get','imagen.jpeg');
	
	xhr.addEventListener('load',function(){
		console.log('Descarga finalizada');		
	});

	xhr.addEventListener('progress', function(e)
	{		
		if(e.lengthComputable){
		var porcentaje = (e.loaded / e.total) *100;
		console.log(porcentaje);
		}
	});		
	
//MUY IMPORTANTE NO OLVIDAR EL SEND	
xhr.send();
console.log("hola" );


/*
Las APIS que soportan conversion de datos binarios son:
File
FileList
ArrayBuffer, BLob
Como en la respuesta no tengo mucha info, uso el metodo
api.url que me permite salar la url a files o blobs.
*/

xhr.responseType = 'blob';
xhr.addEventListener('load',
	function(e){		
		if(xhr.status == 200){
			console.log('Descarga finalizada');	
		}

var blob = xhr.response;
var url = URL.createObjectURL(blob);
var img = document.createElement('img');
//le asignamos su propiedad source
img.src = url;
img.style.width = '100%';
document.body.appendChild(img);
console.log(url);
});


