import GameStartPage from '../pages/GameStart.js';
import { CardComponent } from './CardComponent.js';
import dataPokemon from '../data/pokemon/pokemon.js'
import { shuffleData } from '../helpers.js';
import CategoriesPage from '../pages/CategoriesPage.js';
import GamePage from '../pages/Game.js';
import GameEndPage from '../pages/GameEndPage.js';
// import jest from 



describe('Render Pages', () => {
  it('should render page init', () => {
    const pageInit = GameStartPage()
    expect(pageInit instanceof HTMLElement).toBe(true);
  });
  it('should render page categories', () => {
    const pageCategories = CategoriesPage()
    expect(pageCategories instanceof HTMLElement).toBe(true);
  });
  it('should render page init', () => {
    const pageGame = GamePage()
    expect(pageGame instanceof HTMLElement).toBe(true);
  });
  it('should render page init', () => {
    const pageEnd = GameEndPage()
    expect(pageEnd instanceof HTMLElement).toBe(true);
  });
});


describe('Render Component', () => {
  it('should render component type of card', () => {

    const cardMock = dataPokemon.items[0]
    const card = CardComponent(cardMock)
    // const el = App();
    expect(card instanceof HTMLElement).toBe(true);
  });
});



describe('shuffleData', () => {
  it('debería ser una función', () => {
    expect(typeof shuffleData).toBe('function');
  });

  describe('deberia desordenar la data que ingrese', () => {
    it('deberia usar la funcion shuffleData', () => {
  
      const introData = dataPokemon.items
      const unsortData = shuffleData(introData)
  
      const validorData = unsortData.map((element, index)=>{
        if (element !== introData[index]){
              // console.log(element, introData[index],'estan en la misma posicion')
              return true
            } else {
              // console.log(element, introData[index],'no estan en la misma posicion')
              return false
        }
        
    })
  
      console.log(validorData)
      expect(validorData).toContain(true);
    });
  })
})


describe('comparation equal cards', () => {
  it('should keep oppened cards if are equal', (done) => {
    const padre = GamePage()
    document.body.appendChild(padre)
    const cards = Array.from(padre.querySelectorAll('.gameCard'))
    
    const firstCard = cards[0]

   // seleccionar los dos que tengan el mismo id
    const firstCardTwin = cards.filter((card)=>{
      return firstCard.id == card.id
      
    })[1]

    // const firstCardTwin = cards[2]

    firstCard.click()

    // console.log('cualquier cosa')

    setTimeout(()=>{
      firstCardTwin.click()
      console.log('otra cosa')
      
     setTimeout(()=> {
       console.log({
         firstCard: firstCard.id,
         firstCardTwin: firstCardTwin.id,
         class: firstCard.className,
         secondClass: firstCardTwin.className
       })
      expect(firstCard.className).toMatch(/toggleCard/)
      done()
     },1000)

    },1000)

    // console.log('paulina')
  });
});

