$(document).ready(function() {

//  VARIABLES
//==========================
	
	var targetScore = "";

	var crystalOne = "";
	var crystalTwo = "";
	var crystalThree = "";
	var crystalFour = "";

	var userScore = 0;

	var wins = 0;
	var losses = 0;


// FUNCTIONS
//===========================

	function refreshUserScore() {
		$("#userScore").text(userScore)
	}

	function start() {
		// target number between 19 and 120
		targetScore = Math.floor(Math.random() * ((120-19) + 1) + 19);
		// crystal numbers between 1 and 12
		crystalOne = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
		crystalTwo = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
		crystalThree = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
		crystalFour = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
		// sets user score to 0
		userScore = 0;

		console.log(crystalOne);
		console.log(crystalTwo);
		console.log(crystalThree);
		console.log(crystalFour);

		refreshUserScore()
	}




// MAIN PROCESS
//=============================

	start()

	$("#crystalOne").on("click",function(){
		userScore = userScore + crystalOne;
		refreshUserScore();
	});

	$("#crystalTwo").on("click",function(){
		userScore = userScore + crystalTwo;
		refreshUserScore();
	});

	$("#crystalThree").on("click",function(){
		userScore = userScore + crystalThree;
		refreshUserScore();
	});

	$("#crystalFour").on("click",function(){
		userScore = userScore + crystalFour;
		refreshUserScore();
	});




}); // closing out document ready