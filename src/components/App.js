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
      
      // console.log(person)
      cardBox.classList.toggle('toggleCard')

      // checkoutCards(person)
      
      checkCards(e);
      
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


  return containerCards
}



//una clase unica para las que estan siendo evaluadas -> 2 elementos clase
//toggle card -> voltearla 
// 1 2
// 0 1 

//enccontradas ?

let totalMatch = 0;

const checkCards = (event) => {

   console.log(event)

  // const clickedCard = event.target.children[0].id
  const clickedCard = event.target.children[0].id
  // const idClickedCard = clickedCard.chi.children[0].idldren[0].id;
  // console.log(clickedCard);

  // clickedCard.classList.add('uncoveredCard');
  // console.log(clickedCard)

  //primero usamos selector para todas las tarjetas que tienen la clase "flipped"
  // const listUncoveredCard = document.querySelectorAll('.uncoveredCard');
  const listUncoveredCard = document.querySelectorAll('.toggleCard');

  console.log(listUncoveredCard)

  // const personCard1 = listUncoveredCard[0].personCard
  // console.log(personCard1)
  
  // listUncoveredCard.forEach(()=>{

  // })



  if(listUncoveredCard.length === 2) {

    const showCard1 = listUncoveredCard[0].children[0].id
    const showCard2 = listUncoveredCard[1].children[0].id
    
    if(showCard1 === showCard2){

      // console.log('son iguales')
      
      listUncoveredCard.forEach(item => {
        
        item.classList.remove('.toggleCard');
       
        item.style.pointerEvents = 'none';
      })
    
      totalMatch++;
    
      if (totalMatch === 1) {
      
        setTimeout(1000)
    }}

    else {

      console.log('wrong');

      listUncoveredCard.forEach(item => {
       
        item.classList.remove('toggleCard');
       
        setTimeout(() => 
       
        item.classList.remove('toggleCard'),1400);

      });

    }
    // console.log('no son iguales')

  }
  console.log(totalMatch)
}





/*.............. aproximacion paula ................... */

// function checkoutCards (personCard) {

//   const showCards = document.querySelectorAll('.toggleCard')
//   //  console.log(showCards)


//    showCards.forEach(()=>{
//     console.log(personCard)
//    })


//    if(showCards.length === 2){
//     console.log(showCards)

//     console.log('valide')
//   }

// }




export  { CardComponent };

