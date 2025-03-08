let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    let options = ["rock", "paper", "sessiors"];
    // rock ,paper,sessiors
    const randomIdx = Math.floor(Math.random() * 3)
    return options[randomIdx];

}

const drowGame = () => {
    msg.innerText="Game Was Draw Play Again.";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userchoiceId,compChoiceId)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win.  your ${userchoiceId} beats ${compChoiceId}` ;
        msg.style.backgroundColor="Green";
    }
    else{
        computerScore++;
        compScorePara.innerText=computerScore;
        msg.innerText=`You Lost. ${userchoiceId} beats your ${compChoiceId}` ;
        msg.style.backgroundColor="Red";
    }
}
const playGame = (userchoiceId) => {
    // Generate computer choice=>moduls
    const compChoiceId = genCompChoice();
    if (userchoiceId === compChoiceId) {
        drowGame();
    }
else {
        let userWin = true;
        if (userchoiceId == "rock") {
          //sessiors ,paper
          userWin= compChoiceId==="paper"? false :true;
        }
        else if(userchoiceId=="paper"){
            //rock sessiors
            userWin=compChoiceId==="sessiors"? false:true;

        }
        else{
            //rock, paper
            userWin=compChoiceId==="rock"? false:true;
        }
        showWinner(userWin,userchoiceId,compChoiceId);
    }
}



choices.forEach((choice) => {
    const userchoiceId = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        playGame(userchoiceId);
    })
})