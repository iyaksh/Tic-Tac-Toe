let btn= document.querySelectorAll(".box");
let winningMessage= document.querySelector("p");

let count=0;
let turn="O";
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    
]


btn.forEach((b)=>{
    b.addEventListener("click",()=>{
         count=count+1;
         if(turn=="O"){
            b.innerText="O";
            turn="X";
         }else{
            b.innerText="X";
            turn="O";
         }
         b.disabled=true;
         let winner= checkWinner();   
         if(winner){
            showWinner(winner);
         }else if(count===9){
            showWinner("");
         }
             
})
})

document.querySelectorAll(".resetBtn").forEach((button)=>{
    button.addEventListener("click",()=>{
        resetGame();
        count=0;
    });
})


const checkWinner =()=>{
    for(let pattern of winPattern){
        if(btn[pattern[0]].innerText!="" && btn[pattern[1]].innerText!="" && btn[pattern[2]].innerText!=""){
        if(btn[pattern[0]].innerText===btn[pattern[1]].innerText && btn[pattern[1]].innerText===btn[pattern[2]].innerText){
             
            return btn[pattern[0]].innerText;  
        }
    }
}
return null;
}

function showWinner(winner){
    if(winner===""){
    document.querySelector(".msgContainer p").innerText="It's a draw";
    document.querySelector(".msgContainer").style.visibility="visible";
    }else{
    document.querySelector(".msgContainer p").innerText=`Congratulation! ${winner} is winner`;
    document.querySelector(".msgContainer").style.visibility="visible";}
}

function resetGame(){
    btn.forEach((b)=>{
        b.innerText="";
        b.disabled=false;
        
    })

    document.querySelector(".msgContainer").style.visibility="hidden";
}