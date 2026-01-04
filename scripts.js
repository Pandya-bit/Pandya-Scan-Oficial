function carregarBiblioteca() {
    const container = document.getElementById('lista-completa');
    if (!container) return;

    container.innerHTML = minhasObras.map(obra => `
        <div class="card-manga">
            <a href="detalhes.html">
                <img src="${obra.imagem || 'https://via.placeholder.com/200x300'}" alt="${obra.titulo}">
            </a>
            <div class="card-info">
                <h3>${obra.titulo}</h3>
                <a href="${obra.capitulos.length > 0 ? obra.capitulos[0].link : '#'}" class="btn-cap">
                    ${obra.capitulos.length > 0 ? 'Capítulo ' + obra.capitulos[0].num : 'Em breve'}
                </a>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', carregarBiblioteca);
