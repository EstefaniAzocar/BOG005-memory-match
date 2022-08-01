import { CardComponent } from "../components/App.js"
// import {Game} from '../gameData.js'

export default function GamePage () {

    const gameContainer = document.querySelector('.game_container')

    const containerCounter = CounterComponent()
    gameContainer.appendChild(containerCounter)


    const cards = CardComponent()
    gameContainer.appendChild(cards)


    const powers = PowersComponent()
    gameContainer.appendChild(powers)


}


function CounterComponent () {
    const containerCounter = document.createElement('div')

    containerCounter.className = 'game_containerCounter'

    containerCounter.innerHTML = `
        <div class="game_score">
            <img src="" alt="estrellas" class="game_scoreimgStar">
            <div class="game_scoreBox">score</div>
        </div>

        <div class="game_containerTimer">
            <div class="game_timer">timer</div>
        </div>
    `

    return containerCounter
}

function PowersComponent () {

    const powersContainer = document.createElement('div')

    powersContainer.className = 'game_containerPowers'

    powersContainer.innerHTML = `
        <div class="game_power game_power--addTime" >
            <img src="../img/iconTimer.png" alt="" class="game_imgAddTime">
        </div>

        <div class="game_power game_power--showAll" >
            <img src="../img/bomba.png" alt="" class="game_showAll">
        </div>

        <div class="game_power game_power--showTwo" >
            <img src="../img/dinamita.png" alt="" class="game_showTwo">
        </div>
    `

    return powersContainer

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


