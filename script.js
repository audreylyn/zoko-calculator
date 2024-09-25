document.getElementById('convert-button').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency-select').value;
    const toCurrency = document.getElementById('to-currency-select').value;
    const rate = parseFloat(document.getElementById('rate').value);

    let result;

    if (fromCurrency === 'USD' && toCurrency === 'PHP') {
        result = amount * rate;
    } else if (fromCurrency === 'PHP' && toCurrency === 'USD') {
        result = amount / rate;
    } else {
        result = amount; 
    }

    result = Math.round(result);

    document.getElementById('result').textContent = `Result: ${result} ${toCurrency}`;
});
