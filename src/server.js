// Url format to be requested http://localhost:3333/exchange/USD/BRL/2000

import http from "node:http";

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  console.log(method, url);

  if (method === "GET") {
    const urlParams = url.split("/"); // Declare a variável urlParams corretamente

    if (urlParams[1] === "exchange") {
      const apiKey = process.env.API_KEY;
      const amount = urlParams[urlParams.length - 1];
      const fromCurrency = urlParams[urlParams.length - 3];
      const toCurrency = urlParams[urlParams.length - 2];

      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`
        );
        const data = await response.json();
        const { conversion_rates } = data;
        const conversionRate = conversion_rates[toCurrency];

        const convertedValue = amount * conversionRate;

        return res.writeHead(201).end(JSON.stringify(convertedValue));
      } catch (error) {
        console.error(error);
        return res.writeHead(500).end("Erro na requisição");
      }
    }
  }
  return res.writeHead(404).end("Página Não encontrada");
});

// localhost:3333
server.listen(3333);
