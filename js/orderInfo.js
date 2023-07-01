// Função para obter parâmetros da URL
function getParameterByName(name) {
  const urlParams = new URLSearchParams(
    window.location.search.replace(/\+/g, " "),
  );
  return urlParams.get(name);
}

// Obter parâmetros da URL
const id = getParameterByName("id");
const numVenda = getParameterByName("num_venda");
const total = getParameterByName("total");
const clienteNome = getParameterByName("cliente_nome");

// Preencher os dados da venda na página
document.getElementById("id").textContent = id;
console.log(id);
document.getElementById("num_venda").textContent = numVenda;
document.getElementById("total").textContent = total;
document.getElementById("cliente_nome").textContent = clienteNome;
