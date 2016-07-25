$(document).ready(function () {
	
	var char = {
		pikachu: {
		attacking: 12,
		health: 120,
		counter: 23
		},
		charmander: {
		attacking: 12,
		health: 100,
		counter: 23
		},
		squirtle: {
		attacking: 12,
		health: 150,
		counter: 23
		},
		mew: {
		attacking: 12,
		health: 180,
		counter: 23
		}	
	}

	$('#char1').prepend('<img id="pikachu" src="assets/images/pikachu.png">');
	$('#char2').prepend('<img id="charmander" src="assets/images/charmander.png">');
	$('#char3').prepend('<img id="squirtle" src="assets/images/squirtle.png">');
	$('#char4').prepend('<img id="mew" src="assets/images/mew.png">');
})
// var opponentsBeat = [];


// function winning (opponent) {
// 	oppentsBeat.push(opponent)
// }


// function initBattle (attacker, defender) {
// 	loop through oppentsBeat
// 	check if defender is in there
// 	if he is get another char
	
// 	else 
// 	attack (attacker, defender)
// }

// function attack (attacker, defender) {
// 	var health = char[defender].health;
// 	var attacking = char[attacker].attacking
// 	console.log('char before attack', char)
// 	console.log('____________________________')
// 	console.log('att', attacker)
// 	console.log('def', defender)
// 	console.log('____________________________')
// 	if(defender life is not === 0) {
// 		char[defender].health = health - attacking
// 		console.log('char after attack', char)		
// 	} else {
// 		defender has no health
// 		winning(defender)
// 	}
// }

// attack('pikachu', 'charmander');
// attack('pikachu', 'charmander');


// $(document).ready(function () {
// 	$(button).on(click, function () {
// 		char.pikachu.attacking
// 		a()