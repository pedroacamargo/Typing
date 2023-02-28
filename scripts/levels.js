const h1 = document.getElementById("gameTitle")
let title = h1.innerText
let wait = 10
let i = 0
teste = "Typing Game"
console.log(teste.charAt(0))


console.log(title)
setInterval( () => {
    if (title.length > 0) {
        let lastChar = title.charAt(title.length - 1);
        title = h1.innerText.replace(lastChar, "")
        h1.innerText = title
        wait = 10
        i = 0
    } else if (title.length == 0) {
        if (wait == 0) {
            h1.innerText += teste.charAt(i)
            i++
            if (i == 11) {
                i = 0
                title = teste
            }   
        } else {
            wait --
            console.log(wait)
        }
    }
},150)