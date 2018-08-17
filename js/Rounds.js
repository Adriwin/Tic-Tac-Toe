class Rounds {
    constructor(show) {
        this.enable = false;
        this.show = show;
        this.rounds = 0;
        this.unveil(this.rounds);
    }

    // Added for reset purposes, when such button will emerge :d
    reset() {
        this.rounds = 0;        
    }

    // This method will be added to the gameWon, gameLost, gameTie
    roundUp() {
        this.rounds += 1;
        this.unveil(this.rounds);
    }

    unveil(rounds) {
        this.show.innerHTML = rounds;
    }

}

const countRounds = new Rounds(document.querySelector('#countNumber'));

const startRounds = document.getElementById('gameStart');
startRounds.addEventListener('click', () => countRounds.roundUp());