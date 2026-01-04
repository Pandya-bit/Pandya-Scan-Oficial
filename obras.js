const minhasObras = [
    {
        id: 1,
        titulo: "NOME DA OBRA AQUI",
        imagem: "https://i.ibb.co/PS61nSH/1c220510e21b2d0f67be585ce5e4bc32e7a72f3a-600-800-100412.jpg",
        autor: "NOME DO AUTOR",
        artista: "NOME DO ARTISTA",
        status: "Ativo",
        tipo: "Manhwa",
        lancamento: "2026",
        generos: ["Tag1", "Tag2", "Tag3"],
        sinopse: "ESCREVA AQUI O RESUMO DA HISTÓRIA",
        linkDetalhes: "detalhes.html",
        capitulos: [
            { num: "01", data: "04/01/2026", link: "leitor.html" }
        ]
    },
    {
        id: 2,
        titulo: "ESPAÇO RESERVADO 2",
        imagem: "",
        autor: "",
        artista: "",
        status: "Em breve",
        tipo: "",
        lancamento: "",
        generos: [],
        sinopse: "",
        linkDetalhes: "detalhes.html",
        capitulos: []
    },
    {
        id: 3,
        titulo: "ESPAÇO RESERVADO 3",
        imagem: "",
        autor: "",
        artista: "",
        status: "Em breve",
        tipo: "",
        lancamento: "",
        generos: [],
        sinopse: "",
        linkDetalhes: "detalhes.html",
        capitulos: []
    },
    {
        id: 4,
        titulo: "ESPAÇO RESERVADO 4",
        imagem: "",
        autor: "",
        artista: "",
        status: "Em breve",
        tipo: "",
        lancamento: "",
        generos: [],
        sinopse: "",
        linkDetalhes: "detalhes.html",
        capitulos: []
    },
    {
        id: 5,
        titulo: "ESPAÇO RESERVADO 5",
        imagem: "",
        autor: "",
        artista: "",
        status: "Em breve",
        tipo: "",
        lancamento: "",
        generos: [],
        sinopse: "",
        linkDetalhes: "detalhes.html",
        capitulos: []
    }
];

// Função que desenha as capas na tela principal (index.html)
function exibirObras() {
    const container = document.getElementById('lista-obras');
    if (!container) return;

    container.innerHTML = minhasObras.map(obra => `
        <div class="card-manga">
            <a href="${obra.linkDetalhes}">
                <div class="status-badge">${obra.status}</div>
                <img src="${obra.imagem}" alt="${obra.titulo}">
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
document.addEventListener('DOMContentLoaded', exibirObras);
