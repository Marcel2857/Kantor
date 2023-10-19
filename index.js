const output = document.getElementById("output");

document.getElementById("converter").addEventListener("submit", (event) => {
  event.preventDefault();

  const value = event.target.amount.value;
  const currency = event.target.currency.value;
  const url = `https://api.nbp.pl/api/exchangerates/rates/a/${currency}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const rate = data?.rates?.[0]?.mid;
      if (!rate) {
        output.textContent = "Wystąpił błąd";
      } else {
        const result = (value * rate).toFixed(2);
        output.textContent = `${result} PLN`;
      }
    })
    .catch(() => {
      output.textContent = "Wystąpił błąd";
    });
});
