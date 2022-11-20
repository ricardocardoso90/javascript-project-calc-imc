const calcRed = document.querySelector('.calc-red');
const calcGreen = document.querySelector('.calc-green');

const peso = document.querySelector('.peso');
const altura = document.querySelector('.altura');

export const boxGreen = () => {
    const calcResult = peso.value / (altura.value * altura.value);


    switch (calcResult) {
        case (calcResult < 18):
            calcGreen.innerHTML = `Seu IMC é de: ${calcResult.toFixed(2)}, você está Abaixo do Peso.`;
            break;

        case (calcResult > 18 && calcResult < 24.99):
            calcGreen.innerHTML = `Seu IMC é de: ${calcResult.toFixed(2)}, você está com Peso Normal.`;
            break;

        case (calcResult > 25 && calcResult < 29.99):
            calcGreen.innerHTML = `Seu IMC é de: ${calcResult.toFixed(2)}, você está com Sobrepeso.`;
            break;

        case (calcResult > 30 && calcResult < 35.99):
            calcGreen.innerHTML = `Seu IMC é de: ${calcResult.toFixed(2)}, você está com Obesidade Grau 1.`;
            break;

        case (calcResult > 35 && calcResult < 39.99):
            calcGreen.innerHTML = `Seu IMC é de: ${calcResult.toFixed(2)}, você está com Obesidade Grau 2.`;
            break;

        case (calcResult > 40):
            calcGreen.innerHTML = `Seu IMC é de: ${calcResult.toFixed(2)}, você está com Obesidade Grau 3.`;
            break;
    };


    // if (calcResult < 18) {
    //     calcGreen.innerHTML = `Seu IMC é de: ${calcResult.toFixed(2)}, você está Abaixo do Peso.`;
    // } if (calcResult > 18 && calcResult < 24.99) {
    //     calcGreen.innerHTML = `Seu IMC é de: ${calcResult.toFixed(2)}, você está com Peso Normal.`;
    // } if (calcResult > 25 && calcResult < 29.99) {
    //     calcGreen.innerHTML = `Seu IMC é de: ${calcResult.toFixed(2)}, você está com Sobrepeso.`;
    // } if (calcResult > 30 && calcResult < 35.99) {
    //     calcGreen.innerHTML = `Seu IMC é de: ${calcResult.toFixed(2)}, você está com Obesidade Grau 1.`;
    // } if (calcResult > 35 && calcResult < 39.99) {
    //     calcGreen.innerHTML = `Seu IMC é de: ${calcResult.toFixed(2)}, você está com Obesidade Grau 2.`;
    // } if (calcResult > 40) {
    //     calcGreen.innerHTML = `Seu IMC é de: ${calcResult.toFixed(2)}, você está com Obesidade Grau 3.`;
    // };

    
    calcGreen.style.display = 'block';
    calcRed.style.display = 'none';
    
    peso.value = '';
    altura.value = '';
};