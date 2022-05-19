const submitCoin = document.getElementById("coin-form");

submitCoin.addEventListener("submit", handleCoinSubmit);

function handleCoinSubmit(event) {
  event.preventDefault();
  const addCoinNumber = document.getElementById("how-many").value;

  const getCoin = document.getElementById("which-coin").value;
}
