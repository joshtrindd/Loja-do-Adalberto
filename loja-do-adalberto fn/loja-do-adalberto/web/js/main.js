const inputFiltro = document.querySelector("#filtroProduto");
const filtroCategoria = document.querySelector("#filtroCategoria");
const ordenacao = document.querySelector("#ordenacao");
const listaProdutos = document.querySelector("#listaProdutos");
const mensagemFiltro = document.querySelector("#mensagemFiltro");

// Cria uma opção para cada categoria, sem repetições.
const categorias = [...new Set(
  produtos.map((produto) => produto.categoria)
)];

categorias.forEach((categoria) => {
  const opcao = document.createElement("option");
  opcao.value = categoria;
  opcao.textContent = categoria;
  filtroCategoria.appendChild(opcao);
});

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function normalizarTexto(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function atualizarVitrine() {
  const termo = normalizarTexto(inputFiltro.value.trim());
  const categoriaEscolhida = filtroCategoria.value;

  const resultados = produtos.filter((produto) => {
    const correspondeNome =
      normalizarTexto(produto.nome).includes(termo);

    const correspondeCategoria =
      categoriaEscolhida === "" ||
      produto.categoria === categoriaEscolhida;

    return correspondeNome && correspondeCategoria;
  });

  resultados.sort((primeiro, segundo) => {
    if (ordenacao.value === "menorPreco") {
      return primeiro.preco - segundo.preco;
    }

    if (ordenacao.value === "maiorPreco") {
      return segundo.preco - primeiro.preco;
    }

    return primeiro.nome.localeCompare(segundo.nome, "pt-BR");
  });

  listaProdutos.innerHTML = "";

  resultados.forEach((produto, indice) => {
    const cartao = document.createElement("article");
    cartao.className = "col-sm-6 col-lg-4";

    cartao.innerHTML = `
      <div class="card h-100 product-card">
        <div class="product-illustration">
          <img
            src="${produto.imagem}"
            alt="${produto.nome}"
            class="img-fluid"
            width="${produto.largura}" height="${produto.altura}"
            loading="${indice < 3 ? "eager" : "lazy"}">
        </div>

        <div class="card-body">
          <p class="small text-secondary mb-1">
            ${produto.categoria}
          </p>

          <h3 class="h5">${produto.nome}</h3>
          <p>${produto.descricao}</p>
          <p class="price">${formatarMoeda(produto.preco)}</p>

          <a class="btn btn-dark" href="produto.html?id=${produto.id}">
            Ver detalhes
          </a>
        </div>
      </div>
    `;

    listaProdutos.appendChild(cartao);
  });

  mensagemFiltro.textContent = resultados.length === 0
    ? "Nenhum produto encontrado."
    : `${resultados.length} produto(s) encontrado(s).`;
}

inputFiltro.addEventListener("input", atualizarVitrine);
filtroCategoria.addEventListener("change", atualizarVitrine);
ordenacao.addEventListener("change", atualizarVitrine);

atualizarVitrine();
