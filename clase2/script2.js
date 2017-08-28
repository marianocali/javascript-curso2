var btn = document.querySelector('button');

btn.addEventListener('click', crearBoton, true);



function crearBoton(){
	btn2 = document.createElement("input");
	btn2.setAttribute("type","button");
	btn2.setAttribute("value","Enviar2");
	btn2.setAttribute("id","btn2");

	document.body.appendChild(btn2);
	event.stopPropagation();
}

// con esto falla
/*var btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function(){
	console.log('hola boton',);
}, true);
*/

document.addEventListener('click', function()
{
	//if(event.target.id == "btn2"){
		console.dir(event.target);
		//event.stopPropagation();	
	//}
}, true);

// hacer que al clickear un link no vaya al destino sino que se 
// se quede en la misma página y loguee por consola
document.querySelector('a').addEventListener('click',
	function(){
		event.preventDefault();
		console.log('click');
		
	});