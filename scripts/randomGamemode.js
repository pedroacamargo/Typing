// array with the words that will be drawed
let wordsDataBase = ["Pikachu","Nerd","Corno","Conspiração","Minion","Incrível","Independentemente","Garrafa","Água","Teclado","Escrever","Caneta","Oitavo","Bom","Banco","Patifaria","Caso","Paralelepípedo"]


const stripsContainer = document.getElementById("strip-container")
const wordsPlace = document.getElementById("words")
const word = document.getElementById("words")
const strip1 = document.getElementById("strip1")
const strip2 = document.getElementById("strip2")
const strip3 = document.getElementById("strip3")
const strip4 = document.getElementById("strip4")
let wordValue = word.innerHTML
let letters = -1
let lettersTyped = -1
let actualLetter = 0
console.log(document.getElementById("letter8")) // null

function createWord() {

    // create a randomization to choose a random word in DB
    let randomNumberForDataBase = Math.round(Math.random() * wordsDataBase.length - 1)

    // just because length - 1 can give (-1) and doesn't exist a -1 index in array
    if (randomNumberForDataBase == -1) {
        randomNumberForDataBase = 0
    }
    console.log(randomNumberForDataBase)


    // if already exists any word in the words container, it will remove it
    if (wordsPlace.innerHTML.length > 0) {
        wordsPlace.innerHTML = ""
        letters = -1
    }

    // This is for the animation every time the word is loaded
    let strip1 =  document.createElement("div")
    strip1.className = "strip1"
    strip1.id =  "strip1"
    stripsContainer.appendChild(strip1)
    let strip2 =  document.createElement("div")
    strip2.className = "strip2"
    strip2.id =  "strip2"
    stripsContainer.appendChild(strip2)
    let strip3 =  document.createElement("div")
    strip3.className = "strip3"
    strip3.id =  "strip3"
    stripsContainer.appendChild(strip3)
    let strip4 =  document.createElement("div")
    strip4.className = "strip4"
    strip4.id =  "strip4"
    stripsContainer.appendChild(strip4)

    wordsPlace.className = ""

    // will give the length of the words inside the array in pos i
    for (let j = 0;j < wordsDataBase[randomNumberForDataBase].length; j++) {

        let letter = wordsDataBase[randomNumberForDataBase].charAt(j)
        let wordN = document.createElement("span")
        wordN.classList = `letter-${j} letter`
        wordN.id = "letter" + j
        wordN.innerHTML = letter

        wordsPlace.appendChild(wordN)

        letters++
    }

    
}




// when type any keyword from ur keyboard
function type(event) {
    let key = event.key
    console.log(key)
    wordsPlace.classList.remove("shake")
    

    let letter = document.getElementById("letter" + actualLetter)
    if (key == letter.innerHTML) {
        letter.style.color = 'green'
        lettersTyped++

        // if typed the whole word, finish the next for loop and print another word to type
        if (actualLetter == letters) {
            actualLetter = -1
        }

        actualLetter++
    } else {
        wordsPlace.classList.add("shake")
        if (key == "CapsLock" || key == "Shift" || key == "Dead") {
            letter.style.color = 'white'
            wordsPlace.classList.remove("shake")
        } else {
            letter.style.color = 'red'
        }
    }

    

    // if the word is completed, reset everything
    if (lettersTyped == letters) {
        createWord()
        actualLetter = 0
        lettersTyped = -1

        // reset the animation when word is loaded
        document.getElementById("strip1").remove()
        document.getElementById("strip2").remove()
        document.getElementById("strip3").remove()
        document.getElementById("strip4").remove()
    }

    console.log(key)
}