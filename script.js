const submitCoin = document.getElementById("coin-form");

submitCoin.addEventListener("submit", handleCoinSubmit);

function handleCoinSubmit(event) {
  event.preventDefault();
  const addCoinNumber = document.getElementById("how-many").value;

  const getCoin = document.getElementById("which-coin").value;
  
  for (let i = 0; i <= addCoinNumber; i++){
    let listCoins = document.createElement("li");
    if (getCoin === "Penny"){
      listCoins.innerText = getCoin;
    } else if (getCoin === "Dime"){
      listCoins.innerText = getCoin;
    } else if (getCoin === "Quarter"){
      listCoins.innerText = getCoin;
    } else if (getCoin === "Nickle"){
      listCoins.innerText = getCoin;
    }
  } 
}
