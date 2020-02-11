const montyHall = (doSwitch) => {
    const boxes = [0, 1, 2];

    //Generate a random number between 0 and 2
    const moneyIn = Math.floor(Math.random() * boxes.length);

    //Generate a random number between 0 and 2
    const selectedBox = Math.floor(Math.random() * boxes.length);

    //Create a new array excluding moneyIn and selectedBox
    const remainingBoxes = boxes.filter((box) => box !== moneyIn && box !== selectedBox);

    //Pick a random box from the remaining boxes
    const revealedBox = remainingBoxes[Math.floor(Math.random() * remainingBoxes.length)];

    if(doSwitch) {
        //If we switch, the money can't be in the selectedBox and revealedBox so pick the box that is left
        if(moneyIn === boxes.find((box) => box !== selectedBox && box !== revealedBox)) {
            return true;
        }
    } else { //If we stick to our option the money should be in the selectedBox in order to win
        if(moneyIn === selectedBox) {
            return true;
        }
    }
}

const simulateMontyHall = (doSwitch, trials) => {
    if(trials && trials > 0) {
        let gamesWon = 0;

        for(let i = 0; i < trials; i++) {
            if(montyHall(doSwitch)) {
                gamesWon += 1;
            }
        }

        return gamesWon;
    }
}

export default simulateMontyHall