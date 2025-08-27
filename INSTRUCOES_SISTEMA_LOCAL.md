# Sistema de Confirmações - Girls Night

## Como Funciona

Este sistema permite que as pessoas confirmem presença no evento "Girls Night & Chá de Lingerie da Rubi" e as confirmações são salvas no navegador (localStorage). O sistema também prepara o conteúdo JSON que seria salvo no arquivo `confirmacoes.json`.

## Estrutura do Arquivo JSON

O arquivo `confirmacoes.json` deve ter esta estrutura:

```json
{
  "evento": "Girls Night & Chá de Lingerie da Rubi",
  "data": "18 de setembro, às 19h",
  "confirmacoes": [
    "Nome da Pessoa 1",
    "Nome da Pessoa 2",
    "Nome da Pessoa 3"
  ]
}
```

## Funcionalidades

### ✅ Confirmação de Presença
- Usuário digita o nome no modal
- Sistema salva no localStorage do navegador
- Sistema prepara o conteúdo JSON para o arquivo

### 📁 Armazenamento
- **localStorage**: Mantém todas as confirmações com timestamp
- **Console**: Mostra o conteúdo JSON que seria salvo no arquivo

### 🔄 Sincronização
- Ao carregar a página, o sistema lê o arquivo JSON existente
- Sincroniza com o localStorage
- Exibe o contador de confirmações na tela

## Como Usar

### 1. **Confirmar Presença**
- Digite o nome da pessoa no campo
- Clique em "Confirmar"
- O nome é salvo no navegador

### 2. **Ver o Conteúdo JSON**
- Abra o Console do navegador (F12)
- Faça uma confirmação
- O conteúdo JSON aparecerá no console

### 3. **Atualizar o Arquivo Manualmente**
- Copie o conteúdo JSON do console
- Cole no arquivo `confirmacoes.json`
- Salve o arquivo

## Limitações do Sistema Local

⚠️ **Importante**: Este sistema funciona apenas localmente devido a restrições de segurança dos navegadores.

### O que funciona:
- Salvar confirmações no localStorage
- Contar confirmações
- Exibir confirmações na interface
- Preparar conteúdo JSON no console

### O que não funciona automaticamente:
- Atualizar o arquivo `confirmacoes.json` diretamente
- Compartilhar confirmações entre usuários diferentes

## Estrutura das Confirmações no localStorage

```javascript
[
    {
      "nome": "Nome da Pessoa",
      "data": "2024-01-15T10:30:00.000Z",
      "timestamp": 1705312200000
    }
  ]
```

## Comandos Úteis

Para ver as confirmações no console do navegador:
```javascript
JSON.parse(localStorage.getItem('girlsNightConfirmacoes'))
```

Para limpar todas as confirmações:
```javascript
localStorage.removeItem('girlsNightConfirmacoes')
```

## Tecnologias Utilizadas

- HTML5
- CSS3 (com animações e efeitos visuais)
- JavaScript ES6+ (async/await, localStorage, Fetch API)

## Compatibilidade

- ✅ Todos os navegadores modernos
- ✅ Funciona em dispositivos móveis
- ✅ Não requer APIs especiais

## Desenvolvimento

Para desenvolvimento local, use um servidor HTTP simples:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Acesse: `http://localhost:8000`

## Fluxo de Trabalho

1. **Usuário confirma presença** → Nome salvo no localStorage
2. **Sistema prepara JSON** → Conteúdo aparece no console
3. **Desenvolvedor copia JSON** → Do console para o arquivo
4. **Arquivo atualizado** → `confirmacoes.json` modificado manualmente

## Dicas

- **Sempre abra o console** para ver o conteúdo JSON
- **Copie o conteúdo** após cada confirmação
- **Mantenha backup** do arquivo JSON
- **Teste regularmente** o sistema
