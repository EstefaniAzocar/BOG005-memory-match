import { Game, Levels } from "../gameData.js"
import { changePage, getActuallyLevel } from "../helpers.js"
import GamePage from "../pages/Game.js"

//funcion que construye un nodo(componente) html y lo retorna
  //funcion que se usa en cardsContainer para construir toda la pageGamae
function CardComponent(card){

    const cardBox = document.createElement('div')
    cardBox.className = 'gameCard'

    const contentCard = `
        <div class= 'gameCard_back' id='${card.id}'>
          <img src="${card.image}"/>
        </div>
        <div class='gameCard_front'>
          <img src="../img/logoPokemon.png"/>
        </div>
    `

    cardBox.innerHTML = contentCard


    cardBox.addEventListener('click',(e)=>{

      checkCards(e);
    
    })

    return cardBox

}

//funcion que permite validar las parejas
const checkCards = (event) => {

    const clickedCard = event.target
    clickedCard.classList.toggle('toggleCard')
    clickedCard.classList.add('uncoveredCard')
  
    //primero usamos selector para todas las tarjetas que tienen la clase "flipped"
    const listUncoveredCard = document.querySelectorAll('.uncoveredCard');
    // console.log(listUncoveredCard)
  
  
    if(listUncoveredCard.length == 2) {
  
      // console.log('segunda apertura')
  
      const showCard1 = listUncoveredCard[0].children[0].id
  
      const showCard2 = listUncoveredCard[1].children[0].id
  
      //  console.log({
      //   showCard1,showCard2
      //  })
  
      if(showCard1 === showCard2){
  
        // console.log('son iguales',listUncoveredCard)
  
        listUncoveredCard.forEach(item => {
  
          item.classList.remove('uncoveredCard');
  
          item.style.pointerEvents = 'none';
  
          // arrayShowCards.push(item)
        })
  
  
        } else {
  
  
        // console.log('wrong');
  
        listUncoveredCard.forEach(item => {
  
          item.classList.remove('uncoveredCard');
  
          setTimeout(() =>
              item.classList.remove('toggleCard')
          ,600);
  
        });
  
      }
      // console.log('no son iguales')
  
    }
  
    const arrayShowCards = document.querySelectorAll('.toggleCard').length //numero

    const quantityShowCards = getActuallyLevel().cards //numero

    if(quantityShowCards == arrayShowCards) {
      nextLevel()
      console.log('se abrierontodas las cartas del nivel actual')
    } else {
      console.log('faltan descubrir cartas')
    }
}



function nextLevel () {
    

    //si estoy en la posicion 1 significa que esoty en el nivel 2
    //si existen 2 nivels no mas ya llege al limite
   if(Game.actuallyLvl  < Levels.length ){
       //render game de nuevo
        Game.actuallyLvl += 1
        GamePage()

    }else{
      changePage('gameEnd')
      console.log('se acabo el juego')

   }

    // renderGame(lvl)
  
  }
  
  



export { CardComponent }