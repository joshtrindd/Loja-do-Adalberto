function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function exibirPedido() {
  let pedido = null;

  try {
    pedido = JSON.parse(sessionStorage.getItem("pedidoConcluido"));
  } catch (erro) {
    sessionStorage.removeItem("pedidoConcluido");
  }

  const pedidoValido =
    pedido !== null &&
    typeof pedido.numero === "string" &&
    pedido.numero.trim() !== "" &&
    typeof pedido.cliente === "string" &&
    pedido.cliente.trim() !== "" &&
    typeof pedido.produto === "string" &&
    pedido.produto.trim() !== "" &&
    Number.isFinite(pedido.preco) &&
    pedido.preco >= 0 &&
    Number.isInteger(pedido.quantidade) &&
    pedido.quantidade >= 1 &&
    pedido.quantidade <= 10 &&
    Number.isFinite(pedido.frete) &&
    pedido.frete >= 0;

  if (!pedidoValido) {
    sessionStorage.removeItem("pedidoConcluido");
    window.location.replace("index.html");
    return;
  }

  const subtotal = pedido.preco * pedido.quantidade;
  const total = subtotal + pedido.frete;

  document.querySelector("#mensagemCliente").textContent =
    `${pedido.cliente}, o Seu Adalberto agradece pela sua visita!`;

  document.querySelector("#numeroPedido").textContent = pedido.numero;
  document.querySelector("#pedidoProduto").textContent = pedido.produto;
  document.querySelector("#pedidoQuantidade").textContent = pedido.quantidade;

  document.querySelector("#pedidoSubtotal").textContent =
    formatarMoeda(subtotal);

  document.querySelector("#pedidoFrete").textContent =
    formatarMoeda(pedido.frete);

  document.querySelector("#pedidoTotal").textContent =
    formatarMoeda(total);
}

exibirPedido();