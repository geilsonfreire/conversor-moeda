const dropList = document.querySelectorAll("form select"),
    fromCurrency = document.querySelector(".from select"),
    toCurrency = document.querySelector(".to select"),
    getButton = document.querySelector("form button");

for (let i = 0; i < dropList.length; i++) {
    for (let currency_code in country_list) {
        let selected = i == 0 ? currency_code == "BRL" ? "selected" : "" : currency_code == "USD" ? "selected" : "";
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e => {
        loadFlag(e.target);
    });
}

function loadFlag(element) {
    for (let code in country_list) {
        if (code == element.value) {
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
    }
}

window.addEventListener("load", () => {
    getExchangeRate();
});

getButton.addEventListener("click", e => {
    e.preventDefault();
    getExchangeRate();
});

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", () => {
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
})

function getExchangeRate() {
    const amountInput = document.querySelector("form input");
    const exchangeRateTxt = document.querySelector("form .exchange-rate");

    let amount = amountInput.value;

    if (amount === "" || amount === "0") {
        amount = 1;
        amountInput.value = 1;
    }

    exchangeRateTxt.innerText = "Convertendo...";

    const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency.value}&to=${toCurrency.value}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log(data); // debug opcional

            if (!data.rates || !data.rates[toCurrency.value]) {
                exchangeRateTxt.innerText = "Erro ao converter";
                return;
            }

            let result = data.rates[toCurrency.value].toFixed(2);

            exchangeRateTxt.innerText =
                `${amount} ${fromCurrency.value} = ${result} ${toCurrency.value}`;
        })
        .catch((error) => {
            console.error(error);
            exchangeRateTxt.innerText = "Erro na requisição";
        });
}