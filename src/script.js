const button = document.querySelector('.button');

import { boxRed } from "./components/boxRed/index.js";
import { boxGreen } from "./components/boxGreen/index.js";

const peso = document.querySelector('.peso');
const altura = document.querySelector('.altura');

button.addEventListener('click', () => {
    if (peso.value === '' || altura.value === '') {
        boxRed()
    } else {
        boxGreen();
    };
});
