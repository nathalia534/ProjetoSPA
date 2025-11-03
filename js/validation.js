export function validateForm() {
    const form = document.getElementById('userForm');
    const feedback = document.getElementById('feedback');

    if (!form || !feedback) return;

    if (form.dataset.listenerAttached === 'true') return;
    form.dataset.listenerAttached = 'true';

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            const firstInvalid = form.querySelector(':invalid');

            let message = '';

            if (firstInvalid) {
                const name = firstInvalid.name || firstInvalid.id || 'campo';
                message = `${name}: ${firstInvalid.validationMessage}`;
                firstInvalid.focus();
            } else {
                message = 'Existem campos com preenchimento incorreto.';
            }

            feedback.textContent = message;
            feedback.style.color = 'red';
            return;
        }

        const formData = new FormData(form);
        const nome = (formData.get('nome') || '').toString().trim();
        const email = (formData.get('email') || '').toString().trim();

        if (!nome || !email) {
            feedback.textContent = 'Preencha todos os campos corretamente.';
            feedback.style.color = 'red';
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ nome, email, createdAt: new Date().toISOString() });
        localStorage.setItem('users', JSON.stringify(users));

        feedback.textContent = 'Formulário enviado com sucesso!';
        feedback.style.color = 'green';
        form.reset();
    });
}
