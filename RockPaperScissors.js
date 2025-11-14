// console.log("Hello World");

 // add buttons to DOM
 const rockButton = document.querySelector("#rock");
 const paperButton = document.querySelector("#paper");
 const scissorsButton = document.querySelector("#scissors");

 // add event listener to play a round of rps with player choices
 rockButton.addEventListener("click", () => {
    const humanSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
 });

 paperButton.addEventListener("click", () => {
    const humanSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
 });
 scissorsButton.addEventListener("click", () => {
    const humanSelection = "scissors";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
 });



 // add a div to display results
 const score = document.querySelector("#score");
 let playerScore = document.querySelector("#playerScore");
 let computerScore = document.querySelector("#computerScore");


 let totalPlayerScore = 0, totalComputerScore = 0;


function getComputerChoice(choice){
   let n = Math.floor(Math.random() * 3);
   

   //conditionals to determine choice
   if(n === 0){
    choice = "Rock";
   }
   else if (n === 1){
    choice = "Paper";
   }
   else{
    choice = "Scissors";
   }
   return choice;
}

// A function that plays a round
function playRound(humanChoice, computerChoice){
    //player and computer choose the same thing
    if(humanChoice === computerChoice){
        console.log("It's a Draw!");
    }
    //human wins
    if((humanChoice === "rock" && computerChoice === "Scissors") || (humanChoice === "paper" && computerChoice === "Rock") || (humanChoice === "scissors" && computerChoice === "Paper")) {
        console.log("Round Winner: Player");
        addPlayerScore();
    }
    //computer wins
    else{
        console.log("Round Winner: Computer")
        addComputerScore();
    }
    didIWin();
   

}

 // function to add to score to player
 function addPlayerScore(){
    totalPlayerScore++
    playerScore.innerHTML = totalPlayerScore;
 }

 function addComputerScore(){
    totalComputerScore++
    computerScore.innerHTML = totalComputerScore;
 }


// function determine if winner condition is met
function didIWin(){
    if(totalPlayerScore === 5){
        const playerWin = document.querySelector("#playerWin")
        playerWin.innerHTML = 'Player Wins the Game! Congrats!!!';
        
        //disbale buttons
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        
    }
    else if(totalComputerScore === 5){
        console.log("Computer Wins");
        const cpuWin = document.querySelector("#cpuWin");
        cpuWin.innerHTML = 'Computer Wins the Game! Bummer :(';
        
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    
    }
    

}








