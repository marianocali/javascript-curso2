//Patron clasico
function Humano(nombre){
	//Cada instancia iba a tener una copia de los atributos
	this.nombre = nombre;
	//Mandabamos los metodos al prototype de la funcion
	Humano.prototype.saludo = function(){
		console.log('Hola')
	}
}


var horacio = new Humano('Horacio');
var juan = new Humano('Juan');

















