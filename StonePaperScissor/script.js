var userScr = 0;
var compScr = 0;

const choices = document.querySelectorAll(".imgclass");

const compChoice = () => {
    let options = ["rock","paper","scissors"];

    var x = Math.floor(Math.random() * 3);
    return options[x];
}
// const drawGame= () => {
//     let para = document.querySelector("#msg");
//     console.log("draw game ")
// }

const gamaPlay = (userChoice) => {

    let userWin = undefined;
    let comChoice = compChoice();

    // Logics done
    if(userChoice === "rock" && comChoice === "scissors"){
        userWin = 1;
    }
    else if(userChoice === "paper" && comChoice === "rock"){
        userWin = 1;
    }
    else if(userChoice === "scissors" && comChoice === "paper"){
        userWin = 1;
    }
    else if(userChoice === comChoice){
        userWin = 2// draw game
        // drawGame();
    }
    else{
        userWin = 0;
    }
// consdition statement
    if(userWin == 1)
        {  userScr++;}  // console.log("User win"); 
    else if(userWin == 0)
        {compScr++;}  //console.log("comp win"); 

    updateResult(userScr,compScr,comChoice,userChoice,userWin);

}
let updateResult = (userScr,compScr,comChoice,userChoice,userWin) => {
    // console.log(userScr,compScr,userChoice,comChoice,userWin);
    let x = document.querySelector("#userSr");
    x.innerText = userScr;
    let y = document.querySelector("#compscr");
    y.innerText = compScr;

    let para = document.querySelector("#msg");
    console.log(para);
    
    if(userWin == 2){
        para.style.backgroundColor = "black";
        para.innerText = "It was Draw";
        
    }
    else if(userWin == 1){
        para.innerText = `You Won! ${userChoice} beats ${comChoice}`;
        para.style.backgroundColor = "green";
    }
    else{
        para.innerText = `You Lose! ${comChoice} beats ${userChoice}`;
        para.style.backgroundColor = "red";
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); 
        gamaPlay(userChoice);
    });
});