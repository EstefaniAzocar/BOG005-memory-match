import { Game } from '../gameData.js' 
import { getActuallyLevel } from '../helpers.js'


function CounterComponent () {
    const containerCounter = document.createElement('div')

    containerCounter.className = 'game_containerCounter'

    const nivel = getActuallyLevel()
    containerCounter.innerHTML = `
        <div class="game_score">
            <img src="../img/estrellas.png" alt="estrellas" class="game_scoreimgStar">
            <div class="game_scoreBox">${Game.score}</div>
        </div>

        <div class="game_containerTimer">
            <div class="game_timer" id="timer">${nivel.time}</div>
        </div>
    `

    return containerCounter
}

export {
    CounterComponent
}