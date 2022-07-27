
//https://medium.com/zurvin/jugando-con-la-api-de-marvel-y-javascript-c3afad762c2c
//URL BASE http://gateway.marvel.com/v1/public/characters?

// async function fetchData () {
//     const ts = 1
//     const apiKey = "b378d4681d96bb0b3b87c2d42aea2bd7"
//     const hash = "49549cb05fab07f61355232197e8d538"

//     // const url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apiKey=${apiKey}&hash=${hash}`
//     const url = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b378d4681d96bb0b3b87c2d42aea2bd7&hash=49549cb05fab07f61355232197e8d538'

//     // http://gateway.marvel.com/v1/public/characters?ts=1&apiKey=b378d4681d96bb0b3b87c2d42aea2bd7&hash=49549cb05fab07f61355232197e8d538
//     // http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b378d4681d96bb0b3b87c2d42aea2bd7&hash=49549cb05fab07f61355232197e8d538
//     const response = await fetch(url)
//     const dataResponse = await response.json()

//     const data = dataResponse.data.results.map( ({ name, thumbnail,id } )=> ({
//         name,
//         image: thumbnail.path,
//         id
//     }))
    
//     console.log(data)
// }


// fetchData()

export default  {
    name: 'marvel',
    data: [
        {
            "name": "3-D Man",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
            "id": 1011334
        },
        {
            "name": "A-Bomb (HAS)",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
            "id": 1017100
        },
        {
            "name": "A.I.M.",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec",
            "id": 1009144
        },
        {
            "name": "Aaron Stack",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
            "id": 1010699
        },
        {
            "name": "Abomination (Emil Blonsky)",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
            "id": 1009146
        },
        {
            "name": "Abomination (Ultimate)",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
            "id": 1016823
        },
        {
            "name": "Absorbing Man",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7",
            "id": 1009148
        },
        {
            "name": "Abyss",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64",
            "id": 1009149
        },
        {
            "name": "Abyss (Age of Apocalypse)",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548",
            "id": 1010903
        },
        {
            "name": "Adam Destine",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
            "id": 1011266
        },
        {
            "name": "Adam Warlock",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860",
            "id": 1010354
        },
        {
            "name": "Aegis (Trey Rollins)",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4c0035c9c425d",
            "id": 1010846
        },
        {
            "name": "Aero (Aero)",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
            "id": 1017851
        },
        {
            "name": "Agatha Harkness",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/c/a0/4ce5a9bf70e19",
            "id": 1012717
        },
        {
            "name": "Agent Brand",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/4/60/52695285d6e7e",
            "id": 1011297
        },
        {
            "name": "Agent X (Nijo)",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
            "id": 1011031
        },
        {
            "name": "Agent Zero",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c0042121d790",
            "id": 1009150
        },
        {
            "name": "Agents of Atlas",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ce18a834b7f5",
            "id": 1011198
        },
        {
            "name": "Aginar",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
            "id": 1011175
        },
        {
            "name": "Air-Walker (Gabriel Lan)",
            "image": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
            "id": 1011136
        }
    ]
}
