const obras = [
    {
        id: "imugi-lenhador",
        titulo: "Imugi e o Lenhador",
        imagem: "https://i.ibb.co/689z0Hh/1c220510e21b2d0f67be585ce5e4bc32e7a72f3a-600-800-100412.jpg",
        autor: "Chun-Sik",
        generos: ["Yaoi (BL)", "Adulto", "Maduro", "+18", "Fantasia", "Drama"],
        tipo: "Manhwa",
        lancamento: "2026",
        estado: "Em Andamento",
        ultimoCap: "01",
        sinopse: "Um lenhador pobre chamado Yeongdo, que vive sozinho enquanto anseia por uma família. E um imugi — um espírito serpente que só pode se transformar em dragão matando sua companheira. Yeongdo ouve um boato de que se você jogar um machado em um lago na montanha, o espírito da montanha o devolverá como um machado de ouro. Querendo realizar um casamento, ele joga seu machado no lago. Mas o que emerge do lago não é um espírito da montanha — é um imugi, furioso depois que inúmeros humanos continuaram atirando seus machados em suas águas. O imugi, que estava prestes a matar o humano antes dele, é atraído pelo cheiro que vem de Yeongdo... e começa a ficar obcecado por ele.",
        link: "detalhes.html"
    }
];

window.listaObras = obras;

function guardarDetalhes(id) {
    const obra = obras.find(o => o.id === id);
    if (obra) {
        localStorage.setItem('obraAtual', JSON.stringify(obra));
    }
}
