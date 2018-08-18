class Board{
    
    constructor(show) {
        this.enable = true;
        this.show = show;
    }
    reset() {
        console.log('reset');

    }
}

const game_board = new Board(document.getElementById("gameBoard"));

const reset_btn = document.getElementById("gameStart");
reset_btn.addEventListener("click", () => game_board.reset());

