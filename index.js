const box =document.querySelectorAll(".box");
const x = "X";
let flag = true;
let playerName = document.getElementById("player");
box.forEach((e)=>
    
    e.addEventListener("click",()=>{

        if(e.textContent!== "") return;
        if(flag==true){
            e.textContent="X";
            playerName.textContent="X";
            e.classList.add("x");
            flag=false;
        }
        else{
            e.textContent="O";
              playerName.textContent="O";
            e.classList.add("o");
            flag = true;
        }
        winner();
    })
       
    
    );
function about(){
    window.open("https://github.com/OakLeaf007/tictactoe", "_blank0");
}
const xscore = document.querySelector(".score-x");
const oscore = document.querySelector(".score-o");
let scorex=0;
let scoreo=0;
const banner = document.getElementById("banner");
const reset = document.querySelector(".reset");
const winnerName = document.getElementById("winner");
const quack = new Audio("quack.mp3");
const combinations=[
        [0,1,2], [3,4,5], [6,7,8], [0,3,6],[1,4,7],
        [2,5,8],[0,4,8], [2,4,6]
    ];

function winner(){
    for(let i of combinations){
        let[a,b,c] = i;


    if(box[a].textContent !== "" &&
         box[a].textContent === box[b].textContent &&
        box[b].textContent === box[c].textContent){
            popupWinner(a,b,c);
            
            disableAll();
            setTimeout(()=>{
                banner.style.display="block";
                winnerName.textContent= box[a].textContent + " Wins";
                if(box[a].textContent=="X") 
                    {   scorex+=1;
                        xscore.textContent=scorex;
                       
                    } else{
                        scoreo+=1;
                        oscore.textContent=scoreo;
                    }

                quack.play();
            },100);
            return;
        }


    }
   if([...box].every(b=>b.textContent !=="")){
        setTimeout(()=>{
            banner.style.display="block";
            winnerName.textContent="Draw!";
            quack.play();
        },150);
    }
 
}

function popupWinner(a,b,c){
    box[a].style.background = "#28a745";
  box[b].style.background = "#28a745";
  box[c].style.background = "#28a745";
}

function disableAll(){
    box.forEach(b=> b.style.pointerEvents =  "none");
}

reset.addEventListener("click",()=>{
        resetAll();

    });
const resetScore = document.querySelector(".reset-score");

resetScore.addEventListener("click",()=>{
    xscore.textContent=0;
    oscore.textContent=0;

})

function resetAll(){
    box.forEach(b=>{
        b.style.pointerEvents="auto";
        b.textContent="";
b.classList.remove("x","o");
        b.style.background="";
        
});
    banner.style.display="none";
    flag=true;
    playerName.textContent="X";
}

