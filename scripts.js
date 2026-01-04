
document.addEventListener('DOMContentLoaded', () => {
    const listaIndex = document.getElementById('lista-obras');
    const listaTodos = document.getElementById('lista-completa');
    const obras = window.listaObras;

    // 1. CARREGAR VITRINE (Página Inicial e Todos)
    if (obras && (listaIndex || listaTodos)) {
        const container = listaIndex || listaTodos;
        container.innerHTML = ""; 
        obras.forEach(obra => {
            container.innerHTML += `
                <div class="obra-card" onclick="guardarDetalhes('${obra.id}')" style="cursor:pointer; transition: 0.3s;">
                    <a href="detalhes.html" style="text-decoration:none;">
                        <div class="capa-container" style="position:relative;">
                            <img src="${obra.imagem}" style="width:100%; max-width:160px; height:230px; border-radius:12px; object-fit:cover; border: 2px solid #333;">
                            <span style="position:absolute; bottom:10px; left:5px; background:rgba(0,0,0,0.8); color:#00ff00; font-size:10px; padding:2px 6px; border-radius:4px;">● ${obra.estado}</span>
                        </div>
                        <h3 style="font-size:14px; color:white; margin:10px 0 5px 0; text-align:left; width:160px;">${obra.titulo}</h3>
                        <div style="background:#222; padding:5px; border-radius:4px; display:flex; justify-content:space-between; width:150px;">
                           <span style="color:#ccc; font-size:11px;">Capítulo ${obra.ultimoCap}</span>
                           <span style="color:white; background:red; font-size:9px; padding:2px 4px; border-radius:2px;">NEW</span>
                        </div>
                    </a>
                </div>`;
        });
    }

    // 2. CARREGAR PÁGINA DE DETALHES (Ficha Técnica)
    if (window.location.pathname.includes('detalhes.html')) {
        const obra = JSON.parse(localStorage.getItem('obraAtual'));
        if (obra) {
            document.getElementById('nome-obra').innerText = obra.titulo;
            document.getElementById('capa-obra').src = obra.imagem;
            document.getElementById('autor-obra').innerText = obra.autor;
            document.getElementById('tipo-obra').innerText = obra.tipo;
            document.getElementById('lancamento-obra').innerText = obra.lancamento;
            document.getElementById('estado-obra').innerText = obra.estado;
            document.getElementById('sinopse-obra').innerText = obra.sinopse;
            
            const generoCont = document.getElementById('generos-container');
            generoCont.innerHTML = "";
            obra.generos.forEach(g => {
                generoCont.innerHTML += `<span style="background:#441144; color:white; padding:4px 10px; border-radius:20px; font-size:12px; margin-right:5px; border: 1px solid #e91e63;">${g}</span>`;
            });
        }
    }
});

function guardarDetalhes(id) {
    const obra = window.listaObras.find(o => o.id === id);
    localStorage.setItem('obraAtual', JSON.stringify(obra));
}
