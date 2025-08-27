# 🔐 Como Configurar o GitHub para Salvar Confirmações

## 🎯 Objetivo
Configurar o sistema para salvar as confirmações diretamente no arquivo `confirmacoes.json` do repositório GitHub.

## 📋 Passo a Passo

### 1. **Criar Personal Access Token**
1. Acesse [GitHub.com](https://github.com) e faça login
2. Clique no seu avatar (canto superior direito) → **Settings**
3. No menu lateral esquerdo, clique em **Developer settings**
4. Clique em **Personal access tokens** → **Tokens (classic)**
5. Clique em **Generate new token** → **Generate new token (classic)**
6. Configure o token:
   - **Note**: `Girls Night - Atualizar Confirmações`
   - **Expiration**: Escolha uma data (recomendo 90 dias)
   - **Scopes**: Marque apenas `repo` (acesso completo aos repositórios)
7. Clique em **Generate token**
8. **⚠️ IMPORTANTE**: Copie o token gerado (você não conseguirá vê-lo novamente!)

### 2. **Configurar o Arquivo github-config.js**
1. Abra o arquivo `github-config.js` no seu projeto
2. Substitua as informações:
   ```javascript
   const GITHUB_CONFIG = {
       owner: "SEU_USUARIO_AQUI",        // Seu nome de usuário do GitHub
       repo: "girlsnight",               // Nome do seu repositório
       token: "SEU_TOKEN_AQUI",          // Token que você acabou de criar
       filePath: "confirmacoes.json",
       commitMessage: "Atualizar confirmações - Girls Night da Rubi"
   };
   ```

### 3. **Verificar Configurações**
- **owner**: Deve ser exatamente como aparece na URL do seu perfil GitHub
- **repo**: Deve ser exatamente como aparece na URL do seu repositório
- **token**: Deve começar com `ghp_` e ter 40 caracteres

### 4. **Testar a Configuração**
1. Abra a página no navegador
2. Digite a senha: `noitedasmeninas`
3. Clique em "Confirmar Presença"
4. Digite um nome de teste
5. Clique em "Confirmar Presença"
6. Verifique o console do navegador (F12) para mensagens de sucesso/erro

## 🔍 Verificar se Funcionou

### ✅ Sucesso
- Mensagem verde: "Confirmação salva no repositório! 🎉"
- No console: "✅ Arquivo confirmacoes.json atualizado com sucesso no repositório!"
- O arquivo `confirmacoes.json` no GitHub será atualizado automaticamente

### ❌ Erro
- Mensagem vermelha: "Erro ao salvar no repositório"
- No console: Verifique as mensagens de erro específicas

## 🚨 Problemas Comuns

### 1. **Token Inválido**
- **Sintoma**: Erro 401 (Unauthorized)
- **Solução**: Verifique se o token está correto e tem permissões `repo`

### 2. **Repositório Não Encontrado**
- **Sintoma**: Erro 404 (Not Found)
- **Solução**: Verifique se `owner` e `repo` estão corretos

### 3. **Branch Incorreta**
- **Sintoma**: Erro 422 (Unprocessable Entity)
- **Solução**: Verifique se sua branch padrão é `main` ou `master`

### 4. **Arquivo Não Existe**
- **Sintoma**: Erro ao obter SHA
- **Solução**: Certifique-se de que `confirmacoes.json` existe no repositório

## 🔧 Solução de Problemas

### Verificar Token
```bash
# Teste o token no terminal
curl -H "Authorization: token SEU_TOKEN" \
     https://api.github.com/user
```

### Verificar Repositório
```bash
# Teste o acesso ao repositório
curl -H "Authorization: token SEU_TOKEN" \
     https://api.github.com/repos/SEU_USUARIO/girlsnight
```

### Verificar Arquivo
```bash
# Teste o acesso ao arquivo
curl -H "Authorization: token SEU_TOKEN" \
     https://api.github.com/repos/SEU_USUARIO/girlsnight/contents/confirmacoes.json
```

## 📱 Teste Final

1. **Faça uma confirmação de teste**
2. **Verifique o arquivo no GitHub** - deve ter sido atualizado
3. **Verifique o histórico de commits** - deve ter um novo commit
4. **Teste em outro dispositivo** - as confirmações devem persistir

## 🔒 Segurança

- **NUNCA** compartilhe seu token
- **NUNCA** commite o arquivo `github-config.js` com o token
- **SEMPRE** use HTTPS para acessar a página
- **CONSIDERE** usar variáveis de ambiente em produção

## 📞 Suporte

Se ainda tiver problemas:
1. Verifique o console do navegador (F12)
2. Verifique as mensagens de erro na tela
3. Teste o token manualmente usando os comandos curl acima
4. Verifique se o repositório é público ou se o token tem permissões adequadas

---

**🎉 Parabéns!** Com essa configuração, cada confirmação será salva automaticamente no arquivo `confirmacoes.json` do seu repositório GitHub!
