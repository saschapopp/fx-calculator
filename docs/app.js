const fixerUri = 'https://saschapopp.github.io/fx-calculator/rates.json'

document.querySelectorAll('select').forEach(element => {
    element.innerHTML =`
    <option value="EUR">EUR</option>
    <option value="USD">USD</option>
    <option value="CHF">CHF</option>
    <option value="SEK">SEK</option>
    `;
});

function convert(inputValue, inputCurrency, outputCurrency) {
    fetch(fixerUri)
    .then(response => {
        if (response.status == 200) {return response.json();
        } else {
            return Promise.reject('failed to download rates');
        }
    }).then((rates) => {})
}