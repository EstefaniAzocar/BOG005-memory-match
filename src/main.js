/*...............  lo que tenian en el game.js  ........*/

import {renderCard} from './components/App.js';

// document.getElementById('root').appendChild(renderCard());

// console.log(document.getElementById('root'))


/*.... NOS LLEVE A LA SECCION DE ESCOGER CON QUIEN JUGAR ..... */

const playInit = document.querySelector('#button');
const homePage = document.querySelector('.gameStart')
const selectThemePage = document.querySelector('#selectTheme')

playInit.addEventListener('click', () => {
    homePage.classList.toggle('gameStart--hidden')
    selectThemePage.classList.toggle('gameTheme')
});

/*.... NOS LLEVE A LA SECCION DE ESCOGER CON QUIEN JUGAR ..... */

const marvelTheme = document.querySelector('#cardMarvel')
const PokemonTheme = document.querySelector('#cardPokemon')
const gamePage = document.querySelector('#game')

marvelTheme.addEventListener('click', toogleGamePage)

PokemonTheme.addEventListener('click', toogleGamePage)

function toogleGamePage () {
    selectThemePage.classList.remove('gameTheme')
    gamePage.classList.toggle('game')
    document.getElementById('root').appendChild(renderCard());
}

