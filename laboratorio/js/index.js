/************* PUNTO 1 *******************/
window.onload=funcion_inicial;

function funcion_inicial(){
	cambiarH5Articulos();
	cambiarClaseTitulo();
	modificarBotones();
	modificarImagenes();
	modificarNombreProductos();
	modificarPrecios();
}

function cambiarH5Articulos(){

var titulosH5 = document.querySelectorAll("h5");
var titulo1 = titulosH5[0];
var titulo2 = titulosH5[1];

titulo1.innerHTML = "ARTICULOS DESTACADOS";
titulo2.innerHTML = "ULTIMOS ARTICULOS";

//Una forma mas abreviada de hacerlo:
//document.querySelectorAll("h5")[0].innerHTML="ARTICULOS DESTACADOS";
}

/************* PUNTO 2 *******************/
function cambiarClaseTitulo(){

	// 2 Asignarle al contenedor del título "ARTICULOS DESTACADOS" la clase ".top"
	// titulo1.className += " top";
	var titulosH5 = document.querySelectorAll("h5");
	var titulo1 = titulosH5[0];
	titulo1.classList.add("top");
}

/************* PUNTO 3 MODIFICAR Botones *******************/
function modificarBotones(){
	botones = obtenerBotones();
	//with forEach
	botones.forEach(cambiarBoton);

	/* the old but always good way
	for(var i =0; i < botones.length; i++){
		botones[i].style.backgroundColor = "#045fae";
	}*/
}

//retorna un array con todos los botones
function obtenerBotones(){
	botones = document.querySelectorAll(".verMas");
	return botones;
}


function cambiarBoton(boton){
	boton.style.backgroundColor = "#045fae";
	boton.innerHTML = "ver +";
	}

/************* PUNTO 4 CAMBIAR IMAGENES *******************/
function modificarImagenes(){
	imagenes = getImagenes();
	var longitud = imagenes.length;
	var direccion = "images/productos/P00";
	
	for(var i = 0; i < longitud; i++){
		var urlimage = direccion + (i+1) + ".jpg";
		imagenes[i].src = urlimage;		
	}
}

function getImagenes(){
	return document.querySelectorAll(".img-responsive");
}

/*************** PUNTO 5 CAMBIAR NOMBRES DE PRODUCTOS *********/
function modificarNombreProductos(){
	var productos = getProductos();
	var nombresProductos = getNombresProductos();

	var longitud = productos.length;
 	if ( longitud > 0){
 		for(var i = 0; i <longitud ; i++){
	 		productos[i].innerText = nombresProductos[i];
 		}
	}
}

function getNombresProductos(){
	var nombresProductos = ["Apple iPhone 6 64GB", 
							"iPad (3rd generation)","Nexus",
							"Samsung Galaxy S7 edge","Moto G",
							"LG L40 D160"];
	return nombresProductos;							
}

function getProductos(){
	var productos = document.querySelectorAll(".grid-chain-bottom h6 a");
	return productos;
}

function modificarPrecios(){
	var precios =  getPrecios();
	var listadoPrecios = getListadoPrecios();

	var longitud = precios.length;
 	if ( longitud > 0){
 		for(var i = 0; i <longitud ; i++){
	 		precios[i].innerText = "$"  + listadoPrecios[i];
 		}
	}
}

function getPrecios(){
	var precios = document.querySelectorAll(".precio");
	console.dir(precios[0].innerText);
	return precios;
}

function getListadoPrecios(){
	var listadoPrecios = ["8000", 
							"7500","7200",
							"8000","4500",
							"3750"];
	return listadoPrecios;							
}
