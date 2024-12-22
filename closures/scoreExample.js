let score = 0;

function createGame() {
    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore() {
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`Final score = ${getScore()} pnts`) // output = 8