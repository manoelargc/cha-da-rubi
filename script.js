// Configuração da senha
const SENHA_CORRETA = 'noitedasmeninas';

// Função para verificar senha
function verificarSenha() {
    const passwordInput = document.getElementById('passwordInput');
    const senha = passwordInput.value.toLowerCase().trim();
    
    if (senha === SENHA_CORRETA) {
        // Senha correta - mostrar página principal
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        
        // Salvar no localStorage para não pedir senha novamente
        localStorage.setItem('girlsNightUnlocked', 'true');
        
        // Limpar campo de senha
        passwordInput.value = '';
        
        // Adicionar efeito de confetti para celebrar
        createConfetti();
        
        // Scroll suave para o topo
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        // Senha incorreta
        passwordInput.style.borderColor = '#ff6b6b';
        passwordInput.style.animation = 'shake 0.5s ease-in-out';
        
        // Limpar animação após terminar
        setTimeout(() => {
            passwordInput.style.animation = '';
        }, 500);
        
        // Limpar campo
        passwordInput.value = '';
        passwordInput.focus();
        
        // Mostrar mensagem de erro
        mostrarMensagemErro('Senha incorreta! Tente novamente.');
    }
}

// Função para mostrar mensagem de erro
function mostrarMensagemErro(mensagem) {
    // Remover mensagem anterior se existir
    const mensagemAnterior = document.querySelector('.error-message');
    if (mensagemAnterior) {
        mensagemAnterior.remove();
    }
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = mensagem;
    errorDiv.style.cssText = `
        color: #ff6b6b;
        background: #ffe6e6;
        padding: 10px 15px;
        border-radius: 10px;
        margin-top: 1rem;
        font-size: 0.9rem;
        border-left: 3px solid #ff6b6b;
    `;
    
    document.querySelector('.login-form').appendChild(errorDiv);
    
    // Remover mensagem após 3 segundos
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Função para confirmar presença
function confirmarPresenca() {
    // Mostrar popup "Em breve" em vez de abrir modal de confirmação
    mostrarPopupEmBreve();
}

// Função para mostrar popup "Em breve"
function mostrarPopupEmBreve() {
    const modal = document.createElement('div');
    modal.id = 'popupEmBreve'; // Adicionar ID para facilitar seleção
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            padding: 40px;
            border-radius: 20px;
            max-width: 500px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            animation: popupEntrada 0.3s ease-out;
        ">
            <div style="
                font-size: 4rem;
                margin-bottom: 20px;
                animation: pulse 2s infinite;
            ">
                🚧
            </div>
            
            <h3 style="
                color: #6c5ce7;
                margin-bottom: 15px;
                font-size: 1.8rem;
                font-weight: 600;
            ">
                Em Breve!
            </h3>
            
            <p style="
                color: #666;
                font-size: 1.1rem;
                line-height: 1.6;
                margin-bottom: 25px;
            ">
                O sistema de confirmação de presença está sendo desenvolvido com muito carinho! 💕
            </p>
            
            <div style="
                background: #f8f9fa;
                padding: 20px;
                border-radius: 15px;
                margin: 20px 0;
                border-left: 4px solid #6c5ce7;
            ">
                <p style="
                    color: #6c5ce7;
                    font-weight: 600;
                    margin: 0;
                    font-size: 1rem;
                ">
                    ✨ Funcionalidades que virão:
                </p>
                <ul style="
                    text-align: left;
                    margin: 10px 0 0 20px;
                    color: #555;
                    line-height: 1.5;
                ">
                    <li>Confirmação de presença online</li>
                    <li>Lista de convidados confirmados</li>
                    <li>E mais outras funções que ainda tô pensando hahaha</li>
                </ul>
            </div>
            
            <button onclick="fecharPopupEmBreve()" style="
                background: #6c5ce7;
                color: white;
                border: none;
                padding: 15px 30px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: 600;
                font-size: 1rem;
                transition: all 0.3s ease;
            " onmouseover="this.style.background='#5a4fd8'" onmouseout="this.style.background='#6c5ce7'">
                Entendi! 👍
            </button>
        </div>
    `;
    
    // Adicionar CSS para animações
    const style = document.createElement('style');
    style.textContent = `
        @keyframes popupEntrada {
            from {
                opacity: 0;
                transform: scale(0.8) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(modal);
    
    // Fechar modal ao clicar fora dele
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function closeOnEsc(e) {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', closeOnEsc);
        }
    });
}

// Função para fechar o popup "Em breve"
function fecharPopupEmBreve() {
    const popup = document.getElementById('popupEmBreve');
    if (popup) {
        popup.remove();
    }
}

// Função para salvar confirmação
function salvarConfirmacao() {
    const nomeInput = document.getElementById('nomeInput');
    const nome = nomeInput.value.trim();
    
    if (!nome) {
        // Mostrar erro se nome estiver vazio
        nomeInput.style.borderColor = '#ff6b6b';
        nomeInput.style.animation = 'shake 0.5s ease-in-out';
        
        setTimeout(() => {
            nomeInput.style.animation = '';
        }, 500);
        
        nomeInput.focus();
        return;
    }
    
    // Criar objeto de confirmação
    const confirmacao = {
        nome: nome,
        data: new Date().toISOString(),
        timestamp: Date.now()
    };
    
    // Salvar no localStorage
    let confirmacoes = JSON.parse(localStorage.getItem('girlsNightConfirmacoes') || '[]');
    confirmacoes.push(confirmacao);
    localStorage.setItem('girlsNightConfirmacoes', JSON.stringify(confirmacoes));
    
    // Atualizar arquivo JSON local
    atualizarArquivoJSON(nome);
    
    // Fechar modal de confirmação
    fecharModal();
    
    // Mostrar modal de sucesso
    setTimeout(() => {
        mostrarModalSucesso();
    }, 300);
    
    // Limpar campo
    nomeInput.value = '';
}

// Função para atualizar arquivo JSON local
async function atualizarArquivoJSON(nome) {
    try {
        console.log('🔄 Preparando conteúdo para confirmacoes.json...');
        
        // Obter confirmações existentes do localStorage
        let confirmacoes = JSON.parse(localStorage.getItem('girlsNightConfirmacoes') || '[]');
        
        // Criar array apenas com os nomes das pessoas
        const nomesConfirmados = confirmacoes.map(conf => conf.nome);
        
        // Criar objeto completo para o arquivo JSON
        const dadosCompletos = {
            evento: "Girls Night & Chá de Lingerie da Rubi",
            data: "18 de setembro, às 19h",
            confirmacoes: nomesConfirmados
        };
        
        // Converter para string JSON formatada
        const jsonContent = JSON.stringify(dadosCompletos, null, 2);
        
        // Mostrar no console o conteúdo que seria salvo
        console.log('📝 Conteúdo do confirmacoes.json:', jsonContent);
        
        // Simular salvamento bem-sucedido
        console.log('✅ Conteúdo preparado com sucesso!');
        mostrarMensagemSucesso('Confirmação salva! ✅');
        
        // Nota: Para salvar no arquivo real, você precisará de um servidor backend
        // ou usar ferramentas de desenvolvimento que permitam escrita de arquivos
        
    } catch (error) {
        console.error('❌ Erro ao preparar conteúdo:', error);
        mostrarMensagemErro('Erro ao preparar conteúdo. Confirmação salva apenas no navegador.');
    }
}



// Função para mostrar confirmações salvas na página
function mostrarConfirmacoesSalvas() {
    let confirmacoes = JSON.parse(localStorage.getItem('girlsNightConfirmacoes') || '[]');
    
    // Criar ou atualizar elemento de confirmações
    let confirmacoesElement = document.getElementById('confirmacoesSalvas');
    if (!confirmacoesElement) {
        confirmacoesElement = document.createElement('div');
        confirmacoesElement.id = 'confirmacoesSalvas';
        confirmacoesElement.className = 'confirmacoes-salvas';
        confirmacoesElement.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: rgba(250, 161, 161, 0.95);
            color: white;
            padding: 15px 20px;
            border-radius: 15px;
            font-weight: 500;
            z-index: 1000;
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            max-width: 300px;
            font-size: 0.9rem;
        `;
        document.body.appendChild(confirmacoesElement);
    }
    
    if (confirmacoes.length > 0) {
        confirmacoesElement.innerHTML = `
            <div style="margin-bottom: 8px; font-weight: 600;">🎀 Confirmações: ${confirmacoes.length}</div>
            <div style="font-size: 0.8rem; opacity: 0.9;">
                Última: ${confirmacoes[confirmacoes.length - 1].nome}
            </div>
        `;
        confirmacoesElement.style.display = 'block';
    } else {
        confirmacoesElement.style.display = 'none';
    }
}

// Função para mostrar modal de sucesso
function mostrarModalSucesso() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'block';
    
    setTimeout(() => {
        modal.querySelector('.modal-content').style.transform = 'scale(1)';
        modal.querySelector('.modal-content').style.opacity = '1';
    }, 10);
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('confirmationModal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Animações de saída
    modalContent.style.transform = 'scale(0.8)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Função para fechar modal de sucesso
function fecharModalSucesso() {
    const modal = document.getElementById('successModal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Animações de saída
    modalContent.style.transform = 'scale(0.8)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const confirmationModal = document.getElementById('confirmationModal');
    const successModal = document.getElementById('successModal');
    
    if (event.target === confirmationModal) {
        fecharModal();
    }
    
    if (event.target === successModal) {
        fecharModalSucesso();
    }
}

// Fechar modal com tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        fecharModal();
    }
});

// Verificar se a página já foi desbloqueada
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se já foi desbloqueada anteriormente
    const jaDesbloqueada = localStorage.getItem('girlsNightUnlocked');
    
    if (jaDesbloqueada === 'true') {
        // Página já foi desbloqueada - mostrar conteúdo principal
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    }
    
    // Carregar confirmações do arquivo JSON se existir
    carregarConfirmacoesArquivo();
    
    // Adicionar suporte a Enter no campo de senha
    const passwordInput = document.getElementById('passwordInput');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                verificarSenha();
            }
        });
    }
    
    // Animação de scroll suave para links internos
    // Adicionar efeitos de hover nos cards
    const cards = document.querySelectorAll('.detail-card, .gift-item, .feature');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Animação de entrada para elementos quando aparecem na tela
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const animateElements = document.querySelectorAll('.feature, .detail-card, .activity, .gift-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Efeito de parallax suave no hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const hearts = document.querySelectorAll('.heart');
        
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        // Animar corações com scroll
        hearts.forEach((heart, index) => {
            const speed = 0.5 + (index * 0.2);
            heart.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Adicionar confetti quando confirmar presença
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            createConfetti();
        });
    });
    
    // Mostrar confirmações salvas ao carregar a página
    mostrarConfirmacoesSalvas();
});

// Função para carregar confirmações do arquivo JSON
async function carregarConfirmacoesArquivo() {
    try {
        // Tentar carregar o arquivo confirmacoes.json
        const response = await fetch('confirmacoes.json');
        if (response.ok) {
            const dados = await response.json();
            
            if (dados.confirmacoes && Array.isArray(dados.confirmacoes)) {
                // Converter nomes para objetos de confirmação
                const confirmacoes = dados.confirmacoes.map(nome => ({
                    nome: nome,
                    data: new Date().toISOString(),
                    timestamp: Date.now()
                }));
                
                // Salvar no localStorage
                localStorage.setItem('girlsNightConfirmacoes', JSON.stringify(confirmacoes));
                
                console.log('✅ Confirmações carregadas do arquivo JSON:', confirmacoes.length);
                
                // Atualizar exibição
                mostrarConfirmacoesSalvas();
            }
        }
    } catch (error) {
        console.log('ℹ️ Arquivo confirmacoes.json não encontrado ou erro ao carregar');
    }
}

// Função para criar confetti
function createConfetti() {
    const colors = ['#faa1a1', '#ffb3b3', '#ff8a8a', '#fff', '#ffd1d1'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        
        document.body.appendChild(confetti);
        
        // Animação do confetti
        const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        animation.onfinish = () => {
            confetti.remove();
        };
    }
}

// Função para adicionar efeito de "heart beat" nos botões
function addHeartbeatEffect() {
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.animation = 'heartbeat 0.6s ease-in-out';
        });
        
        button.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
}

// Adicionar efeito de heartbeat quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    addHeartbeatEffect();
    
    // Adicionar CSS para animação heartbeat
    const style = document.createElement('style');
    style.textContent = `
        @keyframes heartbeat {
            0% { transform: scale(1); }
            25% { transform: scale(1.1); }
            50% { transform: scale(1); }
            75% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
});

// Função para mostrar contador regressivo para o evento
function showCountdown() {
    const eventDate = new Date('2024-09-18T19:00:00');
    const now = new Date();
    const timeLeft = eventDate - now;
    
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        
        // Criar elemento de contador se não existir
        let countdownElement = document.querySelector('.countdown');
        if (!countdownElement) {
            countdownElement = document.createElement('div');
            countdownElement.className = 'countdown';
            countdownElement.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: rgba(250, 161, 161, 0.9);
                color: white;
                padding: 15px 20px;
                border-radius: 25px;
                font-weight: 600;
                z-index: 1000;
                backdrop-filter: blur(10px);
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            `;
            document.body.appendChild(countdownElement);
        }
        
        countdownElement.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 0.9rem; margin-bottom: 5px;">🎀 Evento em:</div>
                <div style="font-size: 1.2rem;">${days}d ${hours}h ${minutes}m</div>
            </div>
        `;
    }
}

// Atualizar contador a cada minuto
setInterval(showCountdown, 60000);
showCountdown(); // Mostrar imediatamente

// Função para adicionar efeito de "sparkle" nos elementos
function addSparkleEffect() {
    const sparkleElements = document.querySelectorAll('.feature, .detail-card');
    
    sparkleElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.innerHTML = '✨';
            sparkle.style.cssText = `
                position: absolute;
                top: -10px;
                right: -10px;
                font-size: 1.5rem;
                animation: sparkle 1s ease-out forwards;
                pointer-events: none;
                z-index: 10;
            `;
            
            this.style.position = 'relative';
            this.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        });
    });
}

// Adicionar efeito de sparkle quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    addSparkleEffect();
    
    // Adicionar CSS para animação sparkle
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0% { transform: scale(0) rotate(0deg); opacity: 0; }
            50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
            100% { transform: scale(0) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});
