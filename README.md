# 🌐 Projeto SPA Interativa  
**Experiência 3 — Aplicação Web com Acessibilidade e Interatividade**

Este projeto é uma **Single Page Application (SPA)** desenvolvida em **HTML, CSS e JavaScript**, com foco em **acessibilidade (WCAG 2.1 Nível AA)**, **interatividade** e **boas práticas de usabilidade**.

---

## 🚀 Como rodar o projeto

1. Baixe ou clone este repositório:  
   ```bash
   git clone https://github.com/seuusuario/ProjetoSPA.git

2. Abra o projeto no VS Code.

3. Instale a extensão Live Server (caso ainda não tenha).

4. Clique com o botão direito no arquivo index.html →
"Open with Live Server".

5. O projeto abrirá automaticamente no navegador.

_________________________________________________________

🧭 Navegação

A aplicação possui 3 seções principais:

Página	Atalho de Teclado	Descrição
🏠 Home	Alt + 1	Página inicial da SPA
📝 Formulário	Alt + 2	Formulário de cadastro de usuários
👥 Usuários	Alt + 3	Lista dinâmica de usuários cadastrados

_________________________________________________________

♿ Acessibilidade (WCAG 2.1 — Nível AA)

Recursos implementados:

✅ Estrutura semântica (<header>, <main>, <footer>, role, aria-label)
✅ Navegação total por teclado
✅ Foco visível e consistente em todos os elementos interativos
✅ Atualização automática de foco no conteúdo principal
✅ Alternância de modo claro 🌞, modo escuro 🌙 e alto contraste ⚫🟡
✅ Armazenamento das preferências de tema no localStorage
✅ Contraste mínimo de 4.5:1 garantido
✅ Leitores de tela compatíveis (aria-live, aria-current, aria-pressed)

_________________________________________________________

🎨 Temas disponíveis
Tema	Descrição
☀️ Claro	Layout tradicional, fundo branco e tons suaves
🌙 Escuro	Fundo escuro e texto claro para ambientes noturnos
⚫ Alto Contraste	Fundo preto com amarelo para máxima legibilidade

O botão de alternância de tema está disponível na barra de navegação, com suporte para leitores de tela e armazenamento automático da preferência.

_________________________________________________________

💾 Funcionalidades principais

SPA dinâmica com troca de páginas sem recarregar o navegador

Armazenamento de dados no LocalStorage

Exclusão de usuários com atualização automática

Feedback visual e sonoro acessível (aria-live)

_________________________________________________________

🧩 Estrutura do projeto

ProjetoSPA/
│
├── index.html          # Estrutura principal da aplicação
├── css/
│   └── style.css       # Estilos e temas (claro, escuro, contraste)
├── js/
│   ├── app.js          # Controle das páginas e acessibilidade
│   ├── dom.js          # Manipulação do DOM
│   ├── templates.js    # Templates dinâmicos (Home, Form, Users)
│   └── validation.js   # Validação de formulário
└── README.md           # Documentação do projeto

___________________________________________________________

🧠 Tecnologias utilizadas

HTML5 — Estrutura semântica e acessível

CSS3 — Design responsivo e temas com variáveis

JavaScript (ES Modules) — Interatividade e renderização dinâmica

LocalStorage — Persistência dos dados do usuário

WCAG 2.1 — Diretrizes de Acessibilidade Web

____________________________________________________________

🧑‍💻 Autor(a)

Nathalia Cristina
📍 Projeto acadêmico — Experiência 3
💬 “Construindo interfaces acessíveis e interativas com foco em inclusão.”

____________________________________________________________

📚 Referências

W3C — Web Content Accessibility Guidelines (WCAG) 2.1

MDN Web Docs — HTML, CSS e JavaScript

A11Y Project — Acessibilidade Web