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

// Proceso de ver las cartas aleatoriamente
function fisherShuffle(arr){

  console.log(arr)
  // const cards = dataPokemon

  for(let i =arr.length-1 ; i>0 ;i--){
      let j = Math.floor( Math.random() * (i + 1) ); //random index
      [arr[i],arr[j]]=[arr[j],arr[i]]; // swap

      console.log([arr[i],arr[j]])
  }

  //hacer un array vacio que vaya metiendo el push cada aleatoria 
  //luego retornar ese array

}

fisherShuffle(dataPokemon)

console.log(dataPokemon)

function renderCard(){
   
  // mixCard()

  const containerCards = document.querySelector('.game_containerCards')

  dataPokemon.forEach((person)=>{
    
    // console.log(person.image)
    const cardBox = document.createElement('div')
    cardBox.className = 'game_cardBox ${data.items[i].id}'

    const contentCard = `
      <img src=${person.image} class='game_cardBoxImg'/>

      <div class="game_containerCards"> img</div>
      
    `
   
    cardBox.innerHTML = contentCard

    containerCards.appendChild(cardBox)
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


// const App = () => {
  
//   renderCard()

//   // const el = document.createElement('div');

//   // el.className = 'App';
//   // el.textContent = 'Hola mundo!';

//   // return el;
// };

export {renderCard};


