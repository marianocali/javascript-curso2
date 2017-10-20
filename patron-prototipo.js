//Patron Prototipo
var humano = {
	saludo : function(){
		console.log('Hola');
	}
}

var horacio = Object.create(humano);
var juan = Object.create(humano);