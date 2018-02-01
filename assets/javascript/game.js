$(document).ready(function() {

//  VARIABLES
//==========================
	// variable to hold target score
	var targetScore = "";

	// variables to hold crystal numbers
	var crystalOne = "";
	var crystalTwo = "";
	var crystalThree = "";
	var crystalFour = "";

	// user score
	var userScore = 0;

	// variables to hold win and loss counts
	var wins = 0;
	var losses = 0;


// FUNCTIONS
//===========================
	
	// refresheas user score in html
	function refreshUserScore() {
		$("#userScore").text(userScore);
	}
	// refreshes target score in html
	function refreshTargetScore() {
		$("#targetScore").text(targetScore);
	}
	// empties banner
	function refreshBanner() {
		$("#banner").empty()
	}
	// refreshes win count in html
	function refreshWins() {
		$("#wins").text("Wins: " + wins)
	}
	// refreshes losses count in html
	function refreshLosses() {
		$("#losses").text("Losses: " + losses)
	}
	// initializes game: randomly assigns targetScore, number assignments for crystals, sets user score to 0, and refreshes this info in the html
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

	// function for when user wins: increments wins, updates banner text, adds image/gif to the counter box
	function userWon () {
		wins++
		$("#banner").text("You won!");
		$("#counter").addClass("nickHappy");
		$("#counter").removeClass("nickSad");
	}
	// function for when user loses: increments losses, updates banner text, adds image/gif to the counter box
	function userLost () {
		losses++;
		$("#banner").text("You lost!");
		$("#counter").addClass("nickSad");
		$("#counter").removeClass("nickHappy");
	}



// MAIN PROCESS
//=============================

	initialize()

	// on click of #crystalOne.....
	$("#crystalOne").on("click",function(){
		// add button value to current user score
		userScore = userScore + crystalOne;
		// refresh the html
		refreshUserScore();
		// if user score is higher than target, user loses....
		if (userScore > targetScore) {
			userLost();
			initialize();
			}
		// if user score equal to target score then the user wins....
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