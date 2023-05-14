// factories

function Player(name, symbol) {
    return { name, symbol, score: 0 };
}

function Cell() {
    let content = "";
    const setContent = (player) => {
        content = player.symbol;
    };
    const getContent = () => {
        return content;
    };
    return {
        setContent,
        getContent,
    };
}

// modules

const Game = (function () {
    const players = [Player("pompy", "\u{25C6}"), Player("jeff", "\u{25C7}")];
    const board = [];
    const boardElement = document.querySelector(".game-board");
    for (let i = 0; i < 9; i++) {
        board.push(Cell());
    }
    const setCell = (cellNo) => {
        if (board[cellNo].getContent()) return false;
        board[cellNo].setContent(players[nextPlayer]);
        boardElement.children[cellNo].textContent = players[nextPlayer].symbol;
        let isWin =
            checkRowWin(cellNo) ||
            checkColWin(cellNo) ||
            (cellNo % 2 ? false : checkDiagWin(cellNo));
        console.log(isWin)
        nextPlayer++;
        if (nextPlayer === 2) {
            nextPlayer = 0;
            currentTurn++;
        }
        return true;
    };
    function checkRowWin(cellNo) {
        const rowNo = Math.floor(cellNo / 3);
        const sym = board[cellNo].getContent();
        console.log(sym);
        return [
            board[rowNo * 3].getContent(),
            board[rowNo * 3 + 1].getContent(),
            board[rowNo * 3 + 2].getContent(),
        ].every((val) => val === sym);
    }
    function checkColWin(cellNo) {
        const sym = board[cellNo].getContent();
        return [
            board[(cellNo + 3) % 9].getContent(),
            board[(cellNo + 6) % 9].getContent(),
        ].every((val) => val === sym);
    }
    function checkDiagWin(cellNo) {
        const sym = board[cellNo].getContent();
        if (board[4].getContent() !== sym) return false;
        return (
            (board[0].getContent() === sym && board[8].getContent() === sym) ||
            (board[2].getContent() === sym && board[6].getContent() === sym)
        );
    }

    let nextPlayer = 0;
    let currentTurn = 0;
    const getPlayerSymbol = () => {
        return players[nextPlayer].symbol;
    };

    return {
        setCell,
        board,
        boardElement,
    };
})();

// event handlers

function handleBoardClick(e) {
    if (e.target.classList.contains("game-square")) {
        const cellNo = Number(e.target.getAttribute("data-cell"));
        Game.setCell(cellNo);
    }
}

Game.boardElement.addEventListener("click", handleBoardClick);
