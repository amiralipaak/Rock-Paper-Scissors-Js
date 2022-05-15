const Choices = ["Rock", "Paper", "Scissors"];
const userChoice = prompt("Choose one Between Rock, Paper, Scissors");
if (userChoice) {
	console.log(`You Have Picked ${userChoice}`);
} else {
	console.log("Please Reload the Page and Choose One");
}

const randomNumber = Math.floor(Math.random() * 3);
const computerChoice = Choices[randomNumber];

console.log(`Computer Chooses: ${computerChoice}`);

if (userChoice == computerChoice) {
	console.log("It's a Tie, Try again!");
} else if (userChoice === "rock" || userChoice === "Rock") {
	if (computerChoice === "Scissors") {
		console.log("Congrats, You have Won");
	} else {
		console.log("You Lose, Try again!");
	}
} else if (userChoice === "paper" || userChoice === "Paper") {
	if (computerChoice === "Rock") {
		console.log("Congrats, You have Won");
	} else {
		console.log("You Lose, Try again!");
	}
} else if (userChoice === "scissors" || userChoice === "Scissors") {
	if (computerChoice === "Paper") {
		console.log("Congrats, You have Won");
	} else {
		console.log("You Lose, Try again!");
	}
}
