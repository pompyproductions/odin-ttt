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
    ];
    const board = [];
    const boardElement = document.querySelector(".game-board");
    for (let i = 0; i < 9; i++) {
        currentBoard.push(Cell());
    };

    let nextPlayer = 0;
    let currentTurn = 0;
    const getPlayerSymbol = () => {
        return players[nextPlayer].symbol
    }

    return {
        boardElement,
    }

})();

// event handlers

function handleBoardClick(e) {
    if (e.target.classList.contains("game-square")) {
        const cellNumber = Number(e.target.getAttribute("data-cell"));
        if (!Board.getCell(cellNumber)) {
            // Board.setCell(cellNumber, Game.) CONTINUE HERE
        }
        console.log({
        })
    }
}

Board.domElement.addEventListener("click", handleBoardClick);