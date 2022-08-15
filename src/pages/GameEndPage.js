import { Game, reStartGame } from "../gameData.js"
import { changePage } from "../helpers.js"

export default function GameEndPage () {
    
    const sectionEndContainer = document.createElement('section')
    sectionEndContainer.className = 'gameEnd'

    sectionEndContainer.innerHTML =`
    <img src="../img/congratulation.png" alt="" class="gameEnd_congratulation">

        <div class="gameEnd_container">
            <div class="gameEnd_msgBox">
                <p class="gameEnd_text">Congratulation</p>
                <div class="gameEnd_score">Score : ${Game.score}</div>
            </div>
            <div class="gameEnd_buttonBox">
                <button class="btn_playAgain"></button>
                <button class="btn_exit"></button>
            </div>
        </div>
    `

    const btn_playAgain = sectionEndContainer.querySelector('.btn_playAgain')
    btn_playAgain.addEventListener('click', ()=>{
        reStartGame()
        changePage('gameTheme')
    })

    const btn_exit = sectionEndContainer.querySelector('.btn_exit')
    btn_exit.addEventListener('click', () => {
        reStartGame()
        changePage('gameStart')
    })

    return sectionEndContainer
}

export {
    GameEndPage
}