
import { CategoryCardComponent } from '../components/CategoryCardComponent.js';
import { categories } from '../gameData.js';

export default function CategoriesPage () {

    const categoriesContainer = document.querySelector('.gameTheme_container')

    categoriesContainer.innerHTML = `
        <div class="gameTheme_text">
            <h2 class="text gameTheme--textTittle">Con Quién Quieres Jugar?</h2>
        </div>
        
        <div class="gameTheme_containerCards">
          
        </div>
    `

    const containerGameThemeCards = categoriesContainer.querySelector('.gameTheme_containerCards')

    categories.forEach(category => {
        
        const categoryCard = CategoryCardComponent(category)

        containerGameThemeCards.appendChild(categoryCard)
    })

}


