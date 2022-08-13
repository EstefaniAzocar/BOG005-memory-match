import GameStartPage from '../pages/GameStart.js';
import { CardComponent } from './CardComponent.js';
import dataPokemon from '../data/pokemon/pokemon.js'
import { shuffleData } from '../helpers.js';
import CategoriesPage from '../pages/CategoriesPage.js';
import GamePage from '../pages/Game.js';
import GameEndPage from '../pages/GameEndPage.js';


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
              return true
                // console.log(element, introData[index],'estan en la misma posicion')
            } else {
              return false
            // console.log(element, introData[index],'no estan en la misma posicion')
        }
        
    })
  
    console.log(validorData)
      expect(validorData).toContain(true);
    });
  })
})

