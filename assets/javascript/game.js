$(document).ready(function () {

	
	characterChosen = false;
	enemyChosen = false;
	
	var attacker, defender;

	
	var char = {
		pikachu: {
		attacking: 12,
		attackBonus: 12,
		health: 500,
		counter: 23
		},

		charmander: {
		attacking: 12,
		attackBonus: 12,
		health: 100,
		counter: 23

		},
		squirtle: {
		attacking: 12,
		attackBonus: 12,
		health: 150,
		counter: 23
		},
		mew: {
		attacking: 12,
		attackBonus: 12,
		health: 180,
		counter: 23
		}	
	

	}
	
	$('#char1').prepend('<img id="pikachu" src="assets/images/pikachu.png">');
	$('#char2').prepend('<img id="charmander" src="assets/images/charmander.png">');
	$('#char3').prepend('<img id="squirtle" src="assets/images/squirtle.png">');
	$('#char4').prepend('<img id="mew" src="assets/images/mew.png">');
	
		
		
	// });	
	$('#available .pokemon').on('click',function (){
		if($(this).data("chosen")) {return;}
		

		if(characterChosen == true && enemyChosen == false){
			$(this).data("chosen", true);
			$(this).appendTo("#enemy");
			
			enemyChosen = true;
			
		}

		else if (characterChosen == false) {
			$(this).data("chosen", true);
			$(this).appendTo("#chosen");

			characterChosen = true;

			
		}




	});

	$('#attack_button').on('click',function (){

		if($('#chosen').find("img").length < 1) {
			return;
		}
		if($('#enemy').find("img").length < 1) {
			return;
		}

		if(!attacker) {

		var currentCharacter = $("#chosen").find("img").first().attr("id");
		attacker = char[currentCharacter];
		console.log(attacker);
		console.log(currentCharacter);
		}

		if(!defender) {
		var currentEnemy = $("#enemy").find("img").first().attr("id");
		defender = char[currentEnemy];
		console.log(defender);
		console.log(currentEnemy);
		}

		battleInit();



	})

	function battleEnd() {
		if(defender.health <= 0){
		console.log ("You Win, Pick Your Next Opponent");
		defender = null;
		$("#enemy").find("img").remove();
		enemyChosen = false;
		if($("#available").find("img").length == 0) {
			$('#message').text("You Won!");

		}

		}
		else if(attacker.health <= 0){
			console.log ("You Lose, Press Restart to Try Again");
		}
	}

	function battleInit() {


		if (attacker.health > 0 && defender.health > 0) {
			defender.health = defender.health-attacker.attacking;
			attacker.health = attacker.health-defender.counter;
			attacker.attacking = attacker.attacking + attacker.attackBonus;
			$('#chosenstatus').text("Health "+attacker.health);
			console.log(attacker.health + "attacker health");
			console.log(defender.health + "defender health");
			console.log(attacker.attacking + "attacker attack");
			battleEnd();
		}


	}


		// if (characterChosen = true) 	





		// else if ('#char2') {$('#char2').appendTo("#chosen");}
		// else if ('#char3') {$('#char3').appendTo("#chosen");}
		// else {$('#char4').appendTo("#chosen");}
		// // $("#char1").appendTo("#chosen");
		// characterChosen = true;



	});

	
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