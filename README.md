# API de Conversão de Moedas

Esta API foi desenvolvida para simplificar a comunicação com a API de Conversão de Moedas fornecida pela ExchangeRate-API.com. Com esta API, você poderá facilmente realizar conversões financeiras entre diferentes moedas de forma rápida e eficiente.

## Como Utilizar

Para utilizar esta API, siga os passos abaixo:

1. Adquira uma chave de acesso à API de Conversão de Moedas da ExchangeRate-API.com em [https://www.exchangerate-api.com/](https://www.exchangerate-api.com/). Substitua a chave de acesso padrão neste repositório pelo seu próprio token de API.

2. Clone este repositório em sua máquina local ou em um servidor acessível.

3. Inicie o servidor local utilizando o comando:

   ```shell
   npm start
   ```

   Certifique-se de ter o Node.js instalado em sua máquina.

4. Realize uma solicitação GET para a seguinte URL:

   ```
   http://localhost:3333/exchange/{moeda_origem}/{moeda_destino}/{valor}
   ```

   Certifique-se de substituir os parâmetros `{moeda_origem}`, `{moeda_destino}` e `{valor}` pelos valores apropriados:

   - `{moeda_origem}`: A moeda de origem que você deseja converter.
   - `{moeda_destino}`: A moeda para a qual você deseja converter.
   - `{valor}`: O valor que você deseja converter.

5. A API responderá com o resultado da conversão no formato JSON, que incluirá o valor convertido, as moedas de origem e destino e a taxa de câmbio utilizada.

## Exemplo de Uso

Para converter 5000 dólares americanos (USD) para reais brasileiros (BRL), você pode fazer a seguinte solicitação:

```
GET http://localhost:3333/exchange/USD/BRL/5000
```

A resposta será algo semelhante a:

```json
{
  "moeda_origem": "USD",
  "moeda_destino": "BRL",
  "valor_origem": 5000,
  "valor_destino": 28000,  // Valor convertido
  "taxa_cambio": 5.6       // Taxa de câmbio utilizada
}
```

Lembre-se de que é importante substituir a chave de acesso padrão pelo seu próprio token de API da ExchangeRate-API.com antes de utilizar esta API em um ambiente de produção.

## Recursos Adicionais

- [Documentação da ExchangeRate-API.com](https://www.exchangerate-api.com/docs)
- [Repositório GitHub da ExchangeRate-API.com](https://github.com/exchangeratesapi/exchangerates)

Divirta-se convertendo moedas com facilidade usando esta API! Se tiver alguma dúvida ou encontrar problemas, sinta-se à vontade para entrar em contato conosco.

**Nota:** Esta API é apenas um exemplo e não deve ser usada em produção sem a devida consideração de segurança e desempenho. Certifique-se de implementar as melhores práticas de segurança e otimização ao usá-la em um ambiente de produção.
