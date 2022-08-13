
import { CategoryCardComponent } from '../components/CategoryCardComponent.js';
import { categories } from '../gameData.js';

export default function CategoriesPage () {

    const sectionCategories = document.createElement('section')
    sectionCategories.className = 'gameTheme'

    sectionCategories.innerHTML = `
        <div class="gameTheme_container">
            <div class="gameTheme_text">
                <h2 class="text gameTheme--textTittle">Con Quién Quieres Jugar?</h2>
            </div>
            
            <div class="gameTheme_containerCards">
            
            </div>
        </div>
    `

    const containerGameThemeCards = sectionCategories.querySelector('.gameTheme_containerCards')

    categories.forEach(category => {
        
        const categoryCard = CategoryCardComponent(category)

        containerGameThemeCards.appendChild(categoryCard)
    })

    return sectionCategories
}

export {
    CategoriesPage
}


