// 🔐 Configurações do GitHub para atualizar o arquivo confirmacoes.json
// ⚠️ IMPORTANTE: Este arquivo contém informações sensíveis - NÃO compartilhe!

const GITHUB_CONFIG = {
    // 👤 Suas informações do GitHub
    owner: "manoelargc", // Substitua pelo seu nome de usuário
    repo: "cha-da-rubi",     // Substitua pelo nome do seu repositório
    
    // 🔑 Token de acesso pessoal (Personal Access Token)
    // Para criar: GitHub.com > Settings > Developer settings > Personal access tokens
    // Permissões necessárias: repo, workflow
    token: "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", // Substitua pelo seu token
    
    // 📁 Caminho do arquivo no repositório
    filePath: "confirmacoes.json",
    
    // 📝 Mensagem do commit
    commitMessage: "Atualizar confirmações - Girls Night da Rubi"
};

// 📤 Exportar configurações
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GITHUB_CONFIG;
} else {
    window.GITHUB_CONFIG = GITHUB_CONFIG;
}
