// Your solution goes here 
    let totalGuesses = 0;
    let numToGuess = Math.floor(Math.random() * 10) + 1;
    let num = prompt('Enter a number between 1 and 10');
    

playGuessingGame(num);

function playGuessingGame(num) {
    number = Number(num);
    while(numToGuess != number) {
        number = Number(num);
        totalGuesses++;
        if(number < numToGuess) {
            number = prompt('X is too small. Guess a larger number.');
        }
        else if(number > numToGuess) {
            number = prompt('X is too large. Guess a smaller number.');
        }
        else if(isNaN(number)) {
            number = prompt('Please enter a number.');
        }
        else if(number.toString() === '') {
            alert('');
            return 0;
        }
    }
    alert(totalGuesses);
    return 0;
}

