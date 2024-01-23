
let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset_btn");
let msg_para = document.querySelector(".msg_box");

let playerX  = true; 

const WinPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// Calling Event listeners
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(playerX){        // player turn
            box.innerText = "X";
            playerX = false;
        }
        else{
            box.innerText = "0";
            playerX = true;
        }
        box.disabled = true;
        
        checkWin();
    });
});

const checkWin = () => {
    
    for(let pattern of WinPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;    

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
}

const showWinner = (winner) => {
    diable();
    msg_para.innerText = `Congrats! Winner is "${winner}"`;
    msg_para.classList.remove("hide");
}

// After getting our 1st winner we have to disabled the entries
const diable = () => {
    for(box of boxes){
        box.disabled = true;
    }
} 
const enable = () => {
    for(box of boxes){
        box.disabled = false;
    }
}

// reset btn
reset_btn.onclick = () =>{
    // msg refresh
    msg_para.classList.add("hide");

    // box refresh
    enable();
    for(box of boxes){
        box.innerText = "";
    }

    
}