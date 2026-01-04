const minhasObras = [
    {
        id: 1,
        titulo: "Imugi e o lenhador",
        imagem: "https://telegra.ph/file/a8df15bd81d4a6455c7266866a3f4db92f84c7c0.jpg",
        status: "Em andamento",
        linkDetalhes: "detalhes.html" // Aqui ele vai para a sinopse!
    }
];

function carregarObras() {
    const container = document.getElementById('lista-obras');
    if(!container) return;
    
    container.innerHTML = minhasObras.map(obra => `
        <div class="card-obra">
            <a href="${obra.linkDetalhes}">
                <img src="${obra.imagem}" alt="${obra.titulo}" onerror="this.src='https://via.placeholder.com/200x300?text=Erro+na+Imagem'">
            </a>
            <div style="padding:10px;">
                <h4 style="margin:0;">${obra.titulo}</h4>
                <p style="font-size:0.7rem; color:#9d4edd;">${obra.status}</p>
                <a href="${obra.linkDetalhes}" style="display:block; background:#7b2cbf; color:white; text-align:center; padding:5px; border-radius:5px; text-decoration:none; font-size:0.8rem;">Ver Capítulos</a>
            </div>
        </div>
    `).join('');
}

carregarObras();
