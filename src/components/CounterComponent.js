
function CounterComponent () {
    const containerCounter = document.createElement('div')

    containerCounter.className = 'game_containerCounter'

    containerCounter.innerHTML = `
        <div class="game_score">
            <img src="" alt="estrellas" class="game_scoreimgStar">
            <div class="game_scoreBox">score</div>
        </div>

        <div class="game_containerTimer">
            <div class="game_timer">0:30</div>
        </div>
    `

    return containerCounter
}

export {
    CounterComponent
}