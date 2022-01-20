export default class Display {
    constructor(moviesInfo, template, container) {
        this.moviesInfo = moviesInfo;
        this.template = template;
        this.container = container;
        this.fragment = new DocumentFragment();
        this.clone = this.template.cloneNode(true);
        this.card = this.template.querySelector(".cards");
    }

    DefaultCards() {
        let moviesImg = this.moviesInfo[0];
        let moviestitle = this.moviesInfo[1];

        const arrayImag = this.getNewArray(moviesImg);
        const arrayTitle = this.getNewArray(moviestitle);

        this.container.forEach((row, i) => {
            i === 0 ? (moviestitle = arrayTitle[0]) : (moviestitle = arrayTitle[1]);
            arrayImag[i].forEach((movie, i) => {
                this.card.children[0].setAttribute("src", `${movie}`);
                this.card.children[1].innerText = moviestitle[i];
                
                this.clone = this.template.cloneNode(true);
                this.fragment.appendChild(this.clone);

            });

            row.appendChild(this.fragment);
        });
    }

    getNewArray(movies) {
        const left = movies;
        const right = left.splice(0, Math.ceil(left.length / 2));
        return [left, right];
    }

    UserCard() {
        this.clearMovies();
        this.filter();

    }

    filter() {
        const slicemovies = this.moviesInfo.slice(0, 6);

        slicemovies.forEach((movie) => {
            this.info(movie);

            this.clone = this.template.cloneNode(true);
            this.fragment.appendChild(this.clone);
        });
        this.container.appendChild(this.fragment);
        this.container.style.display = 'flex';
    }

    info(movie) {
        const newCardimg = this.card.children[0];
        const newCardtitle = this.card.children[1];

        newCardimg.setAttribute("src", `${movie.Poster}`);
        newCardtitle.innerText = movie.Title;
    }

    clearMovies() {
        while(this.container.firstChild) {
            this.container.firstChild.remove();
        }
    }
}