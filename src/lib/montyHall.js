const montyHall = (doSwitch) => {
    const options = [0, 1, 2];

    const carIn = Math.floor(Math.random() * options.length);

    const selectedOption = Math.floor(Math.random() * options.length);

    const revealedOption = options.find((option) => option !== carIn && option !== selectedOption);

    if(doSwitch) {
        if(carIn === options.find((option) => option !== selectedOption && option !== revealedOption)) {
            return true;
        }
    } else {
        if(carIn === selectedOption) {
            return true;
        }
    }
}

const simulateMontyHall = (doSwitch, trials) => {
    if(trials) {
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