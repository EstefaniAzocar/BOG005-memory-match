// //
// // Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// // JavasSript que contenga el `export` correspondiente...
// //
// // import pokemon from '../data/pokemon/pokemon.js';
// // console.log(pokemon);
// //
// // O alternativamente podríamos cargar el JSON de forma asíncrona usando
// // `fetch` en el momento que consideremos necesario.
// //
// // fetch('./data/pokemon/pokemon.json')
// //   .then(resp => resp.json())
// //   .then(console.log)
// //   .catch(console.error);
// //

import pokemons from '../data/pokemon/pokemon.js';
import { shuffleData } from '../helpers.js'
import {Game} from '../gameData.js'


function CardComponent(){

  const level = Game.Levels[Game.actuallyLvl]

  const dataLevel = pokemons.items.slice(0, level.cards)

  //creo una copia con el doble de datos
  const dataPokemon = dataLevel.concat(dataLevel);

  //envio la copia a barajarse y eso me devuelve una lista lista con los elementos en diferentes posiciones
  const shuflePokemons = shuffleData(dataPokemon)

  //si es impar push de una nueva carta (poder)
  // if(level.cards)

  const containerCards = document.createElement('div')

  containerCards.className = 'game_containerCards'

  shuflePokemons.forEach((person)=>{
    
    // console.log(person.image)
    const cardBox = document.createElement('div')
    cardBox.className = 'game_cardBox ${data.items[i].id}'

    const contentCard = `
<<<<<<< HEAD
      <img src=${person.image} class='game_cardBoxImg'/>

      <div class="game_containerCards"> img</div>
      
=======
      <div class="game_cardBack">
        <img src=${person.image} class='game_cardBoxImg'/>
      </div>
      <div class="game_cardFront">
        <img src="../img/logoPokemon.png" class='game_cardFrontImg'/>
      </div>
>>>>>>> e2472ca2e345b0794faea9f2490aa6116c8d20e3
    `
   
    cardBox.innerHTML = contentCard

    cardBox.addEventListener('click',()=>{

      cardBox.classList.toogle('toogleCard')
      //confirmar si true o false

      //si true
        //si no es el ulitmo par en ser encontrado
          //quedarse volteada

        //valida si es la ultima carta en ser encontrada
          //cambiar al siguiente lvl
          //sumar el puntaje
            //si es el utimo lvl?
              //llevar ala pagina de final
            //no 

      //si false
        //desvoltearse

    })

    containerCards.appendChild(cardBox)

  })

containerCards.querySelectorAll('.game_cardBox').forEach((card)=>{
    
    card.addEventListener('click', () => {
      console.log('click')
    })
    // card.addEventListener('click', () => {
    //   console.log('click en tarjeta')
    //   // card.classList.toggle('.toggleCard')
    // })
  })
  
  return containerCards
}
  //Usamos selector para todas las tarjetas que tienen la clase "containerCard"
//usamos un loop for each, recordando que son varios 'containeCard'
document.querySelectorAll('.game_containerCard').forEach(item => { 
  //para cada item(carta), al hacer click sucede un evento
  item.addEventListener('click', () => {
    //al hacer click la carta tiene una clase de 'toggle card': efecto para voltear
    item.classList.toggle('game_toggleCard');

   
  })
})


/* toogleCard()
function toogleCard () {

  const allCards = document.querySelectorAll('.game_cardBox')
  console.log(allCards)
} */

// const App = () => {
  
//   // CardComponent()

//   const el = document.createElement('div');

//   el.className = 'App';
//   el.textContent = 'Hola mundo!';

//   return el;
// };

<<<<<<< HEAD
export {renderCard};

=======
export  { CardComponent };
>>>>>>> e2472ca2e345b0794faea9f2490aa6116c8d20e3

// export default App;
