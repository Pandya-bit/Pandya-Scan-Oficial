const minhasObras = [
    {
        id: 1,
        titulo: "Imugi e o lenhador",
        imagem: "https://i.ibb.co/VWVm0fS/CsNXrj-SM.jpg",
        status: "Ativo",
        autor: "Pendente",
        artista: "Pendente",
        tags: ["Yaoi", "Sobrenatural", "Adulto"],
        sinopse: "Um lenhador pobre chamado Yeongdo, que vive sozinho enquanto anseia por uma família.
E um imugi — um espírito serpente que só pode se transformar em dragão matando sua companheira.
Yeongdo ouve um boato de que se você jogar um machado em um lago na montanha, o espírito da montanha o devolverá como um machado de ouro. Querendo realizar um casamento, ele joga seu machado no lago.
Mas o que emerge do lago não é um espírito da montanha —
é um imugi, furioso depois que inúmeros humanos continuaram atirando seus machados em suas águas.
O imugi, que estava prestes a matar o humano antes dele, é atraído pelo cheiro que vem de Yeongdo... e começa a ficar obcecado por ele.",
        // Se não tiver capítulo postado, deixe o array vazio: []
        capitulos: [
            { num: "01", data: "04/01/2026", link: "leitor.html" }
        ]
    }
];

function exibirObras() {
    const container = document.getElementById('lista-obras');
    if (!container) return;

    container.innerHTML = minhasObras.map(obra => `
        <div class="card-portal" style="margin-bottom: 30px;">
            <a href="detalhes.html?id=${obra.id}">
                <div class="capa-container" style="position: relative;">
                    <img src="${obra.imagem}" style="width:100%; border-radius: 10px 10px 0 0; display: block;">
                    <div class="tag-status" style="position: absolute; top: 10px; left: 10px; background: #25d366; width: 15px; height: 15px; border-radius: 50%; border: 2px solid white;"></div>
                </div>
            </a>
            <div class="info-portal" style="background: #1a0b2e; padding: 10px; border-radius: 0 0 10px 10px; text-align: center;">
                <h3 style="margin: 5px 0; font-size: 1rem; color: white;">${obra.titulo}</h3>
                ${obra.capitulos.length > 0 ? obra.capitulos.slice(0, 2).map(cap => `
                    <a href="${cap.link}" style="display: block; background: #000; color: white; text-decoration: none; padding: 8px; margin-top: 5px; border-radius: 4px; font-size: 0.85rem;">
                        Capítulo ${cap.num} <span style="float: right; color: #9d4edd; font-size: 0.7rem;">NEW</span>
                    </a>
                `).join('') : '<p style="color: #666; font-size: 0.8rem;">Em breve</p>'}
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', exibirObras);
