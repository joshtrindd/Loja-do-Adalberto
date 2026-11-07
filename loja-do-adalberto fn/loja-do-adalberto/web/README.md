# Loja Impossível — exercício de front-end

Olá! Neste projeto, você e seu grupo receberam a base de uma pequena loja virtual. Ela já possui uma vitrine, uma página de produto, um checkout e uma página de confirmação, mas ainda está incompleta e precisa ganhar uma identidade totalmente nova.

A missão é transformar o projeto em uma loja de **produtos inéditos, inventados por vocês e que não existem no mundo real**. Além de imaginar os produtos, o grupo deverá melhorar a estrutura HTML, criar uma identidade visual responsiva e desenvolver as interações com JavaScript.

Não existe uma única solução correta. Queremos ver criatividade, cuidado com quem usa a página e capacidade de explicar as decisões tomadas.

## O desafio criativo

Cada produto da loja deve obedecer a pelo menos uma das regras abaixo:

- caber em um bolso;
- não caber em um avião;
- ser usado no espaço sideral;
- servir em uma formiga;
- começar com a letra Z;
- ser de uso único.

A loja deve possuir produtos variados. Ao criar o catálogo (de pelo menos 2 produtos), distribuam as regras entre os produtos em vez de usar a mesma regra em todos eles.

Alguns exemplos para inspirar — não é necessário utilizá-los:

- um guarda-chuva de bolso que prevê onde a chuva cairá;
- uma estação de descanso para formigas astronautas;
- um jardim flutuante maior que um avião;
- um “Zumbilume” que ilumina sonhos uma única vez.

Para cada produto, criem pelo menos:

- nome;
- categoria;
- preço fictício;
- descrição curta;
- descrição detalhada;
- imagem ou ilustração;
- regra do desafio atendida;
- informações adicionais, como material, dimensões ou modo de uso.

## Antes de começar

Executem o projeto e percorram o fluxo completo:

```text
Vitrine → Produto → Checkout → Compra concluída
```

Testem o filtro, a seleção de quantidade, o formulário e a finalização da compra. Usem o DevTools para observar o HTML, o Console, a responsividade e os dados salvos no navegador.

O projeto utiliza Bootstrap. Antes de alterar o código, consultem a [documentação oficial do Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) e procurem compreender o Grid, os breakpoints e as classes já presentes no projeto. Vocês deverão ser capazes de explicar o código que entregarem.

## Atividades de HTML

Atualizem **todas as páginas** para que conteúdo, estrutura e identidade pertençam à nova loja. Não deixem textos, produtos, títulos ou informações da versão original.

### Conteúdo e identidade

- [ ] Criar um nome, uma proposta e uma personalidade para a loja.
- [ ] Atualizar logotipo, cabeçalho, navegação, rodapé, títulos, textos e botões em todas as páginas.
- [ ] Criar um favicon próprio e adicioná-lo a todas as páginas.
- [ ] Trocar todos os produtos atuais pelos produtos inventados pelo grupo.
- [ ] Usar imagens coerentes, leves e com licença adequada, ou criar ilustrações próprias.
- [ ] Escrever textos alternativos que descrevam a função ou o conteúdo de cada imagem.
- [ ] Manter informações consistentes entre vitrine, página de produto, checkout e confirmação.

### Estrutura e semântica

- [ ] Definir corretamente o idioma da página com o atributo `lang`.
- [ ] Criar um `<title>` específico e descritivo para cada página.
- [ ] Revisar o uso de `header`, `nav`, `main`, `section`, `article`, `aside` e `footer`.
- [ ] Corrigir a hierarquia de títulos, começando por um único `h1` que represente o assunto principal.
- [ ] Usar links para navegação e botões para ações.
- [ ] Associar todos os campos de formulário aos seus respectivos `label`.
- [ ] Agrupar campos relacionados com elementos adequados, como `fieldset` e `legend`, quando fizer sentido.
- [ ] Garantir que links, botões, imagens e campos tenham nomes compreensíveis para tecnologias assistivas.
- [ ] Preparar áreas de feedback com `aria-live` para mensagens de carregamento, sucesso e erro.

### Metadados, compartilhamento e desempenho

- [ ] Adicionar `meta charset` e `meta viewport` corretamente em todas as páginas.
- [ ] Criar uma `meta description` específica para cada página.
- [ ] Adicionar metadados básicos de compartilhamento social, como Open Graph.
- [ ] Evitar recursos duplicados ou arquivos que não sejam utilizados.
- [ ] Carregar scripts com `defer` quando apropriado.
- [ ] Informar `width` e `height` nas imagens para reduzir mudanças inesperadas no layout.
- [ ] Usar `loading="lazy"` nas imagens que não aparecem imediatamente na primeira tela.
- [ ] Escolher formatos e dimensões de imagem adequados, evitando arquivos muito maiores que o necessário.
- [ ] Verificar a página com Lighthouse ou ferramenta semelhante e registrar oportunidades de melhoria.

## Atividades de CSS

O Bootstrap deve ser usado como base para Grid, espaçamentos, formulários, botões e componentes. O grupo também pode — e deve — criar CSS próprio para dar personalidade à loja. Não substituam o projeto inteiro por um template pronto.

### Identidade visual

- [ ] Definir uma paleta de cores e documentá-la com variáveis CSS.
- [ ] Escolher uma tipografia legível e criar uma hierarquia visual clara.
- [ ] Padronizar espaçamentos, bordas, sombras, ícones e cantos arredondados.
- [ ] Personalizar cartões de produtos, botões, formulário, resumo da compra e mensagens de feedback.
- [ ] Criar estados de `hover`, `focus-visible`, ativo, carregando, desabilitado, sucesso e erro.
- [ ] Garantir contraste suficiente entre texto, fundo, links e controles.

### Bootstrap e responsividade

- [ ] Utilizar `container`, `row`, colunas e breakpoints do Bootstrap de forma consciente.
- [ ] Evitar repetir no CSS o que já pode ser resolvido com classes utilitárias simples do Bootstrap.
- [ ] Usar CSS próprio quando a identidade visual ou o comportamento desejado não estiverem disponíveis no framework.
- [ ] Fazer a grade de produtos se adaptar a celulares, tablets e telas maiores.
- [ ] Revisar menu, imagens, cartões, página de detalhes, formulário e resumo do checkout em telas estreitas.
- [ ] Impedir rolagem horizontal e elementos cortados ou sobrepostos.
- [ ] Garantir áreas de toque confortáveis para botões e links em dispositivos móveis.
- [ ] Testar zoom de texto e conteúdos longos sem quebrar o layout.
- [ ] Respeitar `prefers-reduced-motion` caso sejam utilizadas animações.

## Atividades de JavaScript

O JavaScript deverá permanecer separado do HTML, com nomes claros, funções de responsabilidade compreensível e sem bibliotecas extras para tarefas simples.

### Produtos e navegação

- [ ] Representar os produtos com arrays e objetos, evitando repetir os mesmos dados em vários arquivos.
- [ ] Gerar ou atualizar a vitrine com os dados do catálogo.
- [ ] Usar `URLSearchParams` para ler o `id` da URL e exibir o produto correto em `produto.html`.
- [ ] Tratar um `id` inexistente com mensagem amigável e link para voltar à vitrine.
- [ ] Fazer filtros e busca funcionarem com os novos produtos.
- [ ] Implementar filtro por categoria ou pela regra criativa atendida pelo produto.
- [ ] Adicionar ordenação por nome ou preço.

### Jornada de compra

- [ ] Fazer quantidade, produto e preço seguirem corretamente para o checkout.
- [ ] Calcular subtotal, frete e total sem valores fixos no HTML.
- [ ] Atualizar o resumo sempre que a quantidade mudar.
- [ ] Salvar somente os dados necessários em `sessionStorage` ou `localStorage`.
- [ ] Criar um carrinho com mais de um produto como desafio adicional.
- [ ] Impedir o acesso direto à página de sucesso quando nenhuma compra tiver sido concluída.
- [ ] Exibir na página de sucesso um resumo coerente da compra realizada.

### Formulário e consumo de API

- [ ] Validar os campos do checkout e mostrar mensagens específicas próximas ao problema.
- [ ] Manter as mensagens acessíveis para leitores de tela.
- [ ] Formatar telefone e CEP sem dificultar a digitação ou a correção dos valores.
- [ ] Consultar a API ViaCEP com `fetch` ao buscar um CEP.
- [ ] Remover caracteres não numéricos e validar se o CEP possui oito dígitos antes da requisição.
- [ ] Mostrar um estado de carregamento durante a consulta.
- [ ] Preencher logradouro, bairro, cidade e UF com a resposta da API; o número permanece manual.
- [ ] Tratar CEP inexistente, campos ausentes, falha de internet, resposta inválida e uma segunda busca.
- [ ] Usar `try`, `catch` e verificação de resposta para que falhas não quebrem a página.

Consultem a [documentação oficial da ViaCEP](https://viacep.com.br/) antes de implementar. Como desafio extra, o grupo pode consumir outra API pública relacionada à proposta da loja, desde que explique sua utilidade, trate erros e não exponha chaves secretas no código.

## Testes obrigatórios

Antes da entrega, testem e registrem o resultado dos seguintes cenários:

- [ ] navegação completa usando somente o teclado;
- [ ] celular, tablet e desktop;
- [ ] filtro sem resultados;
- [ ] um produto válido e outro produto válido diferente;
- [ ] URL com produto inexistente, como `produto.html?id=999`;
- [ ] alteração da quantidade e atualização dos totais;
- [ ] formulário vazio e e-mail inválido;
- [ ] CEP incompleto, CEP real e CEP inexistente;
- [ ] falha de rede durante a consulta de CEP;
- [ ] atualização das páginas sem perda indevida do fluxo;
- [ ] tentativa de abrir diretamente a página de sucesso;
- [ ] Console do navegador sem erros no fluxo principal.

## Entrega

O projeto final deve conter:

```text
index.html
produto.html
checkout.html
sucesso.html
css/
js/
README.md
```

Atualizem este README com uma seção chamada `Melhorias realizadas`. Nela, apresentem:

- nome e conceito da loja;
- lista dos produtos e a regra atendida por cada um;
- principais mudanças de HTML, CSS e JavaScript;
- APIs utilizadas;
- testes realizados;
- dificuldades encontradas e como foram resolvidas;
- integrantes do grupo.

## Critérios de avaliação

- criatividade e coerência dos produtos inventados;
- qualidade do conteúdo e da identidade da loja;
- HTML semântico, metadados, acessibilidade e desempenho;
- uso consciente do Bootstrap e qualidade das customizações;
- responsividade e experiência em diferentes telas;
- organização, clareza e funcionamento do JavaScript;
- consumo de API e tratamento de erros;
- consistência da jornada de compra;
- qualidade dos testes e capacidade de explicar as decisões.

## Combinado principal

Vocês podem pesquisar documentação, exemplos e referências e podem conversar sobre soluções com colegas. Entretanto, toda pessoa do grupo deve ser capaz de responder:

> O que este código faz, por que ele está aqui e como sabemos que funciona?

Divirtam-se com a ideia. Quanto mais estranha for a loja, mais importante será tornar sua interface clara, consistente e agradável de usar.


## Melhorias realizadas

### Loja e conceito

A Loja do Adalberto reúne invenções impossíveis para aventuras extraordinárias.
A proposta é apresentar os produtos com clareza e permitir uma compra educacional simulada.
Todos os materiais e mecanismos descritos nos produtos são fictícios.

### Como executar

1. Extraia todo o ZIP, mantendo as pastas `css`, `js` e `img` dentro de `web`.
2. Abra a pasta `web` no VS Code e use o Live Server para abrir `index.html`.
3. Outra opção é executar `python -m http.server 8000` dentro de `web` e acessar `http://localhost:8000`.
4. Percorra vitrine, detalhes, checkout e confirmação na mesma aba.

É necessária conexão à internet para o Bootstrap e a consulta ViaCEP.
O pedido usa `sessionStorage`, associado à aba do navegador. Use dados fictícios.
A compra simula um produto por vez e permite de uma a dez unidades. O frete é grátis.

### Produtos e regras criativas

| Produto | Regra | Informação adicional |
| --- | --- | --- |
| Caneta de Desenhar Portais | Cabe no bolso | 14 cm de comprimento |
| Aspirador de Furacões | Não cabe em um avião | 500 metros de altura |
| Patins de Cometas | Usado no espaço sideral | Propulsão cósmica e proteção antigravitacional |
| Pendrive de Sonhos | Cabe no bolso | 5 cm de comprimento |
| Portão para Universos Paralelos | Não cabe em um avião | 800 metros de altura |
| Mochila de Oxigênio Infinito | Usada no espaço sideral | 45 × 30 × 15 cm |

Cada item tem nome, categoria, preço, imagem, descrição curta, descrição detalhada,
regra criativa, material, dimensões e instruções de uso no catálogo.

### HTML e acessibilidade

- Identidade da Loja do Adalberto nas quatro páginas, inclusive títulos, descrições, cabeçalhos e rodapés.
- Um título principal por página, estrutura semântica e formulário com grupos de campos e labels.
- Favicon SVG, metadados Open Graph, idioma e cor do navegador.
- Mensagens de erro associadas aos campos e áreas de feedback acessíveis.
- Atalho para pular ao conteúdo e foco visível para navegação com teclado.
- Dimensões das imagens informadas e carregamento adiado para produtos fora da primeira linha.

### CSS e identidade visual

- Fundo azul-escuro `#111923`, cartões `#1b2838`, texto claro `#f5f1e9` e destaque âmbar `#f5c078`.
- Paleta documentada nas variáveis CSS, imagens ajustadas, botões e formulários personalizados.
- Grade Bootstrap responsiva e correção do transbordamento provocado pelos espaçamentos nas telas estreitas.
- Estados de foco, hover, ativo, carregamento, desabilitado e erro.
- Preferência `prefers-reduced-motion` respeitada.

### JavaScript

- Catálogo único em `js/produtos.js`, compartilhado entre vitrine e detalhes.
- Vitrine gerada pelo catálogo, busca sem diferenciar acentos, filtro por categoria e ordenação por nome ou preço.
- Detalhes selecionados com `URLSearchParams` e mensagem amigável para IDs inexistentes.
- Produto e quantidade encaminhados ao checkout, com subtotal, frete e total calculados.
- Quantidade editável no checkout, atualização imediata dos totais e persistência ao recarregar.
- Validação de quantidade, nome em branco, telefone, e-mail, endereço, UF, pagamento e termos.
- Formatação de telefone e CEP ao sair do campo, preservando a edição durante a digitação.
- Pedido confirmado salvo na sessão, resumo coerente e redirecionamento ao tentar abrir a confirmação sem pedido.
- A compra em andamento é encerrada após a confirmação.

### API utilizada

ViaCEP — `https://viacep.com.br/`.
Consulta com `fetch`, somente após validar oito dígitos. O código verifica a resposta HTTP,
trata CEP inexistente, JSON inválido, campos ausentes, falha de rede e tempo limite de dez segundos.
O endereço anterior é limpo antes de uma nova busca, os controles indicam carregamento e o número permanece manual.
Em caso de falha, o endereço pode ser preenchido manualmente.

### Desempenho e revisão técnica

As imagens originais somavam 18.09 MB. A versão WebP e o favicon somam
0.87 MB, uma redução aproximada de 95.2%.
Foram retirados os arquivos de imagem antigos sem uso.

Foi usada uma auditoria pelo Chrome, com Performance Navigation Timing e inspeção do DOM,
em vez de uma pontuação Lighthouse. No teste local, DOMContentLoaded ocorreu em
747 ms e o carregamento em 872 ms.
Essas medidas descrevem uma execução local e variam conforme dispositivo e conexão.
Os próximos pontos de observação em uma hospedagem são latência da API e carregamento do Bootstrap.
Os metadados sociais usam caminhos locais; ao publicar, configure a URL pública absoluta de imagem e página conforme a hospedagem.

As combinações principais de cores foram verificadas por cálculo de contraste.

- Texto principal sobre o fundo — 15.70:1.
- Texto secundário sobre os cartões — 8.81:1.
- Texto dos botões sobre o destaque — 9.83:1.
- Mensagem de erro sobre o fundo — 10.48:1.

### Testes realizados

Testes automatizados no Chrome em computador Windows, incluindo larguras de 375, 768 e 1366 px.
A simulação de larguras não substitui uma revisão em aparelhos físicos ou com leitor de tela.

- [x] Bootstrap carregado e seis produtos gerados pelo catálogo.
- [x] Busca com e sem resultados, acentos, categoria e ordenação.
- [x] Vitrine sem rolagem horizontal em 375, 768 e 1366 px.
- [x] Seis produtos, imagens, informações detalhadas e IDs inválidos.
- [x] Checkout sem compra bloqueado e confirmação sem pedido redirecionada.
- [x] Quantidade, totais, persistência, formulário vazio, nome em branco, e-mail e telefone.
- [x] ViaCEP simulada: CEP incompleto, existente, inexistente, nova busca, rede, HTTP, JSON e campos ausentes.
- [x] UF inválida, finalização, resumo coerente e atualização da confirmação.
- [x] Detalhes, checkout e confirmação sem rolagem horizontal em três larguras.
- [x] Fluxo completo de compra usando teclado.
- [x] Ampliação de texto para 200% na vitrine.
- [x] Preferência de movimento reduzido respeitada.
- [x] Nenhuma exceção JavaScript não tratada nos cenários executados.
- [x] index.html — h1, favicon, Open Graph, IDs, labels, descrições de erro e texto ampliado conferidos.
- [x] produto.html?id=1 — h1, favicon, Open Graph, IDs, labels, descrições de erro e texto ampliado conferidos.
- [x] checkout.html — h1, favicon, Open Graph, IDs, labels, descrições de erro e texto ampliado conferidos.
- [x] sucesso.html — h1, favicon, Open Graph, IDs, labels, descrições de erro e texto ampliado conferidos.
- [x] ViaCEP real — endereço de São Paulo preenchido.
- [x] Console sem erros na auditoria final com consulta real ViaCEP.
- [x] Sintaxe dos cinco scripts, referências locais, tags HTML e IDs únicos.
- [x] Todas as páginas com texto ampliado para 200% em largura de celular, sem rolagem horizontal.
- [x] Contraste das combinações principais de texto e fundo acima de 4,5:1.

Os erros de rede e respostas inválidas foram testados com respostas simuladas para garantir repetibilidade.
A consulta de CEP existente também foi executada contra a ViaCEP real.

### Dificuldades e soluções

- A vitrine tentava carregar um catálogo que não existia. A lista foi movida para `produtos.js`, carregado antes dos scripts consumidores.
- Cartões e IDs duplicados foram removidos, mantendo um único contêiner para os produtos.
- A estrutura da página de detalhes foi corrigida e o formulário reposicionado na coluna correta.
- O nome preenchido somente com espaços passou a ser rejeitado antes de gravar o pedido.
- O excesso de largura em telas pequenas foi corrigido alinhando o espaçamento do contêiner ao Grid do Bootstrap.
- A consulta de CEP recebeu validação, mensagens e recuperação após falhas.
- As imagens grandes foram redimensionadas e convertidas para WebP.

### Integrantes e origem das imagens

Integrante: Joshua Trindade.

Origem das imagens: obtidas pelo ChatGPT, conforme informado por Joshua Trindade.
As imagens fornecidas foram redimensionadas e convertidas para WebP nesta revisão.
O favicon SVG foi criado para esta versão do projeto.

### Organização

A entrega executável está em `web`. As pastas `.skills`, `.specs` e `docs` foram preservadas do ZIP recebido e contêm referências anteriores, incluindo o conceito FormiFofo. O enunciado deste exercício está neste README.
