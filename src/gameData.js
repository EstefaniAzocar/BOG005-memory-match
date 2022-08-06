const Levels = [
    {
        name: "nivel 1",
        cards: 4,
    },
    // {
    //     name: "nivel 2",
    //     cards: 6,
    // },
    // {
    //     name: "nivel 3",
    //     cards: 8,
    // },
    // {
    //     name: "nivel 4",
    //     cards: 12,
    // },
    // {
    //     name: "nivel 5",
    //     cards: 18,
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
}


function reStartGame () { 
    Game.score = 0
    Game.actuallyLvl = 1
}

export {
    Game,
    Levels, 
    reStartGame
}