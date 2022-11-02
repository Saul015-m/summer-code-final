const h1 = document.querySelector('h1')

const sitop = `STOP FEU DE BROUSSE`

let j = 0;
const espace = setInterval(() => {
    h1.innerHTML += sitop[j]
    j++
    if(j >= sitop.length) {
        clearInterval(espace)
    }
}, 150)