import { homeTemplate, formTemplate, usersTemplate } from './templates.js';
import { render, bindNavButtons } from './dom.js';
import { validateForm } from './validation.js';

function loadPage(page) {
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

