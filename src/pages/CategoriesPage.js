
import {renderCard} from '../components/App.js';
import { changePage } from '../helpers.js';
import { Game, Levels } from '../gameData.js';

export default function CategoriesPage () {

    console.log('execution categoriesPage')

    const categoriesContainer = document.querySelector('.gameTheme_container')

    categoriesContainer.innerHTML = `
        <div class="gameTheme_text">
            <h2 class="text gameTheme--textTittle">Con Quién Quieres Jugar?</h2>
        </div>
        
        <div class="gameTheme_containerCards">
            <div class="gameTheme_card gameTheme--cardMarvel card" id="cardMarvel">
                <img class="gameTheme_cardImg" src="../img/logoMarvel.png" alt="">
            </div>
            <div class="gameTheme_card gameTheme--cardPokemon card" id="cardPokemon" >
                <img class="gameTheme_cardImg" src="../img/logoPokemon.png" alt="" >
            </div>
        </div>
    `

    const cards = document.querySelectorAll('.gameTheme_card')
    

    cards.forEach(card=>{
        // console.log(card)
        card.addEventListener('click',()=>{
            changePage('game')
        })
    })

    // const gamePage = document.querySelector('#game')

    // marvelTheme.addEventListener('click', toogleGamePage)

    // PokemonTheme.addEventListener('click', toogleGamePage)

    // function toogleGamePage () {
    //     selectThemePage.classList.remove('gameTheme')
    //     gamePage.classList.toggle('game')
    //     document.getElementById('root').appendChild(renderCard());
    // }
}
