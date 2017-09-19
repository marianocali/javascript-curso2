function Humano(nombre, edad){
	//nombre es la variable argumento pre declarada
	//_nombre es una variable privada de clase
	//
	var _nombre = nombre;
	this.nombre = nombre;
	this.edad = edad;
	Humano.prototype.saludo = function(){
		console.log('Hola')
	}
	Humano.prototype.getNombre = function(){
		console.log(_nombre)
	}
	Humano.prototype.setNombre = function(valor){
		_nombre = valor
	}
}

var horacio = new Humano('Horacio', 28);
var pepe = new Humano('Pepe', 30);

function Empleado(sueldo, nombre, edad){
	//this = {} = new
	this.sueldo = sueldo;

	//Composicion de clase
	//Ejecutar una funcion padre con el contexto de la sub clase para heredar todos sus atributos
	Humano.apply(this, [nombre, edad])
	//Humano.call(this, nombre, edad)
}

// Probamos con una nueva instancia de un Humano pero no nos da porque todas las instancias de un Empleado ahora van a ser iguales
//Empleado.prototype = new Humano('Ana', 29);

//Probamos con el prototype de Humano(clase padre) y no nos da porque nos mezcla todo, nos falta un escalon de herencia, perdemos nuetra propia clase
//Empleado.prototype = Humano.prototype;


//Probamos con un Object.create y si conseguimos tener un objeto cuyo prototipo sea el prototype de un Humano
Empleado.prototype = Object.create(Humano && Humano.prototype)
Empleado.prototype.constructor = Empleado;

Empleado.prototype.trabajar = function(){
	console.log('Estoy trabajando')
}
//Polimorfismo o sobrecarga de metodos
Empleado.prototype.saludo = function(){
	//Humano.prototype.saludo.apply()+this.nombre
	console.log('Hola, soy '+this.nombre)
}


 var juan = new Empleado(15000, 'Juan', 28);
 var pedro = new Empleado(15000);
/*

1) Necesitamos que el __proto__(prototipo) del objeto Empleado(sub-clase) apunte a algo de un Humano(clase padre)

2) Una vez que tenemos todas las cualidades de un Humano(clase padre) tenemos que ser capaces de transmitirlas a mis instancias

*/
