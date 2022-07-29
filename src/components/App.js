//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

import pokemon from '../data/pokemon/pokemon.js';



/* Duplicar las cartas */
let dataPokemon = pokemon.items;
console.log(dataPokemon)
// .concat para duplicar la carta
dataPokemon = dataPokemon.concat(dataPokemon);
console.log(dataPokemon)


// const shuffle = (allCards) => {
//   //Se declara la función shuffle para barajar las tarjetas usando el algoritmo de Fisher - Yates
//   let i = allCards.length - 1;
//   let temp = 0;
//   let randomIndex = 0;
//   while (i >= 0) {
//     randomIndex = Math.floor(Math.random() * (i + 1));
//     temp = allCards[randomIndex];
//     allCards[randomIndex] = allCards[i];
//     allCards[i] = temp;
//     i--;
//   }
// };

//Proceso de ver las cartas aleatoriamente
// function fisherShuffle(arr){

//   // const cards = dataPokemon

//   for(let i =arr.length-1 ; i>0 ;i--){
//       let j = Math.floor( Math.random() * (i + 1) ); //random index
//       [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
//   }
// }

// fisherShuffle(dataPokemon)

// console.log(dataPokemon)

function renderCard(){
   
  // mixCard()

  const containerCards = document.querySelector('.game_containerCards')

  dataPokemon.forEach((person)=>{
    
    // console.log(person.image)
    const cardBox = document.createElement('div')
    cardBox.className = 'game_cardBox'

    const contentCard = `
      <img class='game_cardBoxImg'>${person.image}</img>
    `
    cardBox.innerHTML = contentCard
    containerCards.appendChild(cardBox)
  })
  
}


const App = () => {
  
  renderCard()

  // const el = document.createElement('div');

  // el.className = 'App';
  // el.textContent = 'Hola mundo!';

  // return el;
};

export default App;


