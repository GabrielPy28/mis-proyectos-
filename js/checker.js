import Request from './request.js';

export default class Checker {
    verifayInput() {
        const inputValue = document.querySelector(".my-input");

        if (inputValue.value === "") {
            this.getErrorContainer("Ingrese el Titulo de una Película");
        }
        else {
            const request = new Request();
            request.getInfo(inputValue.value);
        }
    }

    getErrorContainer(errorMsg) {
        const fragment = new DocumentFragment();
        const ErrorContainer = document.querySelector(".error-container");
        const errorTemplate = document.querySelector(".error-template").content;

        const clone = errorTemplate.cloneNode(true);
        fragment.appendChild(clone);
        ErrorContainer.appendChild(fragment);

        document.querySelector(".alert-error").innerText = errorMsg;
        this.displayError(ErrorContainer);
    }

    displayError(errorContainer) {
        errorContainer.style.display = "block";

        setTimeout(() => {
            errorContainer.style.display = "none";

            while (errorContainer.firstChild) {
                errorContainer.firstChild.remove();
            }
        }, 1500);
    }
}