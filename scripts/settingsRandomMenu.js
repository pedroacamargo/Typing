let options = 2
let selected = 1
let opened = false
let started = false // if the game started

function selectOption(event,given = event) {
    let key
    if (given == event) {
        key = event.key
    } else {
        key = given
    }
    key = key.toUpperCase()

    // if I want to optimize this, replace the numbers by the variable options
    if (opened == false && (key == "ARROWUP" || key == "ARROWDOWN")) {
        if (selected == 1 && key == "ARROWUP") {
            selected = 1
        } else if (selected == 2 && key == "ARROWDOWN"){
            selected = 2
        } else if (selected != 1 && key == "ARROWUP") {
            selected--
            let arrowDel = document.getElementById("img" + (selected + 1))
            let arrowAdd = document.getElementById("img" + selected)
            arrowDel.style.display = "none"
            arrowAdd.style.display = "block"
        } else if (selected != 2 && key == "ARROWDOWN") {
            selected++
            let arrowDel = document.getElementById("img" + (selected - 1))
            let arrowAdd = document.getElementById("img" + selected)
            arrowDel.style.display = "none"
            arrowAdd.style.display = "block"
        }
    } else if (key == "ENTER") {
        if (opened == false) {
            document.getElementById("container" + selected).style.display = "flex"
            document.getElementById("img" + selected).style.display = "none"
            opened = true
        } else if (opened == true) {
            document.getElementById("container" + selected).style.display = "none"
            document.getElementById("img" + selected).style.display = "block"
            opened = false
        }
    }
}