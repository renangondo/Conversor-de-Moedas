const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    // Lógica de conversão de moedas
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // elemento p para mostrar valor em real
    const currencyValueConverted = document.querySelector(".currency-value"); // elemento p para mostrar valor convertido

    const dolarToday = 5.2; // Exemplo de valor do dólar
    const euroToday = 5.9; // Exemplo de valor do euro

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //mostra que é moeda
            currency: "USD" //moeda em dólar
        }).format(inputCurrencyValue / dolarToday); /* Valor em dólar */

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", //mostra que é moeda
            currency: "EUR" //moeda em euro
        }).format(inputCurrencyValue / euroToday); /* Valor em euro */
 
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", //mostra que é moeda
        currency: "BRL" //moeda em real
    }).format(inputCurrencyValue); /* Valor em real */


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".icone-dolar");
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano";
        currencyImage.src = "imagens/dolar.png";
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "imagens/euro.png";
    }

    convertValues();
    
}



currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues); 