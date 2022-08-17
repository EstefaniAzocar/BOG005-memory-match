import CategoriesPage from "./pages/CategoriesPage.js"
import GamePage from "./pages/Game.js"
import { Levels, Game, categories } from "./gameData.js"
import GameEndPage from "./pages/GameEndPage.js"
import GameStartPage from "./pages/GameStart.js"


const dictionaryPages = {
    gameTheme : CategoriesPage,
    game: GamePage,
    gameEnd: GameEndPage,
    gameStart: GameStartPage,
}

//funcion que nos permite cambiar de pagina 
function changePage (pageToView) {

    document.querySelector('body>:last-child').remove()

    const functionPageToRender = dictionaryPages[pageToView]

    const newPage = functionPageToRender()
    document.body.appendChild(newPage)

}

// Proceso de ver las cartas aleatoriamente, mediante el algoritmo de fisher
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

  //CONSTRUIR DATA -> ALGORITMO -> COGER NIVEL -> CORTAR LA CANTIDAD CARTAS -> MEZCLAR
function buildLevelData ()  {

    const level = getActuallyLevel()

    const actuallyCategory = findCategory(Game.category)
    
    const data = actuallyCategory.data
  
    const dataLevel = data.items.slice(0, level.cards / 2)
  
    //creo una copia con el doble de datos
    const dataPokemon = dataLevel.concat(dataLevel);

    const shuflePokemons = shuffleData(dataPokemon)
  
    return shuflePokemons
    
}

//funcion qeu nos permite obtener el nivel actual del juego y nos retorna wl nivel actual
function getActuallyLevel () {
    let levelNow = Game.actuallyLvl //0
    const level = Levels[levelNow - 1] 
    return level
}

//devuelve el objeto de la categoria buscada por nombre
function findCategory(){
   return categories.find( category => category.name === Game.category)
}

  
export {
    changePage,
    buildLevelData,
    getActuallyLevel,
    findCategory,
    shuffleData
}


