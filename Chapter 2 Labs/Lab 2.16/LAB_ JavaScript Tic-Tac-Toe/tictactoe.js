let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
	MORE_MOVES_LEFT: 1,
	HUMAN_WINS: 2,
	COMPUTER_WINS: 3,
	DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
	// Setup the click event for the "New game" button
	const newBtn = document.getElementById("newGameButton");
	newBtn.addEventListener("click", newGame);

	// Create click-event handlers for each game board button
	const buttons = getGameBoardButtons();
	for (let button of buttons) {
		button.addEventListener("click", function () { boardButtonClicked(button); });
	}

	// Clear the board
	newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3 
// elements are the top row, the next 3 the middle row, and the last 3 the 
// bottom row. 
function getGameBoardButtons() {
	return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
	
	const buttons = getGameBoardButtons();

	// Ways to win
	const possibilities = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
		[0, 4, 8], [2, 4, 6] // diagonals
	];

	// Check for a winner first
	for (let indices of possibilities) {
		if (buttons[indices[0]].innerHTML !== "" &&
			buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
			buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {
			
			// Found a winner
			if (buttons[indices[0]].innerHTML === "X") {
				playerTurn = false;
				document.getElementById("turnInfo").innerHTML = "You win!";
				return gameStatus.HUMAN_WINS;
			}
			else if(buttons[indices[0]].innerHTML === "O"){
				document.getElementById("turnInfo").innerHTML = "Computer wins!";
				playerTurn = false;
				return gameStatus.COMPUTER_WINS;
			}
		}
	}

	// See if any more moves are left
	let foundEmpty = false;
	for (let button of buttons) {
		if (button.innerHTML !== "X" && button.innerHTML !== "O") {
			return gameStatus.MORE_MOVES_LEFT;
		}
	}

	// If no winner and no moves left, then it's a draw
	playerTurn = false;
	document.getElementById("turnInfo").innerHTML = "Draw game";
	return gameStatus.DRAW_GAME;
}

function newGame() {
	//Clear computer's move timeout
	clearTimeout(computerMoveTimeout);

	//Clear buttons
	const buttons = getGameBoardButtons();
	for (let button of buttons) {
		button.innerHTML = " ";
		button.disabled = false;
	}

	//Player's turn
	playerTurn = true;

	//Set turn information to "Your turn"
	document.getElementById("turnInfo").innerHTML = "Your turn";
}

function boardButtonClicked(button) {
	if(playerTurn === true) {
		button.innerHTML = "X";
		button.classList.add("x");
		button.disabled = true;
		switchTurn();
	}
}

function switchTurn() {
	let result = checkForWinner();
	console.log("Result", result);
	if(result === 1) {
		if(playerTurn === false) {
			playerTurn = true;
			document.getElementById("turnInfo").innerHTML = "Your turn";
			boardButtonClicked();
		} 
		else {
			playerTurn = false;
			computerMoveTimeout = setTimeout(makeComputerMove, 1000);
			document.getElementById("turnInfo").innerHTML = "Computer's turn";
		}
	}
	
}

function makeComputerMove() {
	const buttons = getGameBoardButtons();
	let randomButton = Math.round(Math.random() * 10);
	while(buttons[randomButton].innerHTML  !== " ") {
		console.log("test");
		if(buttons[randomButton].innerHTML === " ") {
			buttons[randomButton] = "O";
			console.log(buttons[randomButton]);
			document.getElementsByTagName("button")[randomButton].classList.add("o");
			buttons[randomButton].disabled = true;
			switchTurn();
		}
		else {
			randomButton = Math.round(Math.random() * 10);
		}
	}
}