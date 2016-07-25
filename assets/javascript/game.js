$(document).ready(function () {

	
	characterChosen = false;
	enemyChosen = false;
	
	var attacker, defender, 

	
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

	// $('.pokemon').on('click', function () {

		$('#char1').on('click', function(){
			$("#char1").appendTo("#chosen");
			attacker = 'pikachu';
			console.log("attacker")
			characterChosen = true;})

		$('#char2').on('click', function(){
			$("#char2").appendTo("#chosen");
			characterChosen = true;})	

		$('#char3').on('click', function(){
			$("#char3").appendTo("#chosen");
			characterChosen = true;})

		$('#char4').on('click', function(){
			$("#char4").appendTo("#chosen");
			characterChosen = true;})	

	// });	
	$('.pokemon').on('click',function (){
		if(characterChosen = true) {
			$('#char1').on('click', function(){
				$("#char1").appendTo("#enemy");
				enemyChosen = true;})

			$('#char2').on('click', function(){
				$("#char2").appendTo("#enemy");
				enemyChosen = true;})	

			$('#char3').on('click', function(){
				$("#char3").appendTo("#enemy");
				enemyChosen = true;})

			$('#char4').on('click', function(){
				$("#char4").appendTo("#enemy");
				enemyChosen = true;})	

		}
	})

		// if (characterChosen = true) 	





		// else if ('#char2') {$('#char2').appendTo("#chosen");}
		// else if ('#char3') {$('#char3').appendTo("#chosen");}
		// else {$('#char4').appendTo("#chosen");}
		// // $("#char1").appendTo("#chosen");
		// characterChosen = true;



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