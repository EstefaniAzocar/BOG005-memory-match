import { CardsContainerComponent } from "../components/App.js"
import { counterTimer } from "../components/CardComponent.js"
import { CounterComponent } from "../components/CounterComponent.js"
import { PowersComponent } from "../components/PowersComponent.js"



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
    

    const powers = PowersComponent()
    gameContainer.appendChild(powers)

    counterTimer(containerCounter)

    return sectionContainer
}







// function nextLvl (){
//     //sumar el puntaje
//     //si es el utimo lvl?
//         //llevar ala pagina de final
//     //no 
//         //renderizar el nuevo nivel?
// }


// function RenderLvl () {

//     //actualiza el score
//     const scoreContainer = document.querySelector('.game_scoreBox')
//     scoreContainer.textContent = Game.score


//     //actualiza el tiempo
//     const timerContainer = document.querySelector('.game_timer')
//     timerContainer.textContent = Game.timer

//     //game.lvl = game.lvl +1
//     //actualiza las cartas



// }

// function RenderGame () {

//     //busca su contendor 
//     const gameContainer = document.querySelector('.game_container')
//     gameContainer.innerHTML = ''

//     //crear nuevamente el componente de puntaje
//     const puntajeComponent = Puntaje()

//     gameContainer.appendChild(puntajeComponent)




// }


// function Puntaje () {
//     const puntajeContainer = document.createElement('div')

//     puntajeContainer.innerHTML = `
//         <h1>${Game.score}</h1>
//         <button>aumentar</button>
//     `

//     puntajeContainer.querySelector('button').addEventListener('click',()=>{
//         Game.score += 10
//         RenderGame()
//     })

//     return puntajeContainer
// }


