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

const banner = document.getElementById("banner");
const reset = document.querySelectorAll(".reset");
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

reset.forEach((r)=>{
    r.addEventListener("click",()=>{
        resetAll();

    })
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

