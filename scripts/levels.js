const h1 = document.getElementById("gameTitle")
const pressMsg = document.getElementById("press")
const menu = document.getElementById("menu")
let title = h1.innerText
let wait = 10
let i = 0
let nome = "Typing Game"
let complete = false
let options = 3


console.log(title)
setInterval( () => {
    
    // if the whole word is complete, pause
    if (complete == true) {
        if (wait == 0) {
            complete = false
        } else {
            wait--
        }
    } else if (title.length > 0) { // funtion to del letter by letter
        let lastChar = title.charAt(title.length - 1);
        title = h1.innerText.replace(lastChar, "")
        h1.innerText = title
        wait = 10
        i = 0
    } else if (title.length == 0) { // function to add letter by letter
        if (wait == 0) {
            h1.innerText += nome.charAt(i)
            i++
            if (i == 11) {
                i = 0
                title = nome
                complete = true
                wait = 20
            }   
        } else {
            wait--
        }
    }
},150)

let selected = 1

function showMenu(event) {
    let key = event.key;
    key = key.toUpperCase()
    console.log(key)
    
    if (key == 'S') {
        menu.style.display = "block"
        pressMsg.style.display = "none"
    } else if (key == "ARROWUP" || key == "ARROWDOWN") {
        switch (key) {
            case "ARROWUP":
                if (selected == 1) {
                    selected = 1
                } else {
                    selected -= 1
                    
                    let opt = document.getElementById("img" + selected)
                    let cleanopt = document.getElementById("img" + (selected + 1))
                    opt.style.display = "block"
                    cleanopt.style.display = "none"
                    console.log(selected)
                    
                }
                break;
            case "ARROWDOWN":
                if (selected == options) {
                    return 0;
                } else {
                    console.log(selected)
                    let opt = document.getElementById("img" + (selected + 1))
                    let cleanopt = document.getElementById("img" + selected)
                    opt.style.display = "block"
                    cleanopt.style.display = "none"
                    selected++
                }
                break;
        }        
    } else if (key == "ENTER") {
        switch (selected) {
            case 1:
                window.location.href = 'main.html'
                break
            case 2:
                window.location.href = '#'
                break
            case 3:
                menu.style.display = "none"
                pressMsg.style.display = "block"
                break
        }
    } else {
        return 1;
    }
}

// 1

// 2

// ARROWUP 
