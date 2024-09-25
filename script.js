document.getElementById('convert-button').addEventListener('click', function () {
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value);

    // Perform the conversion (USD to PHP)
    let result = amount * rate;

    // Round the result to the nearest whole number
    result = Math.round(result);

    document.getElementById('result').textContent = `Result: ${result} PHP`;
});
