let options = 3
let selected = 1
let opened = false
let started = false // if the game started
const portuguese = document.getElementById("portuguese")
const english = document.getElementById("english")
const buttonPlay = document.querySelector(".button")
const soundMixer = document.getElementById("volumeMixer")
let music = new Audio("multimedia/backgroundMusic.mp3")
let volume_px = 10
let settings = false
let settingsSelected = 1
let settingsOptions = 2
let sound = true



let loadMusic = () => {
    music.play()
    music.volume = volume_px/100
}

// each 190 secs, the music will replay :)
setInterval(loadMusic(), 190000);

// function to select the options at main menu
function selectOption(event,given = event) {
    let key
    if (given == event) {
        key = event.key
    } else {
        key = given
    }
    key = key.toUpperCase()

    if (settings == true) { // IF THE SETTINGS OPTION IS OPENED
        const actual = document.getElementById("imgsets" + settingsSelected)
        if (key == "ARROWUP") { // NAVIGATE UP

            if (settingsSelected > 1) {
                actual.style.display = "none"
                document.getElementById("imgsets" + (settingsSelected - 1)).style.display = "inline-block"
                settingsSelected--
            }
        } else if (key == "ARROWDOWN") { // NAVIGATE DOWN

            if (settingsSelected < settingsOptions) {
                actual.style.display = "none"
                document.getElementById("imgsets" + (settingsSelected + 1)).style.display = "inline-block"
                settingsSelected++
            }
        } else if (key == "ESCAPE") { // CLOSE THE MENU

            document.getElementById("container" + selected).style.display = "none"
            document.getElementById("img" + selected).style.display = "block"
            opened = false
            if (selected == 2) {
                settings = false
            }
        } else if (settingsSelected == 1) { // VOLUME MIXER

            if (key == "ARROWRIGHT" && volume_px < 100) {
                volume_px += 10;
                music.volume = volume_px/100
                soundMixer.style.left = volume_px + "px"
            } else if (key == "ARROWLEFT" && volume_px > 0) {
                volume_px -= 10;
                music.volume = volume_px/100
                soundMixer.style.left = volume_px + "px"
            }
        } else if (settingsSelected == 2) {

            if (key == "ARROWRIGHT") {
                lang = "en-us"
                english.style.border = "3px solid green"
                portuguese.style.border = "2px solid red"
                wordsDataBase = wordsDataBaseEN
                createWord()
                wordToHTML(wordsDataBase[rand()])
            } else if (key == "ARROWLEFT") {
                lang = "pt-br"
                portuguese.style.border = "2px solid green"
                english.style.border = "2px solid red"
                wordsDataBase = wordsDataBasePT
                createWord()
                wordToHTML(wordsDataBase[rand()])
            }
        }



    } else if (opened == false && (key == "ARROWUP" || key == "ARROWDOWN")) {
        if (selected == 1 && key == "ARROWUP") {
            selected = 1
        } else if (selected == options && key == "ARROWDOWN"){
            selected = options
        } else if (selected != 1 && key == "ARROWUP") {
            if (selected == 3) {
                buttonPlay.classList.remove("hover-btn")
                let arrowAdd = document.getElementById("img" + (selected - 1))
                arrowAdd.style.display = "block"
            }
            selected--
            if (selected == 2) {
                let arrowAdd = document.getElementById("img" + selected)
                arrowAdd.style.display = "block" 
            } else {
                let arrowAdd = document.getElementById("img" + selected)
                let arrowDel = document.getElementById("img" + (selected + 1))
                arrowDel.style.display = "none"
                arrowAdd.style.display = "block" 
            }
        } else if (selected != options && key == "ARROWDOWN") {
            selected++
            if (selected < 3) {
                let arrowDel = document.getElementById("img" + (selected - 1))
                let arrowAdd = document.getElementById("img" + selected)
                arrowDel.style.display = "none"
                arrowAdd.style.display = "block"
            } else {
                let arrowDel = document.getElementById("img" + (selected - 1))
                arrowDel.style.display = "none"
                buttonPlay.classList.add("hover-btn")
            }
        }
    } else if (key == "ENTER") {
        if (selected == 3) {
            started = true
            startGame()
            return 0;
        }
        if (opened == false) {
            document.getElementById("container" + selected).style.display = "flex"
            document.getElementById("img" + selected).style.display = "none"
            opened = true
            if (selected == 2) {
                settings = true
            }
        } 
    } else if (key == "ESCAPE") {
        document.getElementById("container" + selected).style.display = "none"
        document.getElementById("img" + selected).style.display = "block"
        opened = false
        if (selected == 2) {
            settings = false
        }
    }
}