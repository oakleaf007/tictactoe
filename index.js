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


const banner = document.getElementById("banner");
const reset = document.querySelectorAll(".reset");
const winnerName = document.getElementById("winner");

const combinations=[
        [0,1,2], [3,4,5], [6,7,8], [0,3,6],[1,4,7],
        [3,5,8],[0,4,8], [2,4,6]
    ];

function winner(){
    combinations.forEach(i=>{
        let[a,b,c] = i;


    if(box[a].textContent !== "" &&
         box[a].textContent === box[b].textContent &&
        box[b].textContent === box[c].textContent){
            popupWinner(a,b,c);
            disableAll();
            setTimeout(()=>{
                banner.style.display="block";
                winnerName.textContent= box[a].textContent;
            },200);
            return;
        }
    });

    if([...box].every(b=>b.textContent !=="")){
        setTimeout(()=>alert("Draw!"),500);
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

