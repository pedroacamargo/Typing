const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

class Timer {
    constructor() {
        this.minutes = 0
        this.seconds = 59
        this.running = true
    }

    reset() {
        this.minutes = 2
        this.seconds = 59
        this.running = true
        this.update()
    }

    update() {
        minutes.innerText = this.minutes
        if(this.seconds < 10 && this.seconds >= 0) {
            seconds.innerText = "0" + this.seconds
        } else {
            seconds.innerText = this.seconds
        }
    }

    start() {
        if (this.running) {
            this.seconds--
            typesPerSecond.secondsPassed++

            // if passed 60 seconds, the array "average" will be incremented by the actual types
            if (typesPerSecond.secondsPassed == 60) {
                typesPerSecond.doAverage()
                typesPerSecond.secondsPassed = 0
            }
            
            if (this.seconds == 0) {
                if (this.minutes == 0 && this.seconds == 0) {
                    
                    this.running = false

                    // if the timer ends and the seconds passed was below 60,by default, will be added the amount of seconds left to make the final average.
                    if (typesPerSecond.secondsPassed < 60) {
                        typesPerSecond.types += (60 - typesPerSecond.secondsPassed)
                    }
                    
                    

                    typesPerSecond.doAverage()
                    typesPerSecond.printTPM()
                    this.minutes = 0
                    this.seconds = 0
                } else {
                    this.seconds = 59
                    this.minutes--
                }
            }

        } else {
            this.minutes = 0
            this.seconds = 0
        }
    }
}

let timer = new Timer()
timer.update()

setInterval( () => {
    timer.start()
    timer.update()
},1000)

