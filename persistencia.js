/*
cookie : forma de guardar pares de llaves valores cuyo valor debe ser un string. Esta como interfaz adentro del DOM. Lo malo es que dura lo que dura una sesion. Todas las cookies se transmiten en cada solicitud de HTTP
*/

//API Storage : Tiene dos variantes local y por sesion
// Ambas tienen los mismos metodos getItem y setItem

/*

Faker : Es una libreria que nos genera datos random. Lo bueno es que tiene muchas interfaces para generar. 


var productos = [];

for (var i = 0; i < 100; i++) {
	var item = {};
	item.nombre = faker.commerce.productName();
	item.precio = faker.commerce.price();
	item.material = faker.commerce.productMaterial();
	productos.push(item);
}

localStorage.setItem('productos', JSON.stringify(productos))


Ejericicio : 

1) Crear 3 clases distintas : Carrito, Pedido, Listado

Listado : Se encarga de generar un listado de productos siempre y cuando no haya ya en cache, de lo contrario usa los del storage / remover productos / agregar productos / buscar un producto / devolver todos los productos

*/