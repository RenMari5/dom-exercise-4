const submitCoin = document.getElementById("submit-button");
const removeCoin = document.querySelectorAll("li");

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
      listCoins.classList.add("penny");
    } else if (getCoin === "Dime") {
      listCoins.innerText = "Dime";
      listCoins.classList.add("dime");
    } else if (getCoin === "Quarter") {
      listCoins.innerText = "Quarter";
      listCoins.classList.add("quarter");
    } else if (getCoin === "Nickle") {
      listCoins.innerText = "Nickle";
      listCoins.classList.add("nickle");
    }
    coinListItems.appendChild(listCoins);
    console.log(listCoins);
  }
}


