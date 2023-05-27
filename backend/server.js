

const express = require('express');
const app = express();
const cors = require('cors');

// Permitir requisições de origens diferentes (Cross-Origin Resource Sharing)
app.use(cors());

// Configurar o servidor para receber dados JSON
app.use(express.json());

// Rota para lidar com a solicitação de cálculo de gorjeta
app.post('/api/calculate-tip', (req, res) => {
  const { bill, tipPercentage, numberOfPeople } = req.body;

  // Cálculo da gorjeta e do valor total por pessoa
  const tipAmount = (bill * tipPercentage) / 100 / numberOfPeople;
  const totalAmountPerPerson = bill / numberOfPeople + tipAmount;

  // Enviar a resposta com os resultados
  res.json({ tipAmount, totalAmountPerPerson });
});

// Rota de exemplo para verificação de funcionamento do servidor
app.get('/api/test', (req, res) => {
  res.send('Hello, this is a test route on the backend!');
});

// Iniciar o servidor
const port = 3001; // Porta em que o servidor irá rodar
app.listen(port, () => {
  console.log(`Servidor backend iniciado na porta ${port}`);
});


app.listen(3000, () => {
  console.log('Servidor backend iniciado na porta 3000');
});