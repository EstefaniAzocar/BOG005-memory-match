import { CardsContainerComponent } from "../components/App.js"
import { CounterComponent } from "../components/CounterComponent.js"
// import { PowersComponent } from "../components/PowersComponent.js"



//RENDERIZAR TOOOOOODOOO EL GAME
export default function GamePage () {

    const sectionContainer = document.createElement('section')
    sectionContainer.className = 'game'
    sectionContainer.innerHTML = `
        <div class="game_container">
            
        </div>
    `

    const gameContainer = sectionContainer.querySelector('.game_container')
    //COUNTER COMPONENT
    const containerCounter = CounterComponent()
    gameContainer.appendChild(containerCounter)


    const cards = CardsContainerComponent()
    gameContainer.appendChild(cards)
    

    // const powers = PowersComponent()
    // gameContainer.appendChild(powers)

    // counterTimer(containerCounter)

    return sectionContainer
}

export {
    GamePage
}



