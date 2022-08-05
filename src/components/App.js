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


let levelNow = Game.actuallyLvl //0
console.log('inicial' , levelNow)

function renderGame (nivel) {

  levelNow = nivel
  console.log('nievel renderGame',levelNow)
  CardComponent()
  
  // return CardComponent()
  // nextLevel(level)
  //actualizar el nivel que siempre va a iniciasr en 0 


  //volver a renderizar las tarjetas con el nivel actualizado
  // cardComponent()

}

function CardComponent(){

  // levelNow = nextLevel()
  // console.log(levelNow)

  // const nextLevel = levelNow
  // console.log(nextLevel)

  const level = Game.Levels[levelNow] 
  console.log(level)

  const dataLevel = pokemons.items.slice(0, level.cards)

  //creo una copia con el doble de datos
  const dataPokemon = dataLevel.concat(dataLevel);
  const quantityCardsLvl =  dataPokemon.length
  console.log({
    largo: quantityCardsLvl,
  })

  //envio la copia a barajarse y eso me devuelve una lista lista con los elementos en diferentes posiciones
  const shuflePokemons = shuffleData(dataPokemon)
  // const quantityCardsLvl = shuflePokemons.length
  // console.log({
  //   largo: quantityCardsLvl,
  // })
  // comparar con este para pasar de nivel 

  //si es impar push de una nueva carta (poder)
  // if(level.cards)

  const containerCards = document.createElement('div')

  containerCards.className = 'game_containerCards'

  shuflePokemons.forEach((person)=>{

    const cardBox = document.createElement('div')
    cardBox.className = 'gameCard'


    const contentCard = `
        <div class= 'gameCard_back' id='${person.id}'>
          <img src="${person.image}"/>
        </div>
        <div class='gameCard_front'>
          <img src="../img/logoPokemon.png"/>
        </div>
    `

    cardBox.innerHTML = contentCard


    cardBox.addEventListener('click',(e)=>{

      // cardBox.classList.toggle('toggleCard')

      checkCards(e, quantityCardsLvl);
      // nextLevel(levelNow)
      //evaluado -> ?

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

  // const arrayShowCards = document.querySelectorAll('.toggleCard')
  // console.log(arrayShowCards)

  return containerCards
}

const checkCards = (event, cardsLvl) => {

  // const arrayShowCards = []

  const clickedCard = event.target
  clickedCard.classList.toggle('toggleCard')
  clickedCard.classList.add('uncoveredCard')

  //primero usamos selector para todas las tarjetas que tienen la clase "flipped"
  const listUncoveredCard = document.querySelectorAll('.uncoveredCard');
  // console.log(listUncoveredCard)


  if(listUncoveredCard.length == 2) {

    // console.log('segunda apertura')

    const showCard1 = listUncoveredCard[0].children[0].id

    const showCard2 = listUncoveredCard[1].children[0].id

    //  console.log({
    //   showCard1,showCard2
    //  })

    if(showCard1 === showCard2){

      // console.log('son iguales',listUncoveredCard)

      listUncoveredCard.forEach(item => {

        item.classList.remove('uncoveredCard');

        item.style.pointerEvents = 'none';

        // arrayShowCards.push(item)
      })


      } else {


      // console.log('wrong');

      listUncoveredCard.forEach(item => {

        item.classList.remove('uncoveredCard');

        setTimeout(() =>
            item.classList.remove('toggleCard')
        ,600);

      });

    }
    // console.log('no son iguales')

  }

  const arrayShowCards = document.querySelectorAll('.toggleCard')
  const quantityShowCards = arrayShowCards.length
  console.log({
    largoMostradas: quantityShowCards,
  })

  if(quantityShowCards == cardsLvl) {
    nextLevel(levelNow)
    console.log('se abrierontodas las cartas del nivel actual')
  } else {
    console.log('faltan descubrir cartas')
  }
}


function nextLevel (lvl) {
  
  console.log('levelBefore',lvl)

  lvl = lvl + 1 
  // lvl = lvl + 1
  console.log('levelAfter',lvl)
  // return lvl

  renderGame(lvl)

}


export  { CardComponent };
// export  { renderGame };

