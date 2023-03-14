// array with the words that will be drawed
let wordsDataBasePT = ["Brasil","Portugal","França","Corcunda","bruh","Boas","Constitucional","Abracadabra","Coração","Amor","Ursinho","Pikachu","Nerd","Corno","Conspiração","Minion","Incrível","Independentemente","Garrafa","Água","Teclado","Escrever","Caneta","Oitavo","Bom","Banco","Patifaria","Caso","Paralelepípedo","Espelho","Mouse","Biscoito","Uivo","Chapéuzão","Construção","Moniz","PC","Computador","Boi","Compatriota","Xavier","Zimbábwe","Celular",'Esdrúxulo', 'Xenofobia', 'Quimera', 'Paradigma', 'Idiossincrasia', 'Paradoxo', 'Efêmero', 'Dissecação', 'Antítese', 'Procrastinação', 'Hipotético', 'Ambiguidade', 'Subjetividade', 'Proeminente', 'Anacrônico', 'Meticuloso', 'Retórica', 'Ludibriar', 'Dissonância', 'Anátema', 'Arquipélago', 'Bambolê', 'Cavalaria', 'Devoção', 'Esfinge', 'Fascinante', 'Gastronomia', 'Hipopótamo', 'Ilusão', 'Jazz', 'Karatê', 'Lavanda', 'Macaco', 'Nebulosa', 'Oportunidade', 'Pérola', 'Queijo', 'Recanto', 'Sorvete', 'Tangerina', 'Ultrassom', 'Vitória', 'Xadrez', 'Zebra', 'Alegria', 'Barracão', 'Céu', 'Desafio', 'Empatia', 'Felicidade', 'Girassol', 'Horizonte', 'Inocência', 'Jardineiro', 'Kilômetro', 'Luminoso', 'Museu', 'Nuvem', 'Óculos', 'Piano', 'Quintal', 'Realidade', 'Saudade', 'Tranquilidade', 'Unicórnio', 'Vivacidade', 'Xícara', 'Zangado', 'Ancestral', 'Bandeira', 'Caleidoscópio', 'Democracia', 'Elegante', 'Folclore', 'Geração', 'Hemisfério', 'Imagem', 'Juramento', 'Kafkiano', 'Liberdade', 'Montanha', 'Nadar', 'Oscilação', 'Piscina', 'Qualidade', 'Relâmpago', 'Simplicidade', 'Temporada', 'União', 'Vagabundo', 'Xará', 'Zumbi', 'Aquarela', 'Bicicleta', 'Camaradagem', 'Dinamismo', 'Escalada', 'Fragrância', 'Gorila', 'Habitat', 'Ímpar', 'Juventude', 'Kombucha', 'Lagoa', 'Manifesto', 'Natureza', 'Organização', 'Paradigma', 'Queimada', 'Riqueza', 'Semente', 'Templo', 'Universidade', 'Varanda', 'Windsurf', 'Xenofobia', 'Ziguezague']

let wordsDataBaseEN = ["Abstemious", "Acquiesce", "Anomalistic", "Barricade", "Belligerent", "Boisterous", "Cacophony", "Capricious", "Castigate", "Circumlocution", "Compendious", "Conscientious", "Conundrum", "Corpulent", "Covetous", "Deleterious", "Demagogue", "Didactic", "Discombobulate", "Disparate", "Ebullient", "Egregious", "Endemic", "Equanimity", "Evanescent", "Exacerbate", "Exculpate", "Expedite", "Fastidious", "Feckless", "Flagrant", "Fractious", "Garrulous", "Gregarious", "Hackneyed", "Histrionic", "Idiosyncrasy", "Ignominious", "Illicit", "Impecunious", "Imperturbable", "Impetuous", "Incontrovertible", "Indolent", "Inexorable", "Inimical", "Intransigent", "Inveterate", "Irascible", "Jettison", "Juxtapose", "Lachrymose", "Laconic", "Largesse", "Loquacious", "Lugubrious", "Magnanimous", "Malfeasance", "Malevolent", "Mellifluous", "Mendacious", "Mercurial", "Misanthrope", "Mitigate", "Nefarious", "Nonplussed", "Obdurate", "Obfuscate", "Obsequious", "Onus", "Opulent", "Ostensible", "Panacea", "Paradigm", "Parsimony", "Penchant", "Perfunctory", "Perspicacious", "Pertinacious", "Pervasive", "Petulant", "Platitude", "Plethora", "Polemic", "Portent", "Predilection", "Propensity", "Prosaic", "Pugnacious", "Querulous", "Quixotic", "Rancor", "Recalcitrant", "Recondite", "Refulgent", "Remuneration", "Repudiate", "Resilient", "Sagacious", "Salubrious", "Sanguine", "Scurrilous", "Spurious", "Staid", "Strident", "Superfluous", "Surreptitious", "Sycophant", "Taciturn", "Tantamount", "Tenuous", "Timorous", "Truculent", "Ubiquitous", "Umbrage", "Unctuous", "Usurp", "Vacuous", "Venerable", "Vicissitude", "Vilify", "Vituperative", "Wheedle", "Wistful", "Zealous"]

const wordCompleted = new Audio("../multimedia/wordCompleted.mp3")
const nextWordPlace = document.getElementById("nextWord")
const stripsContainer = document.getElementById("strip-container")
const wordsPlace = document.getElementById("words")
const word = document.getElementById("words")
const strip1 = document.getElementById("strip1")
const strip2 = document.getElementById("strip2")
const strip3 = document.getElementById("strip3")
const strip4 = document.getElementById("strip4")
let wordsDataBase
let lang = "en-us"
let wordValue = word.innerHTML
let letters = -1
let lettersTyped = 0
let actualLetter = 0
let first = true // if it's the first word displaying
let nextWord
let actualWord

if (lang == "pt-br") {
  wordsDataBase = wordsDataBasePT
} else if (lang == "en-us") {
  wordsDataBase = wordsDataBaseEN
}

let rand = () => {
    return Math.floor(Math.random() * (wordsDataBase.length - 1))
}

function createWord() {
    // create a randomization to choose a random word in DB
    let randomNumberForDataBase = rand()
    let randomNumberForDataBase2 = rand()
    
    // if the words are the same, reset the number
    while (randomNumberForDataBase2 == randomNumberForDataBase) {
      randomNumberForDataBase2 = 0
      randomNumberForDataBase2 = rand()
    }

    // just because length - 1 can give (-1) and doesn't exist a -1 index in array
    if (randomNumberForDataBase == -1) {
        randomNumberForDataBase = 0
        randomNumberForDataBase2 = 0
    }

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
    
    
    if (first == true) {
        nextWord = wordsDataBase[randomNumberForDataBase]
        actualWord = wordsDataBase[randomNumberForDataBase2]
        first = false
        nextWordPlace.innerText = nextWord
        wordToHTML(actualWord)
    } else {
        actualWord = nextWord
        nextWord = wordsDataBase[randomNumberForDataBase2]
        nextWordPlace.innerText = nextWord
    }

    return actualWord
}

// the whole word in html 
// will give the length of the words inside the array in pos i
// This function will put the word itself in the innerHTML
let letterID
function wordToHTML(actualWord) {
    for (let j = 0;j <= actualWord.length; j++) {
  
      let letter = actualWord.charAt(j)

      let wordN = document.createElement("span")
      wordN.classList = `letter-${j} letter`
      wordN.id = "letter" + j
      wordN.innerHTML = letter

      wordsPlace.appendChild(wordN)

      letters++
    }
}

let linuxNextLetter
let accents = "Áâíéáõã"
// when type any keyword from ur keyboard
function type(event) {

  // if the game didn't have started, this function is disabled
    if (started == false) {
      return 0;
    }
    
    let key = event.key
    wordsPlace.classList.remove("shake")
    // this variable will give the user log, telling the user OS
    let user = navigator.userAgent
    let letter = document.getElementById("letter" + actualLetter)
    
    // code to fix the problem with accents in Linux OS
    if (user.search("Linux") !== -1) {

        // if the letter is a portuguese letter with accent
          if (key == "Dead") {
            for (let i = 0; i< accents.length; i++) {
              if(letter.innerHTML == accents.charAt(i)) {linuxNextLetter = accents.charAt(actualLetter)}
            }
            console.log("linuxNextLetter -> " + linuxNextLetter)
            if (linuxNextLetter == "á" || linuxNextLetter == "ã" || linuxNextLetter == "â") {
              linuxNextLetter = "a"
            } else if (linuxNextLetter == "Á") {
              linuxNextLetter = "A"
            } else if (linuxNextLetter == "í") {
              linuxNextLetter = "i"
            } else if (linuxNextLetter == "é") {
              linuxNextLetter = "e"
            }
            return 0;
          }
          if (key == letter.innerHTML || linuxNextLetter == key) { // if it's not an accent
              letter.style.color = "green"
              lettersTyped++
              typesPerSecond.increaseTypes()
              if (actualLetter == letters) {
                actualLetter = -1
              }
              actualLetter++
              linuxNextLetter = ""
          } else {
              wordsPlace.classList.add("shake")
              if (key == "CapsLock" || key == "Shift" || key == "Alt") {
                letter.style.color = "white"
                wordsPlace.classList.remove("shake")
              } else {
                letter.style.color = "red"  
              }
          }
      } else { // others OS besides Linux
          if (key == letter.innerHTML) {
            letter.style.color = 'green'
            lettersTyped++
            typesPerSecond.increaseTypes()
            // if typed the whole word, finish the next for loop and print another word to type
            if (actualLetter == letters) {
               actualLetter = -1
            }
            actualLetter++

            // stats
            lettersTyped_Stats++


        } else {
            wordsPlace.classList.add("shake")
            if (key == "CapsLock" || key == "Shift" || key == "Dead") {
                letter.style.color = 'white'
                wordsPlace.classList.remove("shake")
            } else {
                letter.style.color = 'red'
            }
        }
    }
    

    // if the word is completed, reset everything
    if (lettersTyped == letters) {
        if (sound == true) {
            wordCompleted.play()
        }
        let actualWord2 = createWord()
        actualLetter = 0
        lettersTyped = 0
        wordToHTML(actualWord2)
        wordsTyped_Stats++

        // reset the animation when word is loaded
        document.getElementById("strip1").remove()
        document.getElementById("strip2").remove()
        document.getElementById("strip3").remove()
        document.getElementById("strip4").remove()
    }
}
