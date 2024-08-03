let box = document.querySelectorAll(".box");

let resetbtn = document.querySelector("#reset");

let newgame =document.querySelector("#newgame");

let msgcontainer = document.querySelector(".msgcontainer");

let msg = document.querySelector("#msg");
let turnO = true;



let winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame = () =>
    {
        turnO=true;
        enablebox();
        msgcontainer.classList.add("hide");
    };

box.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        if(turnO)
        {
            box.innerText ="O";
            turnO = false;
        }
        else{
            box.innerText ="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disablebox = ()=>
{
    for(let boxes of box ){
        boxes.disabled = true;
    }
};
const enablebox = ()=>
    {
        for(let boxes of box ){
            boxes.disabled = false;
            boxes.innerText="";
        }
    };
const showWinner = (winner)=>
{
    msg.innerText=`congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
};
const showDraw = () => {
    msg.innerText = "It's a draw!";
    msgcontainer.classList.remove("hide");
    disablebox();
};
const checkWinner = ()=>
{
    let isDraw = true;
    for(let pattern of winPatterns)
    {
        let pos1val= box[pattern[0]].innerText;
        let pos2val= box[pattern[1]].innerText;
        let pos3val= box[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos2val != ""){
            if(pos1val=== pos2val && pos2val === pos3val)
            {
                console.log("winner",pos1val);
                
                showWinner(pos1val);
            }
        }
    }
    box.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false;
        }
    });

    if (isDraw) {
        showDraw();
    }
};

newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);