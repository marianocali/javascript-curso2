/*
AJAX : Async Js and XML

Sincronismo:

Stack

console.log()
console.log()
console.log()
sincronica(5) -> 5'
console.log()
console.log()
console.log()


Asincronismo:

stack 						WEB APIs Stack

console.log()				asincronica(5) -> 5'
console.log()
console.log()
console.log()
console.log()
console.log()

Stack Queue
asincronica(5) -> 5'



http://latentflip.com/loupe

setTimeout(function(){
    console.log('hola')
}, 0)

*El tiempo de una funcion setTimeout no asegura el momento de ejecucion, sino un MINIMO tiempo de espera

console.log('chau')
*/

//API XMLHttpRequest : Permite realizar pedidos asincronicos a traves del protocolo HTTP
//var xhr = new XMLHttpRequest();
/*
Todos los objetos xhr pueden pasar por 5 estados distintos, los cuales se registran en el atributo readyState :

0 - Objeto instaciado
1 - Objeto configurado (que este configurado implica que esta listo para ser enviado)
2 - Cabeceras enviadas y recibidas
3 - Descarga de informacion
4 - Pedido finalizado (que este finalizado no implica que haya sido resuelto de forma satisfactoria)

HTTP : Protocolo web que sigue el estandar pedido-respuesta

PEDIDO
Sintaxis : Verbo URL version
Ej.: GET /index.html HTTP/1.0
Cabeceras:


RESPUESTA
Sintaxis : version codigo mensaje
Ej.: HTTP/1.0 200 OK
Cabeceras: 

https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP

*/

//Para configurar el objeto xhr usamos sus metodo open el cual toma 3 argumentos: 1) El verbo HTTP, 2)URL y 3)la fase

//"La fase" es un booleano que determina la manera en que se va a realizar el pedido. Por default es asincronico, con lo cual en false lo convertimos a un pedido sincronico. 
//xhr.open('get', 'texto.txt', false); -> Sincronico
//xhr.open('get', 'texto.txt');

//Para enviar el pedido usamos su metodo send
//xhr.send();


/*

file://192.168.0.100/Box/js%20avanzado%20lu-mie/clase03/index.html

Como estamos trabajando en el protocolo file no podemos hacer pedidos http, asi que tenemos que tener un servidor activo.
Podemos o contratar uno o simular uno en nuestra propia pc.
Para simular uno vamos a usar el XAMPP Control Panel encendiendo el servidor apache con su boton start.

Cada vez que iniciamos un servidor local, igual que uno remoto, vamos a tener una url y un document root, es decir, la ubicacion en la maquina en donde estan todos mis archivos. La url es "localhost" (tambien su ip es 127.0.0.1) y nuestro document root lo podemos ver en el archivo de configuracion de apache.


En XAMPP podemos ir a 

config -> httpd.conf -> Buscamos "documentroot" y vemos o configuramos la ubicacion que necesitamos.

Una vez que tenemos la ubicacion, pasamos los archivos ahi.

Si todo funciona bien deberiamos poder acceder a nuestros arhcivos por la url:

http://localhost/nombre_de_la_carpeta/

*/
var xhr = new XMLHttpRequest();

xhr.open('get', 'texto.txt');

//* Con lo cual en el medio de todo, antes de mandar el pedido hay que asignarle un evento que se dispare una vez que el pedido termina
/*
Tenemos dos:

- el evento "load" que se dispara cuando el pedido ya termino
- el evento "readystatechange" que se dispara cada vez que el atributo .readyState cambia
*/
xhr.addEventListener('load',function(){
	console.log('Pedido Finalizado!');
	//Como aca estamos seguros que el pedido termino, nos tenemos que asegurar que encima haya salido todo bien, por lo cual hacemos un condicional en base al codigo de status HTTP
	if (xhr.status == 200) {
		document.body.innerText = xhr.response;
	}
});

/*
xhr.addEventListener('readystatechange',function(e){
	console.log('Cambio de estado: '+xhr.readyState);
	if (xhr.readyState == 4 && xhr.status == 200) {
		document.body.innerText = xhr.response;
	}
})
*/

xhr.send();
//No podemos usar la respuesta de forma sincronica porque todavia no volvio *
//console.log(xhr.response);

/*

Ejercicio:

1) Agarrar todos los links de la barra de navegacion
2) Asignarles un evento de tipo click
3) Por cada click, ir a pedir por AJAX el archivo que tiene el contenido de cada pagina, es decir, si le doy click al link "portfolio", ir a pedir el archivo portfolio.html
*La idea es usar la misma funcion para todos los links
4) Cuando obtenemos la respuesta del archivo, es decir, su contenido, usarlo para reemplazar el contenido UNICAMENTE de la etiqueta main.

Para resolver el ej. hay que crear los archivos.

*/




/*
ANEXO: Metodos HTTP

GET : Sirve para enviar info al servidor o solicitar info sin cambiar nada. En caso de pasar parametros se pasan atraves de la misma url con lo cual nos limitamos a una transferencia de 1024 kb de info

POST : Sirve para enviar info al servidor y modificar algo . En caso de pasar parametros se mandan en el cuerpo del pedido en donde hay mas espacio para enviar info

PUT : Sirve para enviar info al servidor y cambiar todo el valor de un recurso

PATCH : Lo mismo que PUT pero no para cambiar el valor en su totalidad, sino para editar el recurso

DELETE : Sirve para borrar un recurso del servidor

*/