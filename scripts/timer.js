const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

class Timer {
    constructor() {
        this.minutes = 0
        this.seconds = 3
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
            
            if (this.minutes == 0 && this.seconds == 1) {
                this.running = false
            }
            
            if (this.seconds == 0) {
                this.minutes--
                this.seconds = 59
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
    timer.update()
    timer.start()
},1000)

