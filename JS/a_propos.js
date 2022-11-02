const h5 = document.querySelector('h5')

const feu = `Feu de brousse, incendie se propageant sur une étendue boisée. D'origine naturelle, humaine ou involontaire, c'est un danger pour l'environnement.`

let i = 0;
const intervalle = setInterval(() => {
    h5.innerHTML += feu[i]
    i++
    if(i >= feu.length) {
        clearInterval(intervalle)
    }
}, 150) 