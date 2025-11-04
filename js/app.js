import { homeTemplate, formTemplate, usersTemplate } from './templates.js';
import { render, bindNavButtons } from './dom.js';
import { validateForm } from './validation.js';

function loadPage(page) {
  if (!page) return;
  switch(page) {
    case 'home':
      render(homeTemplate());
      break;
    case 'form':
      render(formTemplate());
      validateForm();
      break;
    case 'users':
      const users = JSON.parse(localStorage.getItem('users')) || [];
      render(usersTemplate(users));
      break;
    default:
      render('<h1>Página não encontrada</h1>');
  }

  updateAriaCurrent(page);

  const main = document.getElementById('app');
  main.focus();
}

loadPage('home');
bindNavButtons(loadPage);

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.dataset.index;
        let users = JSON.parse(localStorage.getItem('users')) || [];

        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));

        loadPage('users');
    }
});

document.addEventListener('keydown', (event) => {
  if (event.altKey) {
    switch (event.key) {
      case '1':
        loadPage('home');
        break;
      case '2':
        loadPage('form');
        break;
      case '3':
        loadPage('users');
        break;
    }
  }
});

function updateAriaCurrent(page) {
  const buttons = document.querySelectorAll('nav button');
  buttons.forEach(btn => {
    if (btn.dataset.page === page) {
      btn.setAttribute('aria-current', 'page');
    } else {
      btn.removeAttribute('aria-current');
    }
  });
}

// Alternância de tema acessível
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeButton(savedTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
  if (theme === 'dark') {
    themeToggle.textContent = '☀️ Modo Claro';
    themeToggle.setAttribute('aria-pressed', 'true');
  } else {
    themeToggle.textContent = '🌙 Modo Escuro';
    themeToggle.setAttribute('aria-pressed', 'false');
  }
}

// Alternância de modo alto contraste
const contrastToggle = document.getElementById('contrast-toggle');
const savedContrast = localStorage.getItem('contrast') === 'true';

// Se o modo alto contraste estiver ativado, aplica o tema
if (savedContrast) {
  document.documentElement.setAttribute('data-theme', 'high-contrast');
  updateContrastButton(true);
}

// Alterna entre normal e alto contraste
contrastToggle.addEventListener('click', () => {
  const isHighContrast = document.documentElement.getAttribute('data-theme') === 'high-contrast';
  const newContrast = !isHighContrast;

  if (newContrast) {
    document.documentElement.setAttribute('data-theme', 'high-contrast');
  } else {
    // Volta para o tema salvo (claro/escuro)
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  localStorage.setItem('contrast', newContrast);
  updateContrastButton(newContrast);
});

function updateContrastButton(enabled) {
  if (enabled) {
    contrastToggle.textContent = '🌗 Contraste Normal';
    contrastToggle.setAttribute('aria-pressed', 'true');
  } else {
    contrastToggle.textContent = '🌓 Alto Contraste';
    contrastToggle.setAttribute('aria-pressed', 'false');
  }
}

