const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const botaoMenosProjetos = document.querySelector('.btn-menos-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotaoMostrar();
});

botaoMenosProjetos.addEventListener('click', () => {
    mostrarMenosProjetos();
    esconderBotao();
});

function esconderBotaoMostrar() {
    botaoMostrarProjetos.classList.add("remover");
    botaoMenosProjetos.classList.remove("remover");
}

function esconderBotao() {
    botaoMenosProjetos.classList.add("remover");
    botaoMostrarProjetos.classList.remove("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

function mostrarMenosProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
}

