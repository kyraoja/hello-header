// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

	// returns 0 to 'limit'
var limit = 2;
var numRand = Math.floor(Math.random()*limit);

	var msg0 = 'Hello!';
	var msg1 = 'Hola!';
	var msg2 = 'Bonjour!';




	$('h1').text('msg' + numRand);

	console.log('msg' + numRand);

}); 
