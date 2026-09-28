document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de "Saiba Mais"
    const botoesSaberMais = document.querySelectorAll('.btn-saber-mais');
    // Seleciona todos os botões de fechar (X)
    const botoesFechar = document.querySelectorAll('.btn-fechar');
    // Seleciona todas as sobreposições de modal
    const modais = document.querySelectorAll('.modal-overlay');

    // Função para abrir o modal correspondente
    botoesSaberMais.forEach(botao => {
        botao.addEventListener('click', () => {
            const idModal = botao.getAttribute('data-modal');
            const modalTarget = document.getElementById(idModal);
            if (modalTarget) {
                modalTarget.classList.add('active');
            }
        });
    });

    // Função para fechar o modal ao clicar no botão X
    botoesFechar.forEach(botao => {
        botao.addEventListener('click', () => {
            // Encontra o modal pai mais próximo e remove a classe active
            const modalPai = botao.closest('.modal-overlay');
            modalPai.classList.remove('active');
        });
    });

    // Função para fechar o modal ao clicar na área escura de fundo
    modais.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    // Suporte para fechar usando a tecla ESC do teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modais.forEach(modal => {
                if (modal.classList.contains('active')) {
                    modal.classList.remove('active');
                }
            });
        }
    });
});
