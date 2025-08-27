# 📝 Instruções para Salvar Confirmações no Repositório

## 🎯 Objetivo
Salvar as confirmações de presença diretamente no arquivo `confirmacoes.json` do repositório, sem fazer download no dispositivo.

## ⚠️ Limitação Atual
O JavaScript do navegador **NÃO pode** modificar arquivos diretamente no repositório por questões de segurança. Para isso funcionar, você precisará de uma das soluções abaixo:

## 🔧 Soluções Possíveis

### 1. **GitHub Actions (Recomendado)**
Criar um workflow que atualize o arquivo automaticamente:

```yaml
# .github/workflows/update-confirmacoes.yml
name: Atualizar Confirmações
on:
  repository_dispatch:
    types: [update_confirmacoes]

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Atualizar JSON
        run: |
          # Script para atualizar confirmacoes.json
          echo '{"evento": "Chá de Lingerie da Rubi", "data": "18 de setembro, às 19h", "confirmacoes": []}' > confirmacoes.json
      - name: Commit e Push
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add confirmacoes.json
          git commit -m "Atualizar confirmações"
          git push
```

### 2. **Backend/API**
Criar um servidor que receba as confirmações e atualize o arquivo:

```javascript
// Exemplo com Node.js + GitHub API
const { Octokit } = require("@octokit/rest");

app.post('/confirmar', async (req, res) => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  
  // Atualizar arquivo no repositório
  await octokit.repos.createOrUpdateFileContents({
    owner: 'seu-usuario',
    repo: 'girlsnight',
    path: 'confirmacoes.json',
    message: 'Atualizar confirmações',
    content: Buffer.from(JSON.stringify(novasConfirmacoes)).toString('base64')
  });
});
```

### 3. **GitHub Pages + GitHub API**
Usar a GitHub API diretamente do frontend (requer token de acesso):

```javascript
async function salvarNoRepositorio(confirmacao) {
  const token = 'seu_github_token';
  const owner = 'seu-usuario';
  const repo = 'girlsnight';
  
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/confirmacoes.json`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Atualizar confirmações',
        content: btoa(JSON.stringify(novasConfirmacoes, null, 2))
      })
    });
    
    if (response.ok) {
      console.log('Arquivo atualizado no repositório!');
    }
  } catch (error) {
    console.error('Erro ao atualizar:', error);
  }
}
```

## 🚀 Implementação Recomendada

### Passo 1: GitHub Actions
1. Crie a pasta `.github/workflows/` no seu repositório
2. Adicione o arquivo `update-confirmacoes.yml`
3. Configure as permissões necessárias

### Passo 2: Modificar o JavaScript
Substitua a função `salvarConfirmacaoArquivo` por:

```javascript
async function salvarConfirmacaoArquivo(confirmacao) {
  try {
    // Fazer requisição para GitHub Actions
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/dispatches`, {
      method: 'POST',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
      },
      body: JSON.stringify({
        event_type: 'update_confirmacoes',
        client_payload: {
          confirmacao: confirmacao
        }
      })
    });
    
    if (response.ok) {
      console.log('Confirmação enviada para atualização no repositório!');
    }
  } catch (error) {
    console.error('Erro ao enviar confirmação:', error);
  }
}
```

## 🔐 Configurações de Segurança

### GitHub Token
1. Vá em Settings > Developer settings > Personal access tokens
2. Crie um token com permissões `repo` e `workflow`
3. Adicione o token como secret no repositório

### Secrets do Repositório
1. Vá em Settings > Secrets and variables > Actions
2. Adicione `GITHUB_TOKEN` com o valor do seu token

## 📱 Alternativa Temporária

Enquanto implementa a solução completa, as confirmações ficam salvas no `localStorage` do navegador e são exibidas na página. Para acessar todas as confirmações:

1. Abra o Console do navegador (F12)
2. Digite: `JSON.parse(localStorage.getItem('girlsNightConfirmacoes'))`
3. Copie o resultado e cole no arquivo `confirmacoes.json`

## 🎯 Próximos Passos

1. **Implemente GitHub Actions** (solução mais robusta)
2. **Configure permissões** e tokens necessários
3. **Teste o workflow** com uma confirmação
4. **Monitore as atualizações** no repositório

---

**Nota**: Esta é uma solução avançada que requer conhecimento de GitHub Actions e APIs. Se precisar de ajuda, consulte a documentação oficial do GitHub ou entre em contato para suporte técnico.
