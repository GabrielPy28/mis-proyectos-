import Checker from './checker.js';
import Display from './display.js';

export default class Request {
    constructor() {
        this.template = document.querySelector(".card-templates").content;
    }

    async getInfo(inputValue) {
        try {
            const url = `http://www.omdbapi.com/?s=${inputValue}&apikey=df63b9e8`;
            const response = await fetch(url);
            const json = await response.json();

            const container = document.querySelector(".new-row");

            const display = new Display(json.Search, this.template, container);
            display.UserCard();
        } catch (error) {
            const checker = new Checker();
            checker.getErrorContainer("Película no Encontrada!");
        }
    }

    getMultipleInfo(MoviesName) {
        const moviesInfo = [[], []];
        const result = MoviesName.map((item) => {
            return new Promise(async (resolve) => {
                try {
                    const url = `http://www.omdbapi.com/?t=${item}&apikey=df63b9e8`;
                    const response = await fetch(url);
                    const json = await response.json();

                    moviesInfo[0].push(json.Poster);
                    moviesInfo[1].push(json.Title);

                    resolve();
                } catch (error) {
                    console.log(error);
                }
            });
        });

        Promise.all(result).then(() => {
            const container = document.querySelectorAll(".default-row");
            const display = new Display(moviesInfo, this.template, container);
            display.DefaultCards();

        })
    }
}

