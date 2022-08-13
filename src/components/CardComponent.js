import { Game, Levels } from "../gameData.js"
import { changePage, findCategory, getActuallyLevel } from "../helpers.js"
// import { CounterComponent } from "./CounterComponent.js"
// import GamePage from "../pages/Game.js"



//funcion que construye un nodo(componente) html y lo retorna
//funcion que se usa en cardsContainer para construir toda la pageGamae
function CardComponent(card) {

  const cardBox = document.createElement('div')
  cardBox.className = 'gameCard'
  cardBox.setAttribute('id', card.id)

  const actuallyCategory = findCategory()

  const contentCard = `
        <div class= 'gameCard_back' >
          <img src="${card.image}"/>
        </div>
        <div class='gameCard_front'>
          <img src="../img/${actuallyCategory.image}"/>
        </div>
    `

  cardBox.innerHTML = contentCard


  cardBox.addEventListener('click', (e) => {

    console.log(Game.category)
    checkCards(e);

  })

  return cardBox

}

//funcion que permite validar las parejas
function checkCards(event) {


  const clickedCard = event.target
  clickedCard.classList.toggle('toggleCard')
  clickedCard.classList.add('uncoveredCard')

  //primero usamos selector para todas las tarjetas que tienen la clase "uncoveredCard"
  const listUncoveredCard = document.querySelectorAll('.uncoveredCard');
  // console.log(listUncoveredCard)

  if (Game.startLevel == false) {
    Game.startLevel = true  
    counterTimer()
    console.log('inicio el juego')
  }

  if (listUncoveredCard.length == 2) {

    // console.log('segunda apertura')

    const showCard1 = listUncoveredCard[0].id

    const showCard2 = listUncoveredCard[1].id

    //  console.log({
    //   showCard1,showCard2
    //  })

    if (showCard1 === showCard2) {

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
          , 600);

      });

    }
    // console.log('no son iguales')

  }

  //nos permite identificar cuando se han abierto todas las cartas
  const arrayShowCards = document.querySelectorAll('.toggleCard').length //numero
  // console.log("arrayshowcards", arrayShowCards)
  const quantityShowCards = getActuallyLevel().cards //numero

  if (quantityShowCards == arrayShowCards) {
    nextLevel()
    console.log('se abrierontodas las cartas del nivel actual')
  } else {
    console.log('faltan descubrir cartas')
  }
}



function nextLevel() {
  //averiguar cual es el puntaj de la categoria actual
  Game.startLevel = false
  Game.score += Game.time * 2
  clearInterval(Game.timer)
  //si estoy en la posicion 1 significa que esoty en el nivel 2
  //si existen 2 nivels no mas ya llege al limite
  if (Game.actuallyLvl < Levels.length) {
    //render game de nuevo
    Game.actuallyLvl += 1
    // GamePage()
    changePage('game')

  } else {
    changePage('gameEnd')
    console.log('se acabo el juego')

  }

  // renderGame(lvl)

}

function counterTimer() {
  //tiempo para c/ nivel
  const nivel = getActuallyLevel()
  Game.time = nivel.time

  const timerBox = document.querySelector('#timer')
  Game.timer = setInterval(() => {

    
    Game.time -= 1
    timerBox.textContent = Game.time < 10 ? `00:0${Game.time}` : `00:${Game.time}` 
    

    // console.log(Game.time)
    if (Game.time == 0) {

      clearInterval(Game.timer)
      changePage("gameEnd")

    }

  }, 1000);


}





export {
  CardComponent,
}