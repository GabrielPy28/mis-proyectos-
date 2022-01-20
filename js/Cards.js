import Request from './request.js'

export default class Cards {
    getImages(json) {
        const values = Object.values(json);
        const img = [];

        while(img.length <= 11) {
            let item = this.newItem(values);

            img.push(item);
        }

        const request = new Request();
        request.getMultipleInfo(img);
    }

    newItem(values) {
        const item = values[Math.floor(Math.random() * values.length)];
        return item;
    }

    async getMovies() {
        const response = await fetch("/exampleDB.json");
        const json = await response.json();

        this.getImages(json);
    }
}