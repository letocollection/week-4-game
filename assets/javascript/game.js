$(document).ready(function () {

	
	characterChosen = false;
	enemyChosen = false;
	
	var attacker, defender;

	
	var char = {
		pikachu: {
		attacking: 12,
		attackBonus: 12,
		health: 150,
		counter: 15
		},

		charmander: {
		attacking: 35,
		attackBonus: 35,
		health: 100,
		counter: 15

		},
		squirtle: {
		attacking: 20,
		attackBonus: 15,
		health: 150,
		counter: 16
		},

		mew: {
		attacking: 12,
		attackBonus: 25,
		health: 150,
		counter: 18
		}	
	

	}
	
	$('#char1').prepend('<img id="pikachu" src="assets/images/pikachu.png">');
	$('#char2').prepend('<img id="charmander" src="assets/images/charmander.png">');
	$('#char3').prepend('<img id="squirtle" src="assets/images/squirtle.png">');
	$('#char4').prepend('<img id="mew" src="assets/images/mew.png">');
	
		
		
	//If character and enemy have not been chosen, pick a character from available pokemon by clicking on it. 	
	$('#available .pokemon').on('click',function (){


		if($(this).data("chosen")) {return;}
		
		//If you picked a character, but not an enemy, make the click be an enemy. 
		if(characterChosen == true && enemyChosen == false){
			$(this).data("chosen", true);
			$(this).appendTo("#enemycharacter");
			
			enemyChosen = true;
			
		}
		//If you havent picked a character yet, make sure you pick a character. 
		else if (characterChosen == false) {
			$(this).data("chosen", true);
			$(this).appendTo("#yourcharacter");

			characterChosen = true;
			
		}



	});

	$('#restartGame').on('click', function(){
		location.reload();
	})


	$('#attack_button').on('click',function (){

		if($('#chosen').find("img").length < 1) {
			if( true ) {$('#notification1').text("You havent picked your character!");}

			// else if ( false ) {$('#notification1').text(""); }
			
			return;
		}
		if($('#enemy').find("img").length < 1) {
			if( true ) {$('#notification2').text("You havent picked your challenger!");}

			// else if (false) {$('#notification2').text(""); }
			
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

			var audioElement = document.createElement('audio');
	        audioElement.setAttribute('src', 'assets/sounds/attack.wav');

	        audioElement.play();




	})

	function battleEnd() {
		if(defender.health <= 0 && attacker.health > 0){

		console.log ("You Win, Pick Your Next Opponent");

		defender = null;
		$("#enemy").find("img").remove();
		enemyChosen = false;
		if($("#available").find("img").length == 0) {
			$('#message').text("Congratulations! You Won! Press Restart to Play Again");

			var audioElement = document.createElement('audio');
	        audioElement.setAttribute('src', 'assets/sounds/gamemusic.mp3');
	        audioElement.play();

		}

		}
		else if(attacker.health <= 0){
			console.log ("You Lose, Press Restart to Try Again");
			$('#message').text("Game Over You LOSE! Press Restart to Play Again");
				
			
		}
	}

	function battleInit() {


		if (attacker.health > 0 && defender.health > 0) {
			defender.health = defender.health-attacker.attacking;
			attacker.health = attacker.health-defender.counter;
			attacker.attacking = attacker.attacking + attacker.attackBonus;
			$('#chosenstatus').text("Health "+attacker.health);
			$('#playbyplay').text("You attacked for " + attacker.attacking + " Challenger attacked back for " + defender.counter);
			$('#challengerstatus').text("Health "+defender.health);
			console.log(attacker.health + "attacker health");
			console.log(defender.health + "defender health");
			console.log(attacker.attacking + "attacker attack");
			battleEnd();
		}
		// if (attacker.health <=0 && defender.health <=0) {
		// 	console.log ("You Lose, Press Restart to Try Again");
		// 	$('#message').text("Game Over You LOSE! Press Restart to Play Again");
		// }


	}


		
});

	
