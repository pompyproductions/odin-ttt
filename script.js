console.log("hey");

// factories

function Player(name, symbol) {
    return {name, symbol, score: 0}
}

function Cell() {
    const setContent = (player) => {
        this.content = player.symbol;
    }
    const getContent = () => {
        return this.content;
    }
    return {
        content: "",
        setContent,
        getContent
    }
}

// modules

const Game = (function () {
    const players = [
        Player("pompy", "&#9671;"),
        Player("jeff", "&#9672;")
    ]
    let nextPlayer = 0;
    let currentTurn = 0;

})();

const Board = (function () {
    const domElement = document.querySelector(".game-board");
    const currentBoard = [];
    for (let i = 0; i < 9; i++) {
        currentBoard.append(Cell());
    }
    const placeSymbol = (sym) => {
        return sym;
    }
    const getCell = (cell) => {
        return currentBoard[cell];
    }
    const setCell = (cell, player) => {
        getCell(cell); //CONTINUE HERE

    }
    return {
        getCell,
        setCell
    }
})();

// event handlers

function handleBoardClick(e) {
    if (e.target.classList.contains("game-square")) {
        const cellNumber = Number(e.target.getAttribute("data-cell"));
        if (!Board.getCell(cellNumber)) {

        }
        console.log({
        })
    }
}

Board.domElement.addEventListener("click", handleBoardClick);