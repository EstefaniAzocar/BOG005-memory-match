import CategoriesPage from "./pages/CategoriesPage.js"
import GamePage from "./pages/Game.js"

const dictionaryPages = {
    gameTheme : CategoriesPage,
    game: GamePage,
}

function changePage (pageToView) {

    const pages = document.querySelectorAll('.pages')
    const containerPage = document.querySelector(`.${pageToView}`)

    pages.forEach(page=>{
        if(page !== containerPage) {
            page.classList.add('hidden')
        }
    })

    containerPage.classList.remove('hidden')

    const functionPageToRender = dictionaryPages[pageToView]

    functionPageToRender()

}


// Proceso de ver las cartas aleatoriamente
function shuffleData(data){

    //crear una copia para no modificar la referencia de lista real
    const pokemons = [...data]
  
    for(let index = 0 ; index < pokemons.length ; index++ ){
  
        //posicoin aleatoria
        let randomIndex = Math.floor( Math.random() * ( index + 1) ); //random index
  
        //guardar el elemento para no perderlo
        const buffer = pokemons[index]
  
        //la posicion actual contendra el elemento de la posicon aleatoria
        pokemons[index] = pokemons[randomIndex]
  
        //la posicion aleatoria contedra el elemnto inicial
        pokemons[randomIndex] = buffer; // swap
  
    }
  
    return pokemons
  }

  
export {
    changePage,
    shuffleData
}