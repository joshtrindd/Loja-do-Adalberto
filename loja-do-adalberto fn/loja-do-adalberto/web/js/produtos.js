const produtos = [
  {
    "id": 1,
    "nome": "Caneta de Desenhar Portais",
    "categoria": "Acessórios Mágicos",
    "preco": 689.9,
    "imagem": "img/caneta.webp",
    "descricao": "Caneta mágica que cabe no bolso e transforma desenhos em portais para dimensões e lugares aleatórios.",
    "detalhes": [
      "Cabe no bolso.",
      "Transforma desenhos em portais.",
      "Cada portal leva a um destino aleatório."
    ],
    "regra": "Caber em um bolso",
    "material": "Liga de tinta dimensional e alumínio encantado",
    "dimensoes": "14 cm de comprimento",
    "modoUso": "Desenhe um arco em uma superfície livre, toque o centro e aguarde o portal se abrir. O destino é aleatório, por isso leve sua curiosidade e um mapa de volta.",
    "descricaoDetalhada": "Caneta mágica que cabe no bolso e transforma desenhos em portais para dimensões e lugares aleatórios. Desenhe um arco em uma superfície livre, toque o centro e aguarde o portal se abrir. O destino é aleatório, por isso leve sua curiosidade e um mapa de volta.",
    "largura": 800,
    "altura": 800
  },
  {
    "id": 2,
    "nome": "Aspirador de Furacões — StormVac Titan X-500",
    "categoria": "Máquinas Colossais",
    "preco": 18750000000,
    "imagem": "img/apirafura.webp",
    "descricao": "Máquina colossal de 500 metros que aspira furacões e transforma sua força em energia e ventos controlados.",
    "detalhes": [
      "Tem 500 metros de altura.",
      "Aspira furacões.",
      "Transforma tempestades em energia."
    ],
    "regra": "Não caber em um avião",
    "material": "Aço de nuvem e turbinas de energia atmosférica",
    "dimensoes": "500 metros de altura",
    "modoUso": "Posicione a máquina em uma área desocupada e ajuste a direção das turbinas. O coletor transforma a força do furacão em energia para cidades imaginárias.",
    "descricaoDetalhada": "Máquina colossal de 500 metros que aspira furacões e transforma sua força em energia e ventos controlados. Posicione a máquina em uma área desocupada e ajuste a direção das turbinas. O coletor transforma a força do furacão em energia para cidades imaginárias.",
    "largura": 800,
    "altura": 800
  },
  {
    "id": 3,
    "nome": "Patins de Cometas CosmicGlide X-9000",
    "categoria": "Equipamentos Espaciais",
    "preco": 2499990,
    "imagem": "img/patins.webp",
    "descricao": "Patins espaciais para surfar nas caudas dos cometas e explorar o universo.",
    "detalhes": [
      "Feitos para uso no espaço.",
      "Possuem propulsão cósmica.",
      "Têm proteção antigravitacional."
    ],
    "regra": "Ser usado no espaço sideral",
    "material": "Fibra estelar e rodas de poeira de cometa",
    "dimensoes": "Tamanho ajustável do 34 ao 44",
    "modoUso": "Prenda os patins ao traje espacial, ative a proteção antigravitacional e escolha uma cauda de cometa para começar a viagem. A propulsão cósmica acompanha seus movimentos.",
    "descricaoDetalhada": "Patins espaciais para surfar nas caudas dos cometas e explorar o universo. Prenda os patins ao traje espacial, ative a proteção antigravitacional e escolha uma cauda de cometa para começar a viagem. A propulsão cósmica acompanha seus movimentos.",
    "largura": 800,
    "altura": 800
  },
  {
    "id": 4,
    "nome": "Pendrive de Sonhos",
    "categoria": "Tecnologia Mágica",
    "preco": 199.9,
    "imagem": "img/pendrive.webp",
    "descricao": "Pendrive mágico que cabe no bolso e grava os sonhos enquanto você dorme.",
    "detalhes": [
      "Cabe no bolso.",
      "Grava sonhos durante a noite.",
      "Permite assistir às aventuras em 4K."
    ],
    "regra": "Caber em um bolso",
    "material": "Cristal de memória onírica e capa de silicone",
    "dimensoes": "5 cm de comprimento",
    "modoUso": "Deixe o pendrive próximo ao travesseiro antes de dormir. Pela manhã, conecte-o ao computador para rever os sonhos e organizar suas aventuras noturnas em pastas.",
    "descricaoDetalhada": "Pendrive mágico que cabe no bolso e grava os sonhos enquanto você dorme. Deixe o pendrive próximo ao travesseiro antes de dormir. Pela manhã, conecte-o ao computador para rever os sonhos e organizar suas aventuras noturnas em pastas.",
    "largura": 800,
    "altura": 800
  },
  {
    "id": 5,
    "nome": "Portão para Universos Paralelos",
    "categoria": "Tecnologia Dimensional",
    "preco": 999999999.9,
    "imagem": "img/portao.webp",
    "descricao": "Portal gigantesco de 800 metros para viajar entre universos paralelos.",
    "detalhes": [
      "Tem 800 metros de altura.",
      "Permite visitar realidades alternativas.",
      "Pode levar a mundos muito diferentes do nosso."
    ],
    "regra": "Não caber em um avião",
    "material": "Pedra dimensional e circuitos de luz",
    "dimensoes": "800 metros de altura",
    "modoUso": "Escolha uma realidade no painel e aguarde o contorno do portão acender. A passagem conecta universos fictícios, de cidades de dinossauros a países governados por gatos.",
    "descricaoDetalhada": "Portal gigantesco de 800 metros para viajar entre universos paralelos. Escolha uma realidade no painel e aguarde o contorno do portão acender. A passagem conecta universos fictícios, de cidades de dinossauros a países governados por gatos.",
    "largura": 800,
    "altura": 800
  },
  {
    "id": 6,
    "nome": "Mochila de Oxigênio Infinito",
    "categoria": "Equipamentos Espaciais",
    "preco": 199999.9,
    "imagem": "img/mochila.webp",
    "descricao": "Mochila espacial que fornece oxigênio ilimitado para explorar o universo.",
    "detalhes": [
      "Feita para uso no espaço.",
      "Fornece oxigênio ilimitado.",
      "Sua inteligência artificial conta piadas e detecta alienígenas."
    ],
    "regra": "Ser usado no espaço sideral",
    "material": "Tecido antigravitacional e reservatório de ar mágico",
    "dimensoes": "45 × 30 × 15 cm",
    "modoUso": "Ajuste as alças sobre o traje e conecte a saída de oxigênio. Durante a exploração, a inteligência artificial acompanha a rota, identifica visitantes e conta piadas ruins.",
    "descricaoDetalhada": "Mochila espacial que fornece oxigênio ilimitado para explorar o universo. Ajuste as alças sobre o traje e conecte a saída de oxigênio. Durante a exploração, a inteligência artificial acompanha a rota, identifica visitantes e conta piadas ruins.",
    "largura": 800,
    "altura": 800
  }
];
