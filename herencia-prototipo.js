var humano = {
	saludo : function(){
		console.log('Hola');
	},
	constructor : function Humano(){},
	create : function(data){
		//data = {trabajar, constructor}
		//this = humano
		var instancia = Object.create(this);
		// instancia = {} -> __proto__ = {}
		//{}.attr = ''
		//{}['attr'] = ''
		for(x in data){
			instancia[x] = data[x]
		}
		return instancia;
	}
}

var empleado = humano.create({
	trabajar : function(){
		console.log('Trabajando...')
	},
	constructor : function Empleado(){}
});

/*
{x:undefined}

*/

var programador = empleado.create({
	programar : function(){
		console.log('Mas cafeeee')
	},
	constructor : function Programador(){}
});

var horacio = programador.create({
	nombre : 'Horacio',
	edad : 28,
	sueldo : 10000
});

/*
var empleado = Object.create(humano);
//humano.create
empleado.trabajar = function(){
	console.log('Estoy trabajando')
}
empleado.constructor = function Empleado(){}



var programador = Object.create(empleado);
//empleado.create
programador.programar = function(){
	console.log('Necesito mas cafe')
}
programador.constructor = function Programador(){}

var horacio = Object.create(programador);
*/