const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    //console.log(userInput);
    if ((userInput === "rock") || (userInput === "paper") || (userInput === "scissors") || (userInput === "bomb")) {
        return userInput; 
    }
    else {
        console.log("error");   
    }
    }
function getComputerChoice() {
    let randNumber = Math.floor(Math.random() * 3);
    if (randNumber === 0) {
        return "rock";
    }
     else if  (randNumber === 1) {
        return "paper";
     }
     else if (randNumber === 2) {
        return "scissors";
     }
    }

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "tie";
    }
    if (userChoice === "rock") {

        if (computerChoice === "paper") {
           return "computer won"; 
        }
        else { 
            return "user won";
        }
    }
    if (userChoice === "paper") {

        if (computerChoice === "scissors") {
            return "computer won"; 
         }
         else if (computerChoice === "rock") { 
             return "user won";
         }

    }
    if (userChoice === "scissors") {

        if (computerChoice === "rock") {
            return "computer won"; 
         }
         else if (computerChoice === "paper") { 
             return "user won";
         }   
    }   
    if (userChoice === "bomb") {
        return "user won";
    }
    
        }
function playGame(){
    let userChoice = getUserChoice(prompt ("make your choice - rock, paper or scissors"));
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));     
     }

     playGame(); 
     


