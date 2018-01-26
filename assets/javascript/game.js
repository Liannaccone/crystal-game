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
		$("#userScore").text(userScore);
	}

	function refreshTargetScore() {
		$("#targetScore").text(targetScore);
	}

	function refreshBanner() {
		$("#banner").empty()
	}

	function refreshWins() {
		$("#wins").text("Wins: " + wins)
	}

	function refreshLosses() {
		$("#losses").text("Losses: " + losses)
	}

	function initialize() {
		// target number between 19 and 120
		targetScore = Math.floor(Math.random() * ((120-19) + 1) + 19);
		// crystal numbers between 1 and 12
		crystalOne = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
		crystalTwo = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
		crystalThree = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
		crystalFour = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
		// sets user score to 0
		userScore = 0;

		console.log(targetScore)
		console.log(crystalOne);
		console.log(crystalTwo);
		console.log(crystalThree);
		console.log(crystalFour);

		refreshTargetScore();
		refreshUserScore();
		refreshWins();
		refreshLosses();
	}


	function userWon () {
		wins++
		$("#banner").text("You won!");
		$("#counter").addClass("nickHappy");
		$("#counter").removeClass("nickSad");
	}

	function userLost () {
		losses++;
		$("#banner").text("You lost!");
		$("#counter").addClass("nickSad");
		$("#counter").removeClass("nickHappy");
	}



// MAIN PROCESS
//=============================

	initialize()

	$("#crystalOne").on("click",function(){
		userScore = userScore + crystalOne;
		refreshUserScore();
		if (userScore > targetScore) {
			userLost();
			initialize();
			}
		if (userScore === targetScore) {
			userWon();
			initialize();			
		}
	});

	$("#crystalTwo").on("click",function(){
		userScore = userScore + crystalTwo;
		refreshUserScore();
		if (userScore > targetScore) {
			userLost();
			initialize();
			}
		if (userScore === targetScore) {
			userWon();
			initialize();			
		}
	});

	$("#crystalThree").on("click",function(){
		userScore = userScore + crystalThree;
		refreshUserScore();
		if (userScore > targetScore) {
			userLost();
			initialize();
			}
		if (userScore === targetScore) {
			userWon();		
			initialize();			
		}	
	});


	$("#crystalFour").on("click",function(){
		userScore = userScore + crystalFour;
		refreshUserScore();
		if (userScore > targetScore) {
			userLost();
			initialize();
			}
		if (userScore === targetScore) {
			userWon();
			initialize();			
		}
	});


}); // closing out document ready