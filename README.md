# 🎀 Girls Night & Chá de Lingerie da Rubi - Landing Page

Uma landing page feminina, girly e responsiva criada para divulgar o evento **Girls Night + Chá de Lingerie da Rubi**.

## ✨ Características

- **Design Feminino**: Paleta rosa #faa1a1 + branco com elementos delicados
- **Responsiva**: Funciona perfeitamente em todos os dispositivos
- **Interativa**: Modal de confirmação, animações e efeitos visuais
- **Girly**: Laços, corações, fitas e elementos femininos
- **Moderno**: Tipografia elegante e layout clean

## 🎨 Paleta de Cores

- **Rosa Principal**: #faa1a1
- **Rosa Claro**: #ffb3b3
- **Rosa Escuro**: #ff8a8a
- **Branco**: #ffffff
- **Branco Rosa**: #fff5f5

## 📱 Seções da Página

1. **Hero Section** - Título principal com botão CTA
2. **Sobre o Evento** - Descrição e características
3. **Detalhes Importantes** - Data, local e dress code
4. **Atividades da Noite** - Lista de atividades e brincadeiras
5. **Sugestões de Presentes** - Ideias para a Rubi
6. **Call to Action Final** - Confirmação de presença
7. **Footer** - Informações de copyright

## 🔐 Sistema de Senha

A página é protegida por uma senha para manter o evento exclusivo:
- **Senha**: `noitedasmeninas`
- **Dica**: É o nome do evento em uma palavra
- **Funcionalidade**: Após inserir a senha correta, a página fica desbloqueada
- **Persistência**: A senha é lembrada no navegador (localStorage)

## 🚀 Como Usar

### Opção 1: Abrir Diretamente
1. Baixe todos os arquivos para uma pasta
2. Abra o arquivo `index.html` em qualquer navegador
3. Digite a senha: `noitedasmeninas`

### Opção 2: Servidor Local
```bash
# Se você tiver Python instalado
python -m http.server 8000

# Se você tiver Node.js instalado
npx serve .

# Se você tiver PHP instalado
php -S localhost:8000
```

### Opção 3: Deploy Online
- **Netlify**: Arraste a pasta para netlify.com
- **Vercel**: Conecte seu repositório GitHub
- **GitHub Pages**: Ative nas configurações do repositório

## 🛠️ Personalização

### Alterar Cores
Edite o arquivo `styles.css` e modifique as variáveis de cor:
```css
/* Exemplo de alteração */
.hero {
    background: linear-gradient(135deg, #sua-cor 0%, #outra-cor 100%);
}
```

### Alterar Conteúdo
Edite o arquivo `index.html` para modificar:
- Títulos e textos
- Datas e horários
- Endereços e informações de contato
- Lista de atividades e presentes

### Alterar Funcionalidades
Edite o arquivo `script.js` para modificar:
- Comportamento dos botões
- Animações e efeitos
- Modal de confirmação
- Contador regressivo

## 📁 Estrutura de Arquivos

```
girlsnight/
├── index.html              # Estrutura HTML principal
├── styles.css              # Estilos CSS e responsividade
├── script.js               # Funcionalidades JavaScript
├── config.js               # Configurações da página
├── github-config.js        # Configurações do GitHub (credenciais)
├── confirmacoes.json       # Arquivo para armazenar confirmações
├── INSTRUCOES_REPOSITORIO.md # Instruções avançadas
└── README.md               # Este arquivo de instruções
```

## 📝 Sistema de Confirmações

- **Formulário**: Campo para inserir nome completo
- **Validação**: Nome é obrigatório
- **Armazenamento**: Salva no localStorage do navegador E no arquivo confirmacoes.json do repositório
- **Visualização**: Mostra contador de confirmações na página
- **Persistência**: Dados ficam salvos mesmo após fechar o navegador

### 🚀 Salvamento no Repositório GitHub
Para salvar as confirmações diretamente no arquivo `confirmacoes.json` do repositório:

1. **Configure o GitHub**: Siga as instruções em `CONFIGURAR_GITHUB.md`
2. **Crie um token**: Personal Access Token com permissões `repo`
3. **Edite github-config.js**: Adicione suas credenciais
4. **Teste**: Faça uma confirmação e verifique se o arquivo foi atualizado

### ⚠️ Importante
- **Configuração obrigatória**: Para salvar no repositório, configure o `github-config.js`
- **Sem configuração**: As confirmações ficam apenas no navegador
- **Segurança**: Nunca compartilhe seu token do GitHub

## 🎯 Funcionalidades JavaScript

- **🔐 Sistema de Senha**: Protege a página com senha "noitedasmeninas"
- **📝 Formulário de Confirmação**: Campo para nome da pessoa
- **💾 Salvamento de Dados**: Salva confirmações no localStorage e gera JSON
- **Modal de Confirmação**: Aparece ao clicar em "Confirmar Presença"
- **Animações de Entrada**: Elementos aparecem com fade-in ao scroll
- **Efeitos Hover**: Cards e botões têm interações visuais
- **Confetti**: Efeito especial ao confirmar presença
- **Contador Regressivo**: Mostra tempo restante para o evento
- **Parallax**: Efeito de profundidade no hero section
- **Responsividade**: Adaptação automática para mobile

## 🌟 Fontes Utilizadas

- **Great Vibes**: Títulos principais (cursiva elegante)
- **Poppins**: Texto secundário (clean e moderna)
- **Font Awesome**: Ícones e símbolos

## 📱 Responsividade

A página é totalmente responsiva e se adapta a:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎨 Elementos Visuais

- **Laços Decorativos**: Cantos das seções
- **Corações Flutuantes**: Animação no hero
- **Fitas**: Divisores entre seções
- **Gradientes**: Transições suaves de cor
- **Sombras**: Profundidade e elevação
- **Bordas Arredondadas**: Design moderno e suave

## 🔧 Compatibilidade

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 📞 Suporte

Para dúvidas ou personalizações adicionais, entre em contato ou consulte a documentação do projeto.

---

**Desenvolvido com 💖 para a Girls Night da Rubi** 🎀
