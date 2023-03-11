let lettersTyped_Stats = 0
let wordsTyped_Stats = 0
let timePlayed_Stats = 0 // in seconds


function loadStats() {
    if (localStorage.getItem("lettersTyped") == null || localStorage.getItem("wordsTyped") == null || localStorage.getItem("timePlayed") == null || localStorage.getItem("TPM") == null) {
        localStorage.setItem("lettersTyped", 0)
        localStorage.setItem("timePlayed", 0)
        localStorage.setItem("wordsTyped", 0)
        localStorage.setItem("TPM", "Soon...")
    }

    printStats()
}

function printStats() {
    const tpmST = document.getElementById("tpmSt")
    const timePlayedST = document.getElementById("tP")
    const wordsTypedST = document.getElementById("wT")
    const lettersTypedST = document.getElementById("lT")

    tpmST.innerText = localStorage.getItem("TPM")
    timePlayedST.innerText = localStorage.getItem("timePlayed")
    wordsTypedST.innerText = localStorage.getItem("wordsTyped")
    lettersTypedST.innerText = localStorage.getItem("lettersTyped")
}

function resetActualStats() {
    lettersTyped_Stats = 0
    wordsTyped_Stats = 0
    timePlayed_Stats = 0
}

function updateLocalStorage() {
    let letters_st = Number(localStorage.getItem("lettersTyped"))
    let words_st = Number(localStorage.getItem("wordsTyped"))
    let time_st = Number(localStorage.getItem("timePlayed"))
    // let tpm_st = localStorage.getItem("TPM")

    localStorage.setItem("lettersTyped", letters_st+ lettersTyped_Stats)
    localStorage.setItem("wordsTyped", words_st + wordsTyped_Stats)
    localStorage.setItem("timePlayed", time_st + timePlayed_Stats)
}