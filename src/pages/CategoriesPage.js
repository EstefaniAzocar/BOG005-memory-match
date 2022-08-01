
import { changePage } from '../helpers.js';

export default function CategoriesPage () {

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
}
