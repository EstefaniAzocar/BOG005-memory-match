const Levels = [
    {
        name: "nivel 1",
        cards: 2,
    },
    {
        name: "nivel 2",
        cards: 3,
    },
    {
        name: "nivel 3",
        cards: 4,
    },
    {
        name: "nivel 4",
        cards: 6,
    },
    {
        name: "nivel 5",
        cards: 9,
    }
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
    actuallyLvl: 0,
    Levels: [...Levels],
    timer: 0, 
    powers: [...powers]
}



export {
    Game,
    Levels
}