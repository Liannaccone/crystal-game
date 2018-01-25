# crystal-game

##variables:
	var targetNumber = ""
	var crystalOne = ""
	var crystalTwo = ""
	var crystalThree = ""
	var crystalFour = ""
	var userScore = ""
	wins = 0
	losses = 0

##Functions

###to initialize game:
	- randomly generate number for targetNumber
	- randomly generate number for crystals
	- update text of #targetscore"
	- update text of #userScore

##on click
	-add object value to userScore


###when win:
	- update wins++
	- initialize() game to restart


####when lose:
	- update losses++
	- initialize() game to restart


###parameters
	- crystals 1 - 12
	- targetNumber 19 - 120