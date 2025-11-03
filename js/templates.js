export function homeTemplate() {
    return `
        <section class="page home">
            <h1>Bem-vindo à SPA</h1>
            <p>Esta é a página inicial da aplicação.</p>
        </section>
    `;
}

export function formTemplate() {
    return `
        <section class="">
            <h1>Formulário</h1>
            <form id="userForm" novalidate class="form">
                <label>Nome:
                    <input id="nome" type="text" name="nome" required minlength="2" placeholder="Seu nome">
                </label>

                <label>Email:
                    <input id="email" type="email" name="email" required placeholder="seu@exemplo.com">
                </label>

                <button type="submit" class="btn">Enviar</button>
            </form>
           

            <div id="feedback" class="feedback"></div>
        </section>
    `;
}

export function usersTemplate(users) {
    return `
        <section class="page users-page">
            <h1>Usuários Cadastrados</h1>
            ${
                users.length === 0
                    ? '<p>Nenhum usuário cadastrado.</p>'
                    : `<ul class="user-list">
                        ${users
                            .map(
                                (u, index) => `
                                    <li>
                                        <span>${u.nome} - ${u.email}</span>
                                        <button class="delete-btn" data-index="${index}" title="Excluir">
                                            🗑️
                                        </button>
                                    </li>
                                `
                            )
                            .join('')}
                    </ul>`
            }
        </section>
    `;
}

