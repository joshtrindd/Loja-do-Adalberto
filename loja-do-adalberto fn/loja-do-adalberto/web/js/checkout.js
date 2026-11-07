const form = document.querySelector("#checkoutForm");

const cepInput = document.querySelector("#cep");
const buscarCepButton = document.querySelector("#buscarCep");
const cepFeedback = document.querySelector("#cepFeedback");

const logradouroInput = document.querySelector("#logradouro");
const bairroInput = document.querySelector("#bairro");
const cidadeInput = document.querySelector("#cidade");
const estadoInput = document.querySelector("#estado");

const quantidadeInput = document.querySelector("#resumoQuantidade");
const quantidadeFeedback = document.querySelector("#quantidadeFeedback");
const botaoConcluir = form.querySelector('button[type="submit"]');

let buscandoCep = false;

// Formatação e validação
function somenteNumeros(valor) {
  return valor.replace(/\D/g, "");
}

function formatarCep(valor) {
  const numeros = somenteNumeros(valor).slice(0, 8);

  if (numeros.length <= 5) {
    return numeros;
  }

  return `${numeros.slice(0, 5)}-${numeros.slice(5)}`;
}

function cepValido(cep) {
  return somenteNumeros(cep).length === 8;
}

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

// Recupera a compra salva na página do produto
let compra = null;

try {
  compra = JSON.parse(sessionStorage.getItem("compra"));
} catch (erro) {
  sessionStorage.removeItem("compra");
}

const compraValida =
  compra !== null &&
  Number.isInteger(compra.id) &&
  typeof compra.nome === "string" &&
  compra.nome.trim() !== "" &&
  Number.isFinite(compra.preco) &&
  compra.preco >= 0 &&
  Number.isInteger(compra.quantidade) &&
  compra.quantidade >= 1 &&
  compra.quantidade <= 10;

// Calcula e exibe os valores
function atualizarTotais() {
  const subtotal = compra.preco * compra.quantidade;
  const frete = 0;
  const total = subtotal + frete;

  document.querySelector("#resumoSubtotal").textContent =
    formatarMoeda(subtotal);

  document.querySelector("#resumoFrete").textContent =
    formatarMoeda(frete);

  document.querySelector("#resumoTotal").textContent =
    formatarMoeda(total);
}

if (compraValida) {
  document.querySelector("#resumoProduto").textContent = compra.nome;

  document.querySelector("#resumoPreco").textContent =
    formatarMoeda(compra.preco);

  quantidadeInput.value = compra.quantidade;
  atualizarTotais();

  quantidadeInput.addEventListener("input", () => {
    const novaQuantidade = Number(quantidadeInput.value);

    if (
      !Number.isInteger(novaQuantidade) ||
      novaQuantidade < 1 ||
      novaQuantidade > 10
    ) {
      quantidadeFeedback.textContent =
        "Escolha uma quantidade inteira entre 1 e 10.";

      botaoConcluir.disabled = true;
      return;
    }

    quantidadeFeedback.textContent = "";
    botaoConcluir.disabled = false;

    compra.quantidade = novaQuantidade;
    sessionStorage.setItem("compra", JSON.stringify(compra));

    atualizarTotais();
  });
} else {
  document.querySelector("#resumoFeedback").textContent =
    "Escolha um produto na vitrine antes de finalizar a compra.";

  quantidadeInput.disabled = true;
  botaoConcluir.disabled = true;
}

// Limpa o erro quando o CEP é editado
cepInput.addEventListener("input", () => {
  cepInput.setCustomValidity("");
  cepFeedback.textContent = "";
});

// Formata o CEP ao sair do campo
cepInput.addEventListener("blur", () => {
  cepInput.value = formatarCep(cepInput.value);
});

// Consulta o endereço na ViaCEP
buscarCepButton.addEventListener("click", async () => {
  if (buscandoCep) {
    return;
  }

  const cep = somenteNumeros(cepInput.value);

  if (!cepValido(cep)) {
    cepFeedback.textContent = "Digite um CEP com 8 números.";
    cepInput.focus();
    return;
  }

  logradouroInput.value = "";
  bairroInput.value = "";
  cidadeInput.value = "";
  estadoInput.value = "";

  buscandoCep = true;
  buscarCepButton.disabled = true;
  cepInput.readOnly = true;

  buscarCepButton.textContent = "Buscando...";
  cepFeedback.textContent = "Consultando o endereço...";

  try {
    const resposta = await fetch(
      `https://viacep.com.br/ws/${cep}/json/`,
      { signal: AbortSignal.timeout(10000) }
    );

    if (!resposta.ok) {
      throw new Error("Falha na consulta.");
    }

    const endereco = await resposta.json();

    if (endereco?.erro) {
      cepFeedback.textContent =
        "CEP não encontrado. Confira os números digitados.";
      return;
    }

    if (
      typeof endereco?.localidade !== "string" ||
      typeof endereco?.uf !== "string"
    ) {
      throw new Error("Resposta inválida.");
    }

    logradouroInput.value = endereco.logradouro || "";
    bairroInput.value = endereco.bairro || "";
    cidadeInput.value = endereco.localidade;
    estadoInput.value = endereco.uf;

    cepFeedback.textContent =
      "Endereço encontrado! Confira os dados, complete os campos que faltarem e informe o número.";

    document.querySelector("#numero").focus();
  } catch (erro) {
    cepFeedback.textContent =
      "Não foi possível consultar o CEP. Tente novamente ou preencha o endereço manualmente.";
  } finally {
    buscandoCep = false;
    buscarCepButton.disabled = false;
    cepInput.readOnly = false;
    buscarCepButton.textContent = "Buscar CEP";
  }
});

// Valida o formulário e conclui a compra
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!compraValida) {
    return;
  }

  if (buscandoCep) {
    cepFeedback.textContent =
      "Aguarde a consulta do CEP terminar antes de concluir.";
    return;
  }

  const nomeInput = document.querySelector("#nome");
  nomeInput.value = nomeInput.value.trim();
  nomeInput.setCustomValidity(nomeInput.value.length >= 2 ? "" : "Informe seu nome.");
  validarTelefone();
  validarEstado();
  for (const campo of form.querySelectorAll("input, select")) {
    campo.setAttribute("aria-invalid", String(!campo.validity.valid));
  }
  const quantidadeEscolhida = Number(quantidadeInput.value);

  if (
    !Number.isInteger(quantidadeEscolhida) ||
    quantidadeEscolhida < 1 ||
    quantidadeEscolhida > 10
  ) {
    quantidadeFeedback.textContent =
      "Escolha uma quantidade inteira entre 1 e 10.";

    quantidadeInput.focus();
    return;
  }

  cepInput.setCustomValidity(
    cepValido(cepInput.value) ? "" : "CEP inválido"
  );

  cepInput.setAttribute("aria-invalid", String(!cepInput.validity.valid));
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    form.querySelector(":invalid")?.focus();
    return;
  }

  compra.quantidade = quantidadeEscolhida;
  sessionStorage.setItem("compra", JSON.stringify(compra));

  const nome = document.querySelector("#nome").value.trim();

const pedido = {
  numero: `PED-${Math.floor(100000 + Math.random() * 900000)}`,
  cliente: nome,
  produto: compra.nome,
  preco: compra.preco,
  quantidade: compra.quantidade,
  frete: 0
};

sessionStorage.setItem("pedidoConcluido", JSON.stringify(pedido));
sessionStorage.removeItem("compra");

  window.location.href = "sucesso.html";
});

// A formatação ao sair do campo preserva a edição no meio do número.
const telefoneInput = document.querySelector("#telefone");
const ufInput = document.querySelector("#estado");
const estadosValidos = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

function validarTelefone() {
  const numeros = somenteNumeros(telefoneInput.value);
  const valido = telefoneInput.value.trim() === "" || numeros.length === 10 || numeros.length === 11;
  telefoneInput.setCustomValidity(valido ? "" : "Informe o telefone com DDD.");
}

function validarEstado() {
  ufInput.value = ufInput.value.trim().toUpperCase();
  ufInput.setCustomValidity(estadosValidos.includes(ufInput.value) ? "" : "Informe uma UF válida.");
}

telefoneInput.addEventListener("blur", () => {
  const numeros = somenteNumeros(telefoneInput.value);
  if (numeros.length === 10 || numeros.length === 11) {
    const corte = numeros.length - 4;
    telefoneInput.value = `(${numeros.slice(0, 2)}) ${numeros.slice(2, corte)}-${numeros.slice(corte)}`;
  }
  validarTelefone();
});

for (const campo of form.querySelectorAll("input, select")) {
  campo.addEventListener("input", () => {
    campo.setCustomValidity("");
    if (campo === telefoneInput) validarTelefone();
    if (campo === ufInput) validarEstado();
    campo.setAttribute("aria-invalid", String(!campo.validity.valid));
  });
}
