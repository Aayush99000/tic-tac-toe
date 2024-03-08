const Static_Board =[
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];
let board =new Array(...Static_Board);
let currentPlayer = "X";
let done =false;

const Status =document.getElementById("currentPlayerStatus");
const cells =document.querySelectorAll(".game-cell");

cells.forEach(element => {
    element.addEventListener('click',function(){
        const attributeValue =this.getAttribute("data-id");
        if(!attributeValue)return;
        makeMove(attributeValue);
    });
});

function makeMove(index){
    if(done)return;
    if(board[index]=== ""){
        board[index]= currentPlayer;
        renderBoard();
    }
    if (checkWin(currentPlayer)){
        done =true;
    }
    else if(board.every((cell)=> cell !== "")){
        alert("Its a tie!!");
        //reset board
    }
    else{
        currentPlayer = currentPlayer=== "X" ? "O" : "X" ;
    }
    if(checkWin(currentPlayer)){
        Status.textContent =`${currentPlayer}  Win!!`;
    }
    else{
        Status.textContent =`Current Player : ${currentPlayer}`;
    }
}

function renderBoard(){
    cells.forEach((cell ,index)=>{
        cell.textContent =board[index];
    });
}

function checkWin(player){
    const WinCondition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    return WinCondition.some((com)=>{
        return com.every((index)=> board[index]=== player);
    });
}