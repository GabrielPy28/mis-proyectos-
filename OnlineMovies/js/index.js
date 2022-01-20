import Checker from './checker.js';
import Cards from './Cards.js';

window.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn-search");

    const movies = new Cards();
    movies.getMovies();

    btn.addEventListener("click", (e) => {
        e.preventDefault()

        const checker = new Checker();
        checker.verifayInput();
    });
});