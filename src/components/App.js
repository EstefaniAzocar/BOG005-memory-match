import { buildLevelData } from '../helpers.js'
import { CardComponent } from './CardComponent.js'
// import { Game, Levels } from '../gameData.js'



// function renderGame (nivel) {

//   levelNow = nivel
//   console.log('nievel renderGame',levelNow)
//   CardComponent()
  
//   // return CardComponent()
//   // nextLevel(level)
//   //actualizar el nivel que siempre va a iniciasr en 0 


//   //volver a renderizar las tarjetas con el nivel actualizado
//   // cardComponent()

// }



function CardsContainerComponent(){
  
  //CONSTRUYE UNA LISTA DE CARTAS 
  const data = buildLevelData()

  const containerCards = document.createElement('div')
  containerCards.className = 'game_containerCards'


  data.forEach((card)=>{

      const cardContainer = CardComponent(card)

      containerCards.appendChild(cardContainer)
  })

  return containerCards
}





export  { CardsContainerComponent };

