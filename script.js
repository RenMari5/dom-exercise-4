const submitCoin = document.getElementById("submit-button");

submitCoin.addEventListener("click", handleCoinSubmit);

function handleCoinSubmit(event) {
  event.preventDefault();
  const addCoinNumber = document.getElementById("how-many").value;

  const getCoin = document.getElementById("which-coin").value;

  let coinListItems = document.getElementById("coin-list");

  for (let i = 0; i < addCoinNumber; i++) {
    let listCoins = document.createElement("li");
    if (getCoin === "Penny") {
      listCoins.innerText = "Penny";
    } else if (getCoin === "Dime") {
      listCoins.innerText = "Dime";
    } else if (getCoin === "Quarter") {
      listCoins.innerText = "Quarter";
    } else if (getCoin === "Nickle") {
      listCoins.innerText = "Nickle";
    }
    coinListItems.appendChild(listCoins);
    console.log(listCoins);
  }
}
