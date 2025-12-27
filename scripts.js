const convertButton = document.querySelector(".convert-button");

function convertValues() {
    // Lógica de conversão de moedas
    const inputCurrencyValue = document.querySelector(".input-currency").value;

    const dolarToday = 5.2; // Exemplo de valor do dólar
    const convertedValue = inputCurrencyValue / dolarToday;

    console.log(`Valor convertido: $${convertedValue.toFixed(2)}`); /* Com 2 casas decimais */
}

convertButton.addEventListener("click", convertValues);