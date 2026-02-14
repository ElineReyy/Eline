// game.js

class Game {
    constructor() {
        this.players = [];
        this.scoreBoard = {};
    }

    addPlayer(name) {
        this.players.push(name);
        this.scoreBoard[name] = 0;
    }

    removePlayer(name) {
        const index = this.players.indexOf(name);
        if (index > -1) {
            this.players.splice(index, 1);
            delete this.scoreBoard[name];
        }
    }

    // Method for one round of the game
    playRound(winner) {
        if (this.scoreBoard[winner] !== undefined) {
            this.scoreBoard[winner] += 1; // Increment score
        }
    }

    displayScores() {
        console.log("Scores:");
        for (const player in this.scoreBoard) {
            console.log(`${player}: ${this.scoreBoard[player]}`);
        }
    }

    displayLeaderboard() {
        const sortedScores = Object.entries(this.scoreBoard).sort((a, b) => b[1] - a[1]);
        console.log("Leaderboard:");
        sortedScores.forEach(([name, score]) => {
            console.log(`${name}: ${score}`);
        });
    }
}

// Solo and multiplayer game logic
const game = new Game();

game.addPlayer('Player1');
game.addPlayer('Player2');

game.playRound('Player1');
game.playRound('Player2');
game.playRound('Player1');

game.displayScores();
game.displayLeaderboard();
