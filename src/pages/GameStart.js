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

    // counterTimer() 
    
    const playInit = mainContainer.querySelector('#button');


    playInit.addEventListener('click', () => {
        changePage('gameTheme')
    });


}



// function counterTimer () {
//     //tiempo para c/ nivel
//     let time = 10 
  
//     const timerBox = document.querySelector('.gameStart_container')
//     const div = document.createElement('div')

//     timerBox.appendChild(div)

    
    
    
//     //temporizador
//     const timer = setInterval(() =>{
        
//         console.log(time)
//         div.innerHTML = `tiempo = ${time}`

//         time-= 1
      
//         if (time == 0) {
  
//             clearInterval(timer)
//             console.log('se aacbo el tiempo')
  
//         }
  
//     }, 1000);
  
//     console.log(time)
  
// }