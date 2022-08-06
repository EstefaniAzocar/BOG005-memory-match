import { Game, reStartGame } from "../gameData.js"
import { changePage } from "../helpers.js"

export default function GameEndPage () {
    const gameEndContainer = document.querySelector('.gameEnd_container')

    gameEndContainer.innerHTML =`
    <div class="gameEnd_msgBox">
        <p class="gameEnd_text">Congratulation</p>
        <div class="gameEnd_score">Score : ${Game.score}</div>
    </div>
    <div class="gameEnd_buttonBox">
        <button class="btn_playAgain">Play Again</button>
        <button class="btn_exit">Exit</button>
    </div>
    `

    const btn_playAgain = gameEndContainer.querySelector('.btn_playAgain')
    btn_playAgain.addEventListener('click', ()=>{
        reStartGame()
        changePage('gameTheme')
    })

    const btn_exit = gameEndContainer.querySelector('.btn_exit')
    btn_exit.addEventListener('click', () => {
        reStartGame()
        changePage('gameStart')
    })


}