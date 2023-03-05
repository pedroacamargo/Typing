let secondsTPM = timer.seconds
let minutesTPM = timer.minutes
const tpmPlace = document.getElementById("tpm")
let average = []

class TPM {
    constructor() {
        this.secondsPassed = 0
        this.types = 0
        this.typesPerSecond = 0
        this.secondsForTypes = secondsTPM + (minutesTPM * 60)
    }

    increaseTypes() {
        this.types++
        console.log(this.types)
    }

    doAverage() {
        average.push(this.types)
        console.log(average)
    }

    printTPM() {
        let min = average.length 
        let types = average[average.length - 1]
        let doTPM = types / min
        tpmPlace.innerText = (doTPM).toFixed(2)
    }
}

let typesPerSecond = new TPM()