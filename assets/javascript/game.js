

//  VARIABLES
//==========================
	
	var targetNumber = "";

	var crystalOne = "";
	var crystalTwo = "";
	var crystalThree = "";
	var crystalFour = "";

	var userNumber = 0;

	var wins = 0;
	var wins = 0;


	function start() {
		// target number between 19 and 120
		targetNumber = Math.floor(Math.random() * ((120-19) + 1) + 19);
		// crystal numbers between 1 and 12
		crystalOne = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
		crystalTwo = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
		crystalThree = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
		crystalFour = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
		// sets user score to 0
		userNumber = 0;
	}

start()