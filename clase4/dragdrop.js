
/*
API drag and drop

LA API es toda una sola, maneja los dos tipos de eventos:
drag 
drop

Hay que cancelar el comportamiento por defecto de cada
evento porque sino se sale de la pantalla


Como el navegador tiene comportamiento por default en los eventos de arrastre
de archivos, tenemos que cancelar todos los comportamientos
de todos los evnetos de tupo arrastre para poder llegar
al evento de tupo drop.

ver aca
https://developer.mozilla.org/es/docs/DragDrop/Drag_and_Drop

*/

var drop = document.querySelector("#drop");
drop.addEventListener('dragstart', function(e){
	e.preventDefault();
	e.stopPropagation();
});


drop.addEventListener('dragenter', function(e){
	e.preventDefault();
	e.stopPropagation();
});

drop.addEventListener('dragover', function(e){
	e.preventDefault();
	e.stopPropagation();
});

drop.addEventListener('dragleave', function(e){
	e.preventDefault();
	e.stopPropagation();
});

drop.addEventListener('dragend', function(e){
	e.preventDefault();
	e.stopPropagation();
});

// Este es el evento que nos interesa
drop.addEventListener('drop', function(e){
	e.preventDefault();
	e.stopPropagation();
	// Los archivos siempre aparecen vacíos
	// por eso hay que obtenerla con 
	// dataTransfer que es un método del event

	procesarImagen(e.dataTransfer.files);
});

/* El drop por default te agarra los archivos en forma de 
FileList */

function procesarImagen(data){
	console.log(data);
}