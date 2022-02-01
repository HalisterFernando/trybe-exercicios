const url = `https://api.coincap.io/v2/assets`;

const cryptoCoins = async () => {
   const coins = await fetch(url)
   .then((response) => response.json())
   .then((data) => data.data)
   .catch((error) => error.toString());

   return coins
};

const setCrypto = async () => {
    const coins = await cryptoCoins();
    console.log(coins)
    const cryptoList = document.getElementById('crypto')
    const tenFirst = coins.filter((el) => Number(el.rank) <= 10).forEach((el) => {
        const newItem = document.createElement('li');
        const dollarPrice = Number(el.priceUsd);

        newItem.innerText = `${el.name} (${el.symbol}): ${dollarPrice.toFixed(2)}`;

        cryptoList.appendChild(newItem);
    });
    

};

window.onload = () => setCrypto();