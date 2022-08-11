// import { Game } from '../gameData.js';
import GameStartPage from '../pages/GameStart.js';
import { CardComponent } from './CardComponent.js';
import dataPokemon from '../data/pokemon/pokemon.js'
// import App from './App.js';



describe('Render Pages', () => {
  it('should render page init', () => {
    const page = GameStartPage()
    // const button = page.querySelector('button')
    // button.click()
    expect(page instanceof HTMLElement).toBe(true);
  });
});


describe('Render Component', () => {
  it('should render component type of card', () => {

    const cardMock = dataPokemon.items[0]
    const card = CardComponent(cardMock)
    // const el = App();
    expect(card instanceof HTMLElement).toBe(true);
  });
  // it('should render component type of card', () => {

  //   // const cardMock = dataPokemon.items[0]
  //   const card = CardComponent()
  //   // const el = App();
  //   expect(card instanceof HTMLElement).toBe(true);
  // });
});
