import { buildLevelData } from '../helpers.js'
import { CardComponent, counterTimer} from './CardComponent.js'

// import { Game, Levels } from '../gameData.js'

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

