const formProduto = document.querySelector("#formProduto");
const quantidade = document.querySelector("#quantidade");
const feedback = document.querySelector("#produtoFeedback");

formProduto?.addEventListener("submit", (event) => {
  event.preventDefault();
  const quantidadeEscolhida = Number(quantidade.value);

  if (!Number.isInteger(quantidadeEscolhida) || quantidadeEscolhida < 1 || quantidadeEscolhida > 10) {
    feedback.textContent = "Escolha uma quantidade entre 1 e 10.";
    quantidade.focus();
    return;
  }

if (!produtoAtual) {
  return;
}

const compra = {
  id: produtoAtual.id,
  nome: produtoAtual.nome,
  preco: produtoAtual.preco,
  quantidade: quantidadeEscolhida
};

sessionStorage.setItem("compra", JSON.stringify(compra));
window.location.href = "checkout.html";
});

const parametros = new URLSearchParams(window.location.search);
const idProduto = Number(parametros.get("id"));
const produtoAtual = produtos.find((produto) => produto.id === idProduto);

if (!produtoAtual) {
  document.querySelector("#produtoNome").textContent = "Produto não encontrado";
  document.querySelector("#produtoDescricao").textContent =
    "Não encontramos esse produto. Volte à vitrine para escolher outro.";
  document.querySelector("#produtoCaminho").textContent = "Produto não encontrado";
  document.querySelector("#formProduto").hidden = true;
  document.querySelector("#produtoImagem").hidden = true;
  document.title = "Produto não encontrado | Loja do Adalberto";
} else {
  document.querySelector("#produtoCaminho").textContent = produtoAtual.nome;
  document.querySelector("#produtoCategoria").textContent = produtoAtual.categoria;
  document.querySelector("#produtoNome").textContent = produtoAtual.nome;
  document.querySelector("#produtoDescricao").textContent = produtoAtual.descricao;

  document.querySelector("#produtoPreco").textContent =
    produtoAtual.preco.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

  document.title = `${produtoAtual.nome} | Loja do Adalberto`;
  document.querySelector('meta[name="description"]').content = produtoAtual.descricao;
  document.querySelector("#produtoDescricaoDetalhada").textContent = produtoAtual.descricaoDetalhada;
  document.querySelector("#produtoRegra").textContent = produtoAtual.regra;
  document.querySelector("#produtoMaterial").textContent = produtoAtual.material;
  document.querySelector("#produtoDimensoes").textContent = produtoAtual.dimensoes;
  const imagem = document.querySelector("#produtoImagem");
  imagem.src = produtoAtual.imagem;
  imagem.alt = produtoAtual.nome;
  imagem.width = produtoAtual.largura;
  imagem.height = produtoAtual.altura;

  const listaDetalhes = document.querySelector("#listaDetalhes");

  produtoAtual.detalhes.forEach((detalhe) => {
    const item = document.createElement("li");
    item.textContent = detalhe;
    listaDetalhes.appendChild(item);
  });
}
