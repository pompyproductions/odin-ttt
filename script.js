console.log("hey");

// factories

function Player(name, symbol) {
    return {name, symbol, score: 0}
}

function Cell() {
    let content = "";
    const setContent = (player) => {
        content = player.symbol;
    }
    const getContent = () => {
        return content;
    }
    return {
        setContent,
        getContent
    }
}

// modules

const Game = (function () {
    const players = [
        Player("pompy", "\u{25C6}"),
        Player("jeff", "&#9672;")
    ];
    const board = [];
    const boardElement = document.querySelector(".game-board");
    for (let i = 0; i < 9; i++) {
        board.push(Cell());
    };
    const setCell = (cellNo) => {
        if (board[cellNo].getContent()) return false;
        console.log(cellNo);
        board[cellNo].setContent(players[nextPlayer]);
        console.log(boardElement.children[cellNo]);
        boardElement.children[cellNo].textContent = players[nextPlayer].symbol;
        return true;

    }

    let nextPlayer = 0;
    let currentTurn = 0;
    const getPlayerSymbol = () => {
        return players[nextPlayer].symbol
    }


    return {
        setCell,
        board,
        boardElement
    }

})();

// event handlers

function handleBoardClick(e) {
    if (e.target.classList.contains("game-square")) {
        const cellNo = Number(e.target.getAttribute("data-cell"));
        const symbol = Game.setCell(cellNo);
        if (symbol) {
            alert("set cell");
        } else {
            alert("already occupied")
        }
        console.log({
        })
    }
}

Game.boardElement.addEventListener("click", handleBoardClick);