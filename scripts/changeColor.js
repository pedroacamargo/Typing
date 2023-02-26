let wordsDataBase = ["Pikachu","Nerd","Corno","Conspiração","Minion","Incrível","Independentemente"]
const wordsPlace = document.getElementById("words")
const word = document.getElementById("words")
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

    for (let i = 0;i <= actualLetter;i++) {
        let letter = document.getElementById("letter" + i)
        if (key == letter.innerHTML) {
            letter.style.color = 'green'
            lettersTyped++

            // if typed the whole word, finish the next for loop and print another word to type
            if (actualLetter == letters) {
                actualLetter = -1
            }

            actualLetter++
        } 
    }

    // if the word is completed, reset everything
    if (lettersTyped == letters) {
        createWord()
        actualLetter = 0
        lettersTyped = -1
    }

    console.log(key)
}