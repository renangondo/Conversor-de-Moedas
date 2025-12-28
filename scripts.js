const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const convertedToSelect = document.querySelector(".converted-to-select");

function convertValues() {
    // Lógica de conversão de moedas
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value"); // elemento p para mostrar valor convertido
    


    const dolarToday = 5.2; // Exemplo de valor do dólar
    const euroToday = 5.9; // Exemplo de valor do euro
    const libraToday = 6.8; // Exemplo de valor da libra
    const bitcoinToday = 134000; // Exemplo de valor do bitcoin

    
    
    
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

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", //mostra que é moeda
            currency: "GBP" //moeda em libra
        }).format(inputCurrencyValue / libraToday); /* Valor em libra */
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //mostra que é moeda
            currency: "BTC" //moeda em bitcoin
        }).format(inputCurrencyValue / bitcoinToday); /* Valor em bitcoin */

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", //mostra que é moeda
        currency: "BRL" //moeda em real
    }).format(inputCurrencyValue); /* Valor em real */


}






function convertedTo() {
    const currencyName = document.querySelector(".currency");
    const currencyImage = document.querySelector(".icone");

    if (convertedToSelect.value == "real") {
    currencyName.innerHTML = "Real Brasileiro";
    currencyImage.src = "imagens/real.png";
    }


    if (convertedToSelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "imagens/dolar.png";
    }

    if (convertedToSelect.value == 'euro') {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "imagens/euro.png";
    }

    if (convertedToSelect.value == 'libra') {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImage.src = "imagens/libra.png";
    }

    if (convertedToSelect.value == 'bitcoin') {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "imagens/bitcoin.png";
    }

    convertValues();

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

    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = "Libra Esterlina";
        currencyImage.src = "imagens/libra.png";
    }

    if (currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "imagens/bitcoin.png";
    }

    convertValues();

}


convertedToSelect.addEventListener("change", convertedTo);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
