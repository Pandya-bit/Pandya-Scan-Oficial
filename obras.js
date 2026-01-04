const minhasObras = [
    {
        id: 1,
        titulo: "Imugi e o lenhador",
        imagem: "https://ibb.co/CsNXrjSM.jpg",
        status: "Em andamento",
        generos: ["Yaoi", "Adulto", "Sobrenatural"],
        popular: true,
        link: "leitor-imugi.html"
    },
    // Quando tiver outro mangá, é só copiar o bloco acima e colar aqui embaixo
];

// Função para mostrar as obras no site
function carregarObras() {
    const container = document.getElementById('lista-obras');
    if(!container) return;
    
    container.innerHTML = minhasObras.map(obra => `
        <div class="card-obra" style="margin-bottom: 20px;">
            <img src="${obra.imagem}" alt="${obra.titulo}" style="width:100%; height:250px; object-fit:cover; border-radius:8px;">
            <div style="padding:10px;">
                <h4 style="margin:5px 0; font-size:1rem;">${obra.titulo}</h4>
                <span style="font-size:0.7rem; color:#9d4edd;">${obra.status}</span>
                <button onclick="favoritar(${obra.id})" style="background:none; border:none; color:#ff4081; cursor:pointer; float:right;">❤️ Favoritar</button>
                <a href="${obra.link}" style="display:block; background:#7b2cbf; color:white; text-align:center; padding:8px; border-radius:5px; text-decoration:none; margin-top:10px; font-size:0.8rem;">Ler Agora</a>
            </div>
        </div>
    `).join('');
}

window.onload = carregarObras;
