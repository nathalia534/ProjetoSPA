export function render(template) {
    const app = document.getElementById('app');
    app.innerHTML = template;
}

export function bindNavButtons(callback) {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => callback(btn.dataset.page));
    });
}
