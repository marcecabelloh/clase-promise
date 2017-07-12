
$(document).ready(function(){

var pokemon = function(url_habilidad){

$.ajax({
	url: url_habilidad,
	type: 'GET',
	dataType: 'json',

})

.done(function(llamarHabilidades) {
	llamarHabilidades.abilities.forEach(function(el){
		document.write(el.ability.name + "<br>"); //nombre de la habilidad
	})
	
})

.fail(function() {
	console.log("error");
})

.always(function() {
	console.log("complete");
}); 

}


$.ajax({
	url: 'http://pokeapi.co/api/v2/pokemon',
	type: 'GET',
	dataType: 'json',
	data: {'limit': '15'},

})

.done(function(respuesta) {
	respuesta.results.forEach(function(el){
		document.write(el.name + "<br>");
		pokemon(el.url);
	})
	
})

.fail(function() {
	console.log("error");
})

.always(function() {
	console.log("complete");
}); 

})
//Imprimir pokemon + habilidad 10ptos

//Imprimir pokemon + todas las habilidades 15puntos

//Imprimir pokemon habilidades y cualquier otra cosas del pokemon +20ptos

//No hacerlo con document.write 30pts

//Hacerlo con jquery 35ptos

//Agregar CSS 45ptos