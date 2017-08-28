var btn = document.querySelector('button');
// btn.onclick = console.log('hola');	

btn.addEventListener('click', function(){
	console.log('hola boton',);
}, true);

/*var cuerpo = document.querySelector('body');
cuerpo.addEventListener('click', function(){
	console.log('hola body');
}, true);
*/

var cuerpo = document.querySelector('body');
cuerpo.addEventListener('click', function(){
	console.log(event);
}, true);