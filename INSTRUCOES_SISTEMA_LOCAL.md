# 📝 Sistema Local de Confirmações - Girls Night da Rubi

## 🎯 Como Funciona

O sistema de confirmações agora funciona **localmente** usando o File System Access API do navegador, eliminando a necessidade de configuração do GitHub.

## 🚀 Funcionalidades

### ✅ O que foi implementado:
- **Sistema de senha**: Protege a página com a senha "noitedasmeninas"
- **Formulário de confirmação**: Campo para inserir nome da pessoa
- **Armazenamento local**: Salva confirmações no localStorage do navegador
- **Arquivo JSON local**: Atualiza o arquivo `confirmacoes.json` do projeto
- **Interface visual**: Mostra contador de confirmações na página

### 🔧 Como funciona:
1. Usuário insere nome no formulário
2. Sistema salva no localStorage (navegador)
3. Sistema atualiza o arquivo `confirmacoes.json` local
4. Interface mostra contador atualizado

## 🌐 Compatibilidade de Navegadores

### ✅ Navegadores que funcionam perfeitamente:
- **Chrome** (versão 86+)
- **Edge** (versão 86+)

### ⚠️ Navegadores com funcionalidade limitada:
- **Firefox**: Salva apenas no localStorage
- **Safari**: Salva apenas no localStorage

## 📁 Estrutura do Arquivo JSON

O arquivo `confirmacoes.json` tem esta estrutura:

```json
{
  "evento": "Girls Night & Chá de Lingerie da Rubi",
  "data": "18 de setembro, às 19h",
  "confirmacoes": [
    {
      "nome": "Nome da Pessoa",
      "data": "2024-01-15T10:30:00.000Z",
      "timestamp": 1705312200000
    }
  ]
}
```

## 🛠️ Como Usar

### 1. **Abrir a página**
- Abra `index.html` no navegador
- Digite a senha: `noitedasmeninas`

### 2. **Confirmar presença**
- Clique em "Confirmar Presença"
- Digite o nome da pessoa
- Clique em "Confirmar"

### 3. **Ver confirmações**
- O contador aparece no canto inferior esquerdo
- Mostra total de confirmações e última pessoa

## 🔒 Permissões do Navegador

Na primeira vez que confirmar uma presença:

1. **Chrome/Edge** solicitará permissão para acessar arquivos
2. **Clique em "Permitir"** para que o sistema funcione
3. **Selecione a pasta** do projeto quando solicitado
4. **O arquivo será atualizado** automaticamente

## 📱 Funcionalidades Mobile

- ✅ **Sistema de senha** funciona perfeitamente
- ✅ **Formulário de confirmação** responsivo
- ✅ **Armazenamento local** funciona em todos os dispositivos
- ⚠️ **Arquivo JSON** pode não funcionar em alguns dispositivos móveis

## 🎨 Personalização

### Alterar senha:
Edite a constante `SENHA_CORRETA` no arquivo `script.js`:

```javascript
const SENHA_CORRETA = 'sua-nova-senha';
```

### Alterar informações do evento:
Edite o arquivo `confirmacoes.json`:

```json
{
  "evento": "Seu Nome do Evento",
  "data": "Sua Data e Horário",
  "confirmacoes": []
}
```

## 🚨 Solução de Problemas

### ❌ "File System Access API não suportada"
- Use Chrome ou Edge atualizado
- Em outros navegadores, as confirmações ficam apenas no localStorage

### ❌ "Permissão negada"
- Clique em "Permitir" quando o navegador solicitar
- Verifique se não bloqueou as permissões

### ❌ Arquivo não atualiza
- Verifique se selecionou a pasta correta do projeto
- Tente fazer uma nova confirmação

## 💡 Dicas Importantes

1. **Sempre use Chrome ou Edge** para funcionalidade completa
2. **Permita acesso aos arquivos** quando solicitado
3. **Mantenha o arquivo `confirmacoes.json`** na pasta do projeto
4. **Faça backup** do arquivo JSON regularmente
5. **Teste o sistema** antes de usar em produção

## 🔄 Backup e Restauração

### Fazer backup:
- Copie o arquivo `confirmacoes.json`
- Renomeie para `confirmacoes_backup_YYYY-MM-DD.json`

### Restaurar:
- Substitua o arquivo atual pelo backup
- Recarregue a página

---

**🎀 Sistema desenvolvido para funcionar localmente sem dependências externas!**
