const card = document.querySelector('.cards');
const btcDisplay = document.querySelector('.btc');

const dadosTesla = fetch('http://localhost:8080/').then((response) =>
  response.json().then((carrosJson) => {
    carrosJson.forEach((carro) => {
      const li = document.createElement('li');
      li.innerHTML = +carro.conteudo;
      btcDisplay.appendChild(li);
      return dadosTesla;
    });
  }),
);

const dadosBtc = fetch('https://blockchain.info/ticker')
  .then((response) => response.json())
  .then((btcJson) => {
    const paragrafo = document.createElement('p');
    paragrafo.innerHTML = btcJson.BRL.buy;
    card.appendChild(paragrafo);
    return dadosBtc.save;
  });

dadosBtc = 1;
