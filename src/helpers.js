import CategoriesPage from "./pages/CategoriesPage.js"
import GamePage from "./pages/Game.js"

const dictionaryPages = {
    gameTheme : CategoriesPage,
    game: GamePage,
}

function changePage (pageToView) {

    const pages = document.querySelectorAll('.pages')
    const containerPage = document.querySelector(`.${pageToView}`)

    pages.forEach(page=>{
        if(page !== containerPage) {
            page.classList.add('hidden')
        }
    })

    containerPage.classList.remove('hidden')

    const functionPageToRender = dictionaryPages[pageToView]

    functionPageToRender()

}


export {
    changePage
}