const express = require("express");
const app = express();
const path = require("path");
const { log } = require("console");

// Rota GET para o endpoint /vendas/:id
app.get("/vendas/:id", (req, res) => {
  // Aqui você pode substituir o código para acessar seu banco de dados ou qualquer outra fonte de dados

  // Extraindo o ID do parâmetro da URL
  const vendaId = req.params.id;

  // Simulando uma venda encontrada no banco de dados
  const venda = {
    id: "1",
    num_venda: " testando",
    total: 123,
    dt_emissao: "dd/mm/aaaa",
    dt_vencimento: "dd/mm/aaaa",
    qtd_items: 5,
    vale_credito: 100,
    condicoes_pagamento: ["debito", "credito", "pix", "dinheiro"],
    desconto: 10,
    forma_pagamento: {
      desconto_padrao: 10,
      acrescimo_padrao: 0,
      pagamento: "debito",
    },
    liquidado: "S",
    cliente: [
      {
        id: "12113",
        nome: "jorginho pipoca",
      },
    ],
  };

  // Verificar se o ID da venda corresponde ao fornecido na URL
  if (venda.id === vendaId) {
    // Extrair os campos necessários
    const { id, num_venda, total, forma_pagamento, cliente } = venda;
    const { id: clienteId, nome: clienteNome } = cliente[0];

    // Construir o objeto de resposta com os campos extraídos
    const vendaResponse = {
      id,
      num_venda,
      forma_pagamento,
      total,
      cliente: cliente.map(({ id, nome }) => ({ id, nome })),
    };

    // Enviar a resposta como JSON
    res.json(vendaResponse);
  } else {
    // Caso o ID da venda não seja encontrado
    res.status(404).json({ error: "Venda não encontrada" });
  }
});
