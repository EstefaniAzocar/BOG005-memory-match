import { categorys as dataCategories } from "./data/index.js"

const Levels = [
    {
        name: "nivel 1",
        cards: 4,
        time: 20,
    },
    {
        name: "nivel 2",
        cards: 6,
        time: 25,
    },
    // {
    //     name: "nivel 3",
    //     cards: 8,
    //     time: 30,
    // },
    // {
    //     name: "nivel 4",
    //     cards: 12,
    //     time: 40,
    // },
    // {
    //     name: "nivel 5",
    //     cards: 18,
    //     time: 50,
    // }
]


const powers = [
    {
        name: '',
        img: '',
        quantity: 2,
    },
    {
        name: '',
        img: '',
        quantity: 2,
    },
    {
        name: '',
        img: '',
        quantity: 2,
    }
]


const Game = {
    // userName: "juan",
    score: 0,
    actuallyLvl: 1,
    category: "pokemon"
}


const categories = [
    {
        name: 'pokemon',
        image: 'logoPokemon.png',
        data: dataCategories.pokemon
    },
    {
        name: 'webdev',
        image: 'logoMarvel.png',
        data: dataCategories.webdev
    },
    {
        name: 'pokemon',
        image: 'logoPokemon.png',
        data: dataCategories.pokemon
    },
    // {
    //     name: 'webdev',
    //     image: 'logoMarvel.png',
    //     data: dataCategories.webdev
    // },
]

//funcion que me permite reiniciar el juego...
function reStartGame () { 
    Game.score = 0
    Game.actuallyLvl = 1
}

export {
    Game,
    Levels, 
    reStartGame,
    categories,
}