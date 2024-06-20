let gameSeq = [];
let userSeq = [];

let started = false;

let level = 0;
let max = 0;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
   
}); 

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250) 
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    gameSeq.push(randColor);
    console.log("game ",gameSeq);
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
}

function checkAns(idx){
    
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length === userSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        let higest = Math.max(level, max);
        h2.innerHTML = `Game Over! Your score was <b> ${level}  & higest score ${higest}.</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){

   let btn = this;
   btnFlash(btn);
   let userColor = btn.getAttribute("id");
  
   userSeq.push(userColor);
   console.log("user", userSeq);
   
   checkAns(userSeq.length - 1);

}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    max = Math.max(level,max);
    level = 0;
    
}