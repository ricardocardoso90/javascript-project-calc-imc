const calcRed = document.querySelector('.calc-red');
const calcGreen = document.querySelector('.calc-green');

const peso = document.querySelector('.peso');
const altura = document.querySelector('.altura');

export const boxRed = () => {
    
    calcRed.style.display = 'block';
    calcGreen.style.display = 'none';

    if (peso.value === '') {
        calcRed.innerHTML = `Digite um PESO!`;
    } if (altura.value === '') {
        calcRed.innerHTML = `Digite uma ALTURA!`;
    } if (peso.value === '' && altura.value === '') {
        calcRed.innerHTML = 'Digite um PESO e uma ALTURA!'
    };
    
};