# D-Oryzon | Website Oficial & Hunt Jobs

Website institucional e catálogo de serviços da **D-Oryzon**, marca independente com foco em soluções integradas em software, firmware, automação técnica e inovação na região do ABC Paulista.

---

## 🚀 Portfólio de Serviços & Soluções
*   **Hunt Jobs (Buscador de Vagas com IA):** Painel do candidato para busca inteligente de vagas. Integra consultas simultâneas na API da Gupy (vagas CLT, estágio e júnior no Brasil) e no WeWorkRemotely (vagas internacionais remotas), avaliando compatibilidades de perfil com Inteligência Artificial.
*   **Sistemas Embarcados & IoT:** Desenvolvimento de firmware robusto em C/C++ para microcontroladores (ESP32, Arduino) voltados para telemetria, sensores industriais e prevenção de falhas em ativos comerciais.
*   **Automação & CLI:** Scripts otimizados (Python, C#, C++) para linha de comando, ideais para processamento rápido de dados, relatórios e automação operacional.
*   **Web & Mobile:** Criação de sites modernos, landing pages de alta performance, e-commerces integrados e aplicativos mobile sob medida para expandir pequenos comércios e startups.
*   **Engenharia de Jogos:** Desenvolvimento de advergames promocionais e mecânicas personalizadas em motores gráficos modernos.

---

## 🛠️ Tecnologias e Funcionalidades do Frontend
O site foi desenvolvido com foco em desempenho, leveza e aderência à soberania digital (arquitetura estática pura, ideal para hospedagem descentralizada ou no GitHub Pages):

1.  **Frontend Vanilla:** HTML5, CSS3 moderno e JavaScript puro, sem dependências ou frameworks pesados, garantindo carregamento instantâneo.
2.  **Área do Candidato ("Hunt Jobs"):** Interface dinâmica contendo formulário de login/cadastro de usuários, painel de edição de habilidades/stacks, e buscador inteligente.
3.  **Checkout Pix Wise Integrado:** Modal interativo de checkout que gera a linha digitável "Copia e Cola" e o QR Code oficial apontando diretamente para a conta Wise da D-Oryzon para ativação do plano Premium.
4.  **Sistema Multi-idioma & Moeda Dinâmica (`lang.js`):**
    *   Tradução completa de todas as páginas entre Português (PT-BR) e Inglês (EN).
    *   Detecção automática de idioma baseada nas preferências do navegador e armazenamento da escolha do usuário em `localStorage`.
    *   Mudança dinâmica de precificação: exibe valores em Real (R$) quando em português e em Dólar ($) / Euro (€) quando em inglês.
5.  **Meta de Impacto Social Integrada:** Painel exibindo o compromisso público de destinar 25% da receita líquida mensal para ONGs parceiras no ABC Paulista.

---

## 📁 Estrutura do Projeto
```bash
SiteAtualizado/
├── index.html          # Apresentação da empresa e meta social
├── embarcados.html     # Catálogo de Sistemas Embarcados & IoT
├── automacao.html      # Catálogo de ferramentas CLI e Automações
├── web-mobile.html     # Catálogo de soluções Web & Aplicativos Móveis
├── jogos.html          # Portfólio de engenharia de jogos (Ex: PlayTypus)
├── sobre.html          # Perfil do especialista e contatos pessoais
├── vagas.html          # Painel do candidato "Hunt Jobs" com checkout Pix
├── lang.js             # Script do motor de idiomas, navegação e preços
└── medias/             # Assets estáticos, vídeos e imagens de projetos
```

---

## 🔒 Segurança de Arquivos e Integração
*   **Segurança de Chaves:** O código do frontend é estático e **público**, portanto não armazena nenhuma chave de API, senhas ou tokens privados. 
*   **Consumo de API:** Todas as chamadas dinâmicas (cadastro, login, preferências e busca de vagas) são feitas via chamadas assíncronas (`fetch`) para a API do backend local ou em VPS rodando na porta 8000.
