// Função para obter os dados da venda e atualizar os elementos na página
function getVendaData() {
  const vendaId = "1"; // Defina o ID da venda que você deseja obter

  // Faz uma requisição GET para a rota /vendas/:id do servidor
  $.get(`/vendas/${vendaId}`, function (data) {
    // Atualiza os elementos na página com os dados recebidos
    $("#cliente_nome").text(data.cliente[0].nome);
    $("#num_pedido").text(data.num_venda);
    $("#pagamento").text(data.forma_pagamento.pagamento);
    $("#total").text(data.total);
    $("#data_pedido").text(data.dt_emissao);
  }).fail(function () {
    console.error("Falha ao obter os dados da venda");
  });
}

// Chama a função para obter os dados da venda quando a página é carregada
$(document).ready(function () {
  getVendaData();
});
