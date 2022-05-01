export default function fetchBitcoin(url, targ) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(targ);
      btcPreco.innerHTML = (1000 / bitcoin.BRL.sell).toFixed(4)
    }).catch(error => {
        console.log(Error(error));
    })
}
