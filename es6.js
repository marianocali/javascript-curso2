class Humano{
	constructor(nombre, edad){
		this.nombre = nombre;
		this.edad = edad
	}

	saludo(){
		console.log('Hola')		
	}
}

class Empleado extends Humano{
	constructor(sueldo, nombre, edad){
		//Padre.apply(this, [param1, paramn])
		super(nombre, edad);
		this.sueldo = sueldo;
	}
	trabajar(){
		console.log('Trabajo muy duro..')
	}
}