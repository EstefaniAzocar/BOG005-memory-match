import { changePage } from '../helpers.js'

export default function GameStartPage () {

    const mainContainer = document.querySelector('.gameStart_container')

    mainContainer.innerHTML = `
        <div class="gameStart_title">
            <img  class="gameStart_imgTitle" src="./img/tittle.png" alt="">
        </div>

        <div class="gameStart_img">
            <img class="gameStart_imgInit" src="./img/imgInit.png" alt="">
        </div>

        <div class="gameStart_containerButton">
            <button class="gameStart_buttonPlay" id="button">Play</button>
        </div>
    `

    
    const playInit = mainContainer.querySelector('#button');


    playInit.addEventListener('click', () => {
        changePage('gameTheme')
    });


}