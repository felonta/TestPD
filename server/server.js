const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const { log } = require('console');

// Configurar o body-parser para lidar com o corpo da requisição
app.use(bodyParser.json());

// Rota GET para o endpoint /vendas/:id
app.get('/vendas/:id', (req, res) => {
  // Aqui você pode substituir o código para acessar seu banco de dados ou qualquer outra fonte de dados

  // Extraindo o ID do parâmetro da URL
  const vendaId = req.params.id;

  // Simulando uma venda encontrada no banco de dados
  const venda = {
    "id": "1",
    "num_venda":" testando",
    "total": 123,
    "dt_emissao":"12/11/2023",
    "dt_vencimento":"dd/mm/aaaa",
    "qtd_items": 5,
    "vale_credito": 100,
    "condicoes_pagamento": ["debito", "credito", "pix", "dinheiro"],
    "desconto": 10,
    "forma_pagamento": {
      "desconto_padrao": 10,
      "acrescimo_padrao": 0,
      "pagamento": "debito"
    },
    "liquidado":"S",
    "cliente": [
      {
        "id":"12113",
        "nome":"jorginho pipoca"
      }
    ]
  }
  

  // Verificar se o ID da venda corresponde ao fornecido na URL
  if (venda.id === vendaId) {
    // Extrair os campos necessários
    const { id, num_venda, total, dt_emissao, forma_pagamento, cliente } = venda;
    const { id: clienteId, nome: clienteNome } = cliente[0];

    // Construir o objeto de resposta com os campos extraídos
    const vendaResponse = {
      id,
      num_venda,
      forma_pagamento,
      total,
      dt_emissao,
      cliente: cliente.map(({ id, nome }) => ({ id, nome }))
    };

    // Enviar a resposta como JSON
    res.json(vendaResponse);
  } else {
    // Caso o ID da venda não seja encontrado
    res.status(404).json({ error: 'Venda não encontrada' });
  }
});

// Rota POST para receber a venda e redirecionar para a página de sucesso
app.post('/enviar-venda', (req, res) => {
  // Código para processar a venda
  // ...

  // Supondo que você tenha os dados da venda disponíveis
  const vendaData = {
    id: "1",
    num_venda: "testando",
    total: 123,
    cliente_nome: "jorginho pipoca"
  };
});

app.get('/Index.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontPDV/Index.html'));
});
app.get('/orderpage-1.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontPDV/orderPage-1.html'));
});
app.get('/orderpage-3.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontPDV/orderPage-3.html'));
});
app.get('/orderpage-1.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontPDV/orderPage-1.html'));
});

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, '')));


// Rota para servir o arquivo main.html
app.get('/orderPage-2.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontPDV/orderPage-2.html'));
});

// Rota para lidar com erros 404
app.use((req, res, next) => {
  res.status(404).send('<h1>Página não encontrada</h1>');
});

// Lidar com erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('<h1>Erro interno do servidor</h1>');
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
