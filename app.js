
let userscore=0;
let compscore=0;

const chocies= document.querySelectorAll(".choice");

const drawGame= ()=>{
    console.log("Game Was Draw.");
    msg.innerText= "Game Was Draw.Play again"
    msg.style.backgroundColor= "black"
}

const msg =document.querySelector("#msg")
const genCompChoice= () =>{
    const options= ["rock","paper","scissors"];
    const randId = Math.floor(Math.random()*3);
    return options[randId];
}
const userscoreP = document.querySelector("#user-score");
const compscoreP = document.querySelector("#Comp-score");

const showWinner=(userWin)=>{
    if(userWin){
        userscore++;
        userscoreP.innerText=userscore;
        console.log("You Win!!");
        msg.innerText= "You Win "
        msg.style.backgroundColor= "green"
    }else{
        compscore++;
        compscoreP.innerText=compscore;
        console.log("You Loose");
        msg.innerText= "Better Luck next Time!!! "
        msg.style.backgroundColor= "red"
        
    }
}

const playGame= (userChoice)=>{ 
    console.log("user Choice ->", userChoice);
        // comp Choice Genrate
        const CompChoice=genCompChoice();
        console.log("Compture choice=>",CompChoice);

        if (userChoice===CompChoice){
            drawGame();
        } else{
            let userWin= true;
            if(userChoice === "rock"){
               userWin = CompChoice==="paper" ? false : true;
                // CompChoice==="scissors" ? false : true;
            }else if(userChoice==="paper"){
               userWin=CompChoice==="scissor" ? false : true;
            }else{
               userWin= CompChoice==="rock"? false : true;
            }
            showWinner(userWin)
        }
} 

chocies.forEach((choice)=>{
    // console.log(choice);
     
    choice.addEventListener("click",() =>{  
        const userChoice= choice.getAttribute("id");
        // console.log("chocie was Clicked :-",userChoice);
        playGame(userChoice);
    })
})