let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector(".btn");;
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;
let turnO=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame=()=>{
    turnO=true;
    count=0;
    enableBox();
    msgContainer.classList.add("hide");
}
boxes.forEach(box => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    })
});
const gameDraw=()=>{
    msg.innerText="Game was a Draw.";
    msgContainer.classList.remove("hide");
    disableBox();
}
const disableBox=()=>{
    for (const box of boxes) {
        box.disabled=true;
        
    }};
    const enableBox=()=>{
        for (const box of boxes) {
            box.disabled=false;
            box.innerText="";
        }
    }
const showWinner=(winner)=>{
    msg.innerText=`Congratulations! The Winner is ${winner} `;
    msgContainer.classList.remove("hide");
    disableBox();

}
const checkWinner=()=>{
    for(let pattern of winPatterns){   
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1=== pos2 && pos2===pos3){
                console.log("winnn");
                showWinner(pos1);
                disableBox();
                return true;
            }
        } 
    
    }}
newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);