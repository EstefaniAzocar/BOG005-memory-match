import { changePage } from '../helpers.js'

export default function GameStartPage () {

    const sectionContainer = document.createElement('section')
    sectionContainer.className = 'gameStart'

    sectionContainer.innerHTML = `
        <div class="gameStart_container">
            <div class="gameStart_title">
                <img  class="gameStart_imgTitle" src="./img/tittle.png" alt="">
            </div>

            <div class="gameStart_img">
                <img class="gameStart_imgInit" src="./img/imgInit.png" alt="">
            </div>

            <div class="gameStart_containerButton">
                <button class="gameStart_buttonPlay" id="button">Play</button>
            </div>
        
        </div>
    `

    
    const playInit = sectionContainer.querySelector('#button');


    playInit.addEventListener('click', () => {
        console.log('el boton play sirve')
        changePage('gameTheme')

    });

    return sectionContainer
}
