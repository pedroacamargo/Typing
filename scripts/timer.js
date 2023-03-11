const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const gameOver = document.getElementById("endGameContainer")
const main = document.getElementById("main-container")
const timerContainer = document.getElementById("timer")
const countdownNumber = document.getElementById("countdown-number")
const countdown = document.getElementById("countdown")

class Timer {
    constructor() {
        this.minutes = 0
        this.seconds = 10
        this.running = true
        this.countdown = 2 // The start game countdown (needs to be 1 value less than the value you want to put as a countdown)
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

    resetCountdown() {
        this.countdown = 3
    }

    start() {
        if (this.countdown >= 0) {
            countdownNumber.innerText = this.countdown
            this.countdown-- 
            if (this.countdown == -1) {
                main.style.display = "flex"
                timerContainer.style.display = "block"
                countdown.style.display = "none"
            }     
        } else {
            if (this.running) {
                // stats
                timePlayed_Stats++


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
                        started = false
    
                        // if the timer ends and the seconds passed was below 60,by default, will be added the amount of seconds left to make the final average.
                        if (typesPerSecond.secondsPassed < 60) {
                            typesPerSecond.types += (60 - typesPerSecond.secondsPassed)
                        }
                        
                        updateLocalStorage()
                        resetActualStats()
    
                        typesPerSecond.doAverage()
                        typesPerSecond.printTPM()
                        this.minutes = 0
                        this.seconds = 0
                        gameOver.style.display = "flex"
                        main.style.display = "none"
                        timerContainer.style.display = "none"
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
}

let timer = new Timer()
timer.update()

const settingsMenu = document.getElementById("startGameMenu")

function startGame() {
    settingsMenu.style.display = "none"
    countdownNumber.classList.add("increase")
    setInterval( () => {
        timer.start()
        timer.update()
    },1000)
}



