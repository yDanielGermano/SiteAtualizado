// lang.js - D-Oryzon Multi-language and Dynamic Pricing Script
const translations = {
    // Navigation
    "nav-home": { pt: "A Empresa", en: "About Us" },
    "nav-embedded": { pt: "Sistemas Embarcados", en: "Embedded Systems" },
    "nav-automation": { pt: "Automação & CLI", en: "Automation & CLI" },
    "nav-web-mobile": { pt: "Web & Mobile", en: "Web & Mobile" },
    "nav-games": { pt: "Jogos", en: "Games" },
    "nav-specialist": { pt: "O Especialista", en: "The Specialist" },

    // Footer
    "footer-text": { 
        pt: "&copy; 2026 D-Oryzon. Soluções Independentes em Tecnologia. Atendimento na Região do ABC.", 
        en: "&copy; 2026 D-Oryzon. Independent Solutions in Technology. Serving the Greater ABC Region." 
    },

    // index.html
    "index-title": { pt: "Sobre a D-Oryzon", en: "About D-Oryzon" },
    "index-p1": { 
        pt: "A D-Oryzon Technologies é uma marca brasileira de tecnologia focada no desenvolvimento de softwares e firmwares no geral. Sediada na região do ABC Paulista, o nosso grande diferencial é o compromisso de utilizar 25% de todo o lucro líquido obtido para ações beneficentes, doações a ONGs e instituições públicas que lutam por um futuro mais digno e próspero.", 
        en: "D-Oryzon Technologies is a Brazilian technology brand focused on the development of software and firmware in general. Based in the ABC Paulista region, our major differentiator is our commitment to donating 25% of all net profits to charities, local NGOs, and public institutions fighting for a better and fairer future." 
    },
    "index-p2": { 
        pt: "Para garantir transparência absoluta com nossos clientes e parceiros, divulgamos mensalmente um balanço detalhado de nossas despesas, receitas e doações efetuadas nas nossas redes sociais. Acreditamos que, ao viabilizar e impulsionar o sucesso tecnológico de comércios e empreendedores locais, podemos construir juntos uma corrente de impacto social real e duradouro.", 
        en: "To ensure absolute transparency with our clients and partners, we monthly publish a detailed financial report of our expenses, revenues, and donations on our social networks. We believe that by driving the technological success of local merchants and entrepreneurs, we can build a real and lasting social impact together." 
    },
    "index-impact-title": { pt: "Impacto Social: Meta de Arrecadação Atual", en: "Social Impact: Current Fundraising Goal" },
    "index-impact-p": { 
        pt: "Todo mês uma ONG ou instituição sem fins lucrativos local ou nacional é selecionada como a 'Instituição do Mês'. Essa organização recebe 25% do valor arrecadado com nossos serviços, ajudando-a diretamente a dar continuidade ao seu propósito. Nossa meta atual de arrecadação apoia ONGs dedicadas ao resgate e cuidados de animais abandonados.", 
        en: "Every month, a local or national NGO or non-profit institution is selected as the 'Institution of the Month'. This organization receives 25% of the value collected from our services, helping it directly to continue its purpose. Our current fundraising goal supports NGOs dedicated to rescuing and caring for abandoned animals." 
    },

    // embarcados.html
    "emb-title": { pt: "Sistemas Embarcados & IoT", en: "Embedded Systems & IoT" },
    "emb-desc": { 
        pt: "Democratizamos o uso de hardware inteligente. Nossos sistemas unem microcontroladores a sensores industriais calibrados para prever falhas em balcões térmicos comerciais de alimentos, evitando perdas de ativos antes que elas aconteçam.", 
        en: "We democratize the use of smart hardware. Our systems combine microcontrollers with calibrated industrial sensors to predict failures in commercial food warming counters, preventing asset losses before they happen." 
    },
    "emb-card1-title": { pt: "Módulo IoT Preventivo", en: "Preventive IoT Module" },
    "emb-card1-desc": { 
        pt: "Instalação de sensores e programação física em C/C++ para monitoramento térmico contínuo e preventivo de freezers e balcões comerciais.", 
        en: "Installation of sensors and physical programming in C/C++ for continuous and preventive thermal monitoring of freezers and commercial food counters." 
    },
    "emb-card1-price": { 
        pt: "Sob Consulta <span class=\"price-sub\">Dependente de insumos de hardware</span>", 
        en: "On Request <span class=\"price-sub\">Dependent on hardware components</span>" 
    },
    "emb-card1-btn": { pt: "Consultar Projeto", en: "Inquire Project" },
    "emb-card2-title": { pt: "Firmware sob Medida", en: "Custom Firmware" },
    "emb-card2-desc": { 
        pt: "Desenvolvimento de firmware para Arduino, ESP32 e Raspberry Pi: leitura de sensores, controle de atuadores e integração com painéis.", 
        en: "Firmware development for Arduino, ESP32, and Raspberry Pi: sensor reading, actuator control, and panel integration." 
    },
    "emb-card2-price": { 
        pt: "A partir de R$ 500,00", 
        en: "From $150.00 / €140.00" 
    },
    "emb-card2-btn": { pt: "Solicitar Orçamento", en: "Request a Quote" },

    // automacao.html
    "aut-title": { pt: "O que são Aplicações CLI?", en: "What are CLI Applications?" },
    "aut-desc": { 
        pt: "Muitas pessoas não sabem o que é um programa CLI (Command Line Interface). São aplicações puras baseadas em linha de comando (terminal). Elas não gastam memória com gráficos desnecessários, sendo ferramentas incrivelmente rápidas e seguras para processar cálculos matemáticos em massa, organizar dados locais ou gerenciar tabelas complexas do seu negócio.", 
        en: "Many people do not know what a CLI (Command Line Interface) program is. They are pure applications based on the command line (terminal). They do not waste memory on unnecessary graphics, making them incredibly fast and secure tools for mass mathematical calculations, organizing local data, or managing complex business spreadsheets." 
    },
    "aut-card1-title": { pt: "Automação & Scripts CLI", en: "Automation & CLI Scripts" },
    "aut-card1-desc": { 
        pt: "Criação de ferramentas executáveis customizadas em Python, C# ou C++ para automações de escritórios, faturamentos ou cálculos tributários.", 
        en: "Creation of custom executable tools in Python, C#, or C++ for office automation, billing, or tax calculations." 
    },
    "aut-card1-price": { 
        pt: "A partir de R$ 450,00", 
        en: "From $120.00 / €110.00" 
    },
    "aut-card1-btn": { pt: "Solicitar Solução", en: "Request Solution" },

    // web-mobile.html
    "wm-title-web": { pt: "Aplicações Web", en: "Web Applications" },
    "wm-desc-web": { 
        pt: "Estruturas completas para digitalizar o seu negócio local, do design da página até a captação ativa de clientes pela internet.", 
        en: "Complete structures to digitalize your local business, from page design to active customer acquisition over the internet." 
    },
    "wm-card1-title": { pt: "Site Institucional / Landing Page", en: "Institutional Website / Landing Page" },
    "wm-card1-desc": { 
        pt: "Criação de páginas institucionais elegantes e 100% responsivas para apresentar seu comércio ao bairro e ao Google.", 
        en: "Creation of elegant and 100% responsive business pages to showcase your business to the neighborhood and Google." 
    },
    "wm-card1-price": { 
        pt: "A partir de R$ 900,00 <span style=\"font-size:0.85rem; color:var(--text-muted); font-weight:normal; display:block;\">Sob consulta de escopo</span>", 
        en: "From $250.00 / €230.00 <span style=\"font-size:0.85rem; color:var(--text-muted); font-weight:normal; display:block;\">Subject to scope review</span>" 
    },
    "wm-card1-btn": { pt: "Contratar", en: "Hire" },
    "wm-card2-title": { pt: "Desenvolvimento de E-Commerce", en: "E-Commerce Development" },
    "wm-card2-desc": { 
        pt: "Montagem de lojas virtuais completas integradas a meios de pagamento seguros (Pix/Cartão) e frete automatizado.", 
        en: "Setup of complete virtual stores integrated with secure payment systems (Pix/Credit Card) and automated shipping." 
    },
    "wm-card2-price": { 
        pt: "A partir de R$ 1.800,00", 
        en: "From $500.00 / €460.00" 
    },
    "wm-card2-btn": { pt: "Contratar", en: "Hire" },
    "wm-title-mobile": { pt: "Aplicações Mobile", en: "Mobile Applications" },
    "wm-desc-mobile": { 
        pt: "Desenvolvimento de aplicativos móveis simples e funcionais para colocar seu negócio ou ideia na palma da mão do cliente.", 
        en: "Development of simple and functional mobile applications to put your business or idea in the palm of your customer's hand." 
    },
    "wm-card3-title": { pt: "Aplicativo Mobile sob Medida", en: "Custom Mobile Application" },
    "wm-card3-desc": { 
        pt: "Criação de aplicativos para Android com foco em usabilidade: catálogos, agendamentos, cadastros e integrações simples.", 
        en: "Creation of Android applications focused on usability: catalogs, scheduling, registrations, and simple integrations." 
    },
    "wm-card3-price": { 
        pt: "Sob Consulta <span style=\"font-size:0.85rem; color:var(--text-muted); font-weight:normal; display:block;\">Valor conforme escopo do app</span>", 
        en: "On Request <span style=\"font-size:0.85rem; color:var(--text-muted); font-weight:normal; display:block;\">Price according to app scope</span>" 
    },
    "wm-card3-btn": { pt: "Consultar Projeto", en: "Inquire Project" },

    // jogos.html
    "games-title": { pt: "Engenharia de Jogos Digitais", en: "Digital Game Engineering" },
    "games-desc": { 
        pt: "Desenvolvimento focado na interatividade. Construção de jogos autorais e Advergames (jogos interativos para campanhas promocionais de marcas).", 
        en: "Development focused on interactivity. Creation of custom games and Advergames (interactive games for brand promotional campaigns)." 
    },
    "games-card1-title": { pt: "Desenvolvimento de Jogos 2D", en: "2D Game Development" },
    "games-card1-desc": { 
        pt: "Criação e programação de mecânicas bidimensionais completas utilizando Unity ou GameMaker.", 
        en: "Creation and programming of complete 2D mechanics using Unity or GameMaker." 
    },
    "games-card1-price": { 
        pt: "A partir de R$ 1.200,00", 
        en: "From $350.00 / €320.00" 
    },
    "games-card1-btn": { pt: "Consultar", en: "Inquire" },
    "games-card2-title": { pt: "Desenvolvimento de Jogos 2.5D", en: "2.5D Game Development" },
    "games-card2-desc": { 
        pt: "Projetos com profundidade visual combinando jogabilidade clássica e cenários tridimensionais avançados.", 
        en: "Projects with visual depth combining classic gameplay and advanced 3D environments." 
    },
    "games-card2-price": { 
        pt: "A partir de R$ 2.000,00", 
        en: "From $600.00 / €550.00" 
    },
    "games-card2-btn": { pt: "Consultar", en: "Inquire" },
    "games-ref-title": { pt: "Projeto de Referência", en: "Reference Project" },
    "games-ref-desc": { 
        pt: "PlayTypus — jogo desenvolvido em equipe para a Latin American Game ShowCase (LAGS), competindo com mais de 120 grupos e ficando em septuagésimo primeiro lugar.", 
        en: "PlayTypus — a game developed in a team for the Latin American Game Showcase (LAGS), competing against more than 120 groups and finishing in 71st place." 
    },

    // sobre.html
    "sobre-title": { pt: "Daniel Germano", en: "Daniel Germano" },
    "sobre-subtitle": { 
        pt: "Desenvolvedor de software independente e especialista em automação técnica de hardware e software embarcado.", 
        en: "Independent software developer and specialist in technical automation of hardware and embedded software." 
    },
    "sobre-edu-title": { pt: "Formação Acadêmica", en: "Academic Background" },
    "sobre-edu-item1": { 
        pt: "<strong>Curso Técnico em Eletrônica</strong> – ETEC Júlio de Mesquita<br>Base sólida em eletrônica digital, circuitos integrados, microcontroladores, instrumentação física e análise em bancada.", 
        en: "<strong>Electronics Technical Course</strong> – ETEC Júlio de Mesquita<br>Solid foundation in digital electronics, integrated circuits, microcontrollers, physical instrumentation, and workbench analysis." 
    },
    "sobre-edu-item2": { 
        pt: "<strong>Engenharia de Software (Bacharelado EAD)</strong> – Faculdade Anhanguera (Graduando)<br>Foco em ciclo de vida de desenvolvimento de sistemas, engenharia de requisitos, arquitetura de software, metodologias ágeis e controle de qualidade.", 
        en: "<strong>Bachelor's in Software Engineering (Distance Learning)</strong> – Anhanguera University (Undergraduate)<br>Focus on systems development lifecycle, requirements engineering, software architecture, agile methodologies, and quality assurance." 
    },
    "sobre-skills-title": { pt: "Stack de Habilidades", en: "Skill Stack" },
    "sobre-skills-item1": { 
        pt: "<strong>Linguagens:</strong> C, C++, C#, Python (Desenvolvimento de Jogos 2D e 2.5D / Aplicações CLI / Ferramentas estruturadas) e JavaScript.", 
        en: "<strong>Languages:</strong> C, C++, C#, Python (2D and 2.5D Game Development / CLI Applications / Structured Tools), and JavaScript." 
    },
    "sobre-skills-item2": { 
        pt: "<strong>Hardware/SEB:</strong> Desenvolvimento de firmware nativo, integração com sensores analógicos/digitais, displays e atuadores mecânicos.", 
        en: "<strong>Hardware/Embedded:</strong> Native firmware development, integration with analog/digital sensors, displays, and mechanical actuators." 
    },
    "sobre-skills-item3": { 
        pt: "<strong>Web & Mobile:</strong> Manipulação nativa da árvore DOM, consumo e integração assíncrona de APIs de terceiros.", 
        en: "<strong>Web & Mobile:</strong> Native DOM tree manipulation, consumption and asynchronous integration of third-party APIs." 
    },
    "sobre-contact-title": { pt: "Contato Comercial & Redes", en: "Commercial Contacts & Networks" },
    "sobre-contact-desc": { 
        pt: "Para orçamentos, dúvidas técnicas e contratação de serviços sob medida da D-Oryzon, entre em contato através dos canais comerciais oficiais abaixo.", 
        en: "For quotes, technical inquiries, and custom services from D-Oryzon, please contact us through the official commercial channels below." 
    },
    "sobre-contact-email": { pt: "E-mail Comercial:", en: "Commercial Email:" },
    "sobre-contact-phone": { pt: "Telefone / WhatsApp:", en: "Phone / WhatsApp:" },
    "sobre-contact-github": { pt: "Portfólio Pessoal:", en: "Personal Portfolio:" }
};

// Current active language: default is 'pt'
let currentLang = localStorage.getItem("d_oryzon_lang") || "pt";

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("d_oryzon_lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    updateContent();
}

function updateContent() {
    // 1. Update elements with data-i18n
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[key] && translations[key][currentLang]) {
            if (element.tagName === "P" || element.tagName === "LI" || element.tagName === "DIV") {
                element.innerHTML = translations[key][currentLang];
            } else {
                element.textContent = translations[key][currentLang];
            }
        }
    });

    // 2. Update navigation active state and text
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        const path = link.getAttribute("href");
        let key = "";
        if (path === "index.html" || path === "" || path === "/") key = "nav-home";
        else if (path === "embarcados.html") key = "nav-embedded";
        else if (path === "automacao.html") key = "nav-automation";
        else if (path === "web-mobile.html") key = "nav-web-mobile";
        else if (path === "jogos.html") key = "nav-games";
        else if (path === "sobre.html") key = "nav-specialist";

        if (key && translations[key] && translations[key][currentLang]) {
            link.textContent = translations[key][currentLang];
        }
    });

    // 3. Update footer text
    const footerParagraph = document.querySelector("footer p");
    if (footerParagraph) {
        footerParagraph.innerHTML = translations["footer-text"][currentLang];
    }

    // 4. Page-specific custom updates
    // Update Social Impact goal in index.html if active
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || window.location.pathname.endsWith("/")) {
        const metaFinanceiraBRL = 500.00;
        const valorArrecadadoBRL = 0.00; // Alterado manualmente pelo proprietário do site
        
        const valorAtualSpan = document.getElementById("valorAtual");
        const metaHeader = document.querySelector(".meta-container h3");
        const metaParagraph = document.querySelector(".meta-container p");
        const metaGoalSpan = document.querySelector(".meta-status span:last-child");

        if (metaHeader) {
            metaHeader.textContent = translations["index-impact-title"][currentLang];
        }
        if (metaParagraph) {
            metaParagraph.textContent = translations["index-impact-p"][currentLang];
        }

        const porcentagem = (valorArrecadadoBRL / metaFinanceiraBRL) * 100;
        const progressBar = document.getElementById("metaProgress");
        if (progressBar) progressBar.style.width = porcentagem + "%";

        if (currentLang === "pt") {
            if (valorAtualSpan) valorAtualSpan.innerText = `Arrecadado: R$ ${valorArrecadadoBRL.toFixed(2).replace('.', ',')}`;
            if (metaGoalSpan) metaGoalSpan.innerText = `Meta: R$ ${metaFinanceiraBRL.toFixed(2).replace('.', ',')}`;
        } else {
            const metaFinanceiraUSD = metaFinanceiraBRL / 5.0;
            const valorArrecadadoUSD = valorArrecadadoBRL / 5.0;
            if (valorAtualSpan) valorAtualSpan.innerText = `Raised: $ ${valorArrecadadoUSD.toFixed(2)}`;
            if (metaGoalSpan) metaGoalSpan.innerText = `Goal: $ ${metaFinanceiraUSD.toFixed(2)}`;
        }
    }

    // Update language toggle button text
    const toggleBtn = document.getElementById("lang-toggle");
    if (toggleBtn) {
        toggleBtn.textContent = currentLang === "pt" ? "PT 🇧🇷" :"EN 🇺🇸";
    }
}

// Injeta o botão de alternância de idioma no nav ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    if (nav) {
        const toggleBtn = document.createElement("a");
        toggleBtn.id = "lang-toggle";
        toggleBtn.href = "#";
        toggleBtn.style.cursor = "pointer";
        toggleBtn.addEventListener("click", (e) => {
            e.preventDefault();
            setLanguage(currentLang === "pt" ? "en" : "pt");
        });
        nav.appendChild(toggleBtn);
    }
    setLanguage(currentLang);
});
