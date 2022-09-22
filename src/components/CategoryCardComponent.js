import { Game } from "../gameData.js"
import { changePage } from "../helpers.js"

function CategoryCardComponent (category){

    const cardCategory = document.createElement('div')
    cardCategory.className = 'gameTheme_card'
    cardCategory.setAttribute('id',category.name)

    cardCategory.innerHTML = `
        <img class="gameTheme_cardImg" src="../img/${category.image}" alt="">
    `

    cardCategory.addEventListener('click',()=>{
        Game.category = cardCategory.id
        //console.log(Game)
        changePage('game')
    })

    return cardCategory
}


export {
    CategoryCardComponent
}