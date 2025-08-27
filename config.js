// 🎀 Configurações da Landing Page - Girls Night da Rubi
// Altere estas configurações para personalizar a página

const CONFIG = {
    // 🔐 Configurações de Segurança
    SECURITY: {
        password: "noitedasmeninas", // Senha para acessar a página
        hint: "É o nome do evento em uma palavra"
    },
    
    // 📅 Informações do Evento
    EVENT: {
        title: "Girls Night & Chá de Lingerie da Rubi",
        subtitle: "Uma noite só das meninas, uhuul! 🎀",
        date: "18 de setembro, às 19h",
        dateISO: "2024-09-18T19:00:00", // Para o contador regressivo
        location: "Rua Presbiteriana, nº 185, Vila Maria - BM/RJ",
        dressCode: "Pink (rosa bebê, tons de rosa - evitar branco)"
    },

    // 🎨 Cores da Paleta
    COLORS: {
        primary: "#faa1a1",      // Rosa principal
        light: "#ffb3b3",        // Rosa claro
        dark: "#ff8a8a",         // Rosa escuro
        white: "#ffffff",        // Branco
        lightPink: "#fff5f5",    // Branco rosa
        text: "#333333",         // Texto principal
        textLight: "#666666"     // Texto secundário
    },

    // 🎁 Sugestões de Presentes
    GIFTS: [
        { icon: "fas fa-ribbon", name: "Lingerie" },
        { icon: "fas fa-bed", name: "Pijama" },
        { icon: "fas fa-female", name: "Baby doll" },
        { icon: "fas fa-moon", name: "Camisola" },
        { icon: "fas fa-user-tie", name: "Robe" },
        { icon: "fas fa-kiss-wink-heart", name: "Creme beijável" },
        { icon: "fas fa-heart", name: "Itens de sexshop" }
    ],

    // 🎯 Atividades da Noite
    ACTIVITIES: [
        { icon: "fas fa-question-circle", name: "Quiz divertido" },
        { icon: "fas fa-search", name: "Caça-palavras" },
        { icon: "fas fa-scroll", name: "Raspadinha" },
        { icon: "fas fa-gift", name: "Abertura dos presentes" },
        { icon: "fas fa-pencil-alt", name: "Desenhe o vestido" },
        { icon: "fas fa-dice", name: "Dinâmicas especiais" }
    ],

    // ✨ Características do Evento
    FEATURES: [
        { icon: "fas fa-gift", name: "Presentes" },
        { icon: "fas fa-cocktail", name: "Drinks" },
        { icon: "fas fa-star", name: "Dinâmicas" }
    ],

    // 🎪 Configurações de Animação
    ANIMATION: {
        confettiCount: 100,           // Quantidade de confetti
        confettiDuration: 3000,       // Duração da animação (ms)
        heartFloatDuration: 6,        // Duração da flutuação dos corações (s)
        fadeInDelay: 300,             // Delay entre animações de entrada (ms)
        scrollThreshold: 0.1,         // Threshold para animações de scroll
        hoverScale: 1.02,             // Escala no hover dos cards
        hoverTranslateY: -8            // Movimento Y no hover dos cards
    },

    // 📱 Configurações de Responsividade
    BREAKPOINTS: {
        mobile: 480,
        tablet: 768,
        desktop: 1200
    },

    // 🎭 Configurações do Modal
    MODAL: {
        backdropBlur: "5px",
        borderRadius: "25px",
        maxWidth: "500px",
        padding: "3rem"
    },

    // 🎨 Configurações de Tipografia
    TYPOGRAPHY: {
        titleFont: "'Great Vibes', cursive",
        bodyFont: "'Poppins', sans-serif",
        titleSizes: {
            hero: "4rem",
            section: "3rem",
            card: "1.5rem"
        },
        bodySizes: {
            large: "1.3rem",
            medium: "1.1rem",
            small: "0.9rem"
        }
    },

    // 🎪 Configurações de Efeitos
    EFFECTS: {
        enableParallax: true,         // Efeito parallax no hero
        enableFloatingHearts: true,   // Corações flutuantes
        enableConfetti: true,         // Confetti ao confirmar presença
        enableSparkles: true,         // Efeito sparkle nos cards
        enableHeartbeat: true,        // Efeito heartbeat nos botões
        enableCountdown: true         // Contador regressivo
    },

    // 🔧 Configurações Técnicas
    TECHNICAL: {
        enableIntersectionObserver: true,  // Animações de scroll
        enableSmoothScroll: true,          // Scroll suave
        enableKeyboardSupport: true,       // Suporte a teclado (ESC)
        enableTouchSupport: true,          // Suporte a touch
        enableHoverEffects: true           // Efeitos de hover
    }
};

// 📝 Função para aplicar configurações
function applyConfig() {
    // Aplicar cores dinamicamente
    document.documentElement.style.setProperty('--primary-color', CONFIG.COLORS.primary);
    document.documentElement.style.setProperty('--light-color', CONFIG.COLORS.light);
    document.documentElement.style.setProperty('--dark-color', CONFIG.COLORS.dark);
    
    // Aplicar configurações de animação
    if (!CONFIG.EFFECTS.enableParallax) {
        document.body.classList.add('no-parallax');
    }
    
    if (!CONFIG.EFFECTS.enableFloatingHearts) {
        document.body.classList.add('no-floating-hearts');
    }
    
    // Aplicar configurações de tipografia
    document.documentElement.style.setProperty('--title-font', CONFIG.TYPOGRAPHY.titleFont);
    document.documentElement.style.setProperty('--body-font', CONFIG.TYPOGRAPHY.bodyFont);
}

// 🚀 Inicializar configurações quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    applyConfig();
    
    // Log das configurações aplicadas
    console.log('🎀 Configurações da Girls Night aplicadas:', CONFIG);
});

// 📤 Exportar configurações para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.GIRLS_NIGHT_CONFIG = CONFIG;
}
