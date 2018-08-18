class Board {

    constructor(show) {
        this.enable = true;
        this.show = show;
        this.square0 = document.getElementById("square0");
        this.square1 = document.getElementById("square1");
        this.square2 = document.getElementById("square2");
        this.square3 = document.getElementById("square3");
        this.square4 = document.getElementById("square4");
        this.square5 = document.getElementById("square5");
        this.square6 = document.getElementById("square6");
        this.square7 = document.getElementById("square7");
        this.square8 = document.getElementById("square8");
        this.html_circle = `<i class="far fa-circle"></i>`;
        this.html_cross = `<i class="fas fa-times"></i>`;
    }
    reset() {

        square0.innerHTML = "";
        square1.innerHTML = "";
        square2.innerHTML = "";
        square3.innerHTML = "";
        square4.innerHTML = "";
        square5.innerHTML = "";
        square6.innerHTML = "";
        square7.innerHTML = "";
        square8.innerHTML = "";
    }

}
const game_board = new Board(document.getElementById("gameBoard"));

const reset_btn = document.getElementById("gameStart");
reset_btn.addEventListener("click", () => game_board.reset());



