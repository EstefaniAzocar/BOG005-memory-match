import App from './components/App.js';

document.getElementById('root').appendChild(App());

const button = document.querySelector('button')

button.addEventListener('click', () => {
    location.href = '../pages/gameTheme.html'
})