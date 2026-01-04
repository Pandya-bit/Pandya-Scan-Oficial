// BANCO DE DADOS DA PANDYA SCAN
const obras = [
    {
        id: "imugi-lenhador",
        titulo: "Imugi e o Lenhador",
        imagem: "https://i.ibb.co/689z0Hh/1c220510e21b2d0f67be585ce5e4bc32e7a72f3a-600-800-100412.jpg",
        genero: "Drama, Fantasia, Shounen Ai",
        tipo: "Manhwa",
        autor: "Nome do Autor",
        status: "Lançamento",
        sinopse: "Aqui você escreve a história do Imugi e do Lenhador...",
        link: "detalhes.html"
    }
    // Para adicionar a próxima obra, basta colocar uma vírgula após a "}" acima e colar um novo bloco igual.
];

// Torna a lista visível para os outros arquivos (scripts.js)
window.listaObras = obras;

// Função para garantir que os detalhes sejam salvos ao clicar
function guardarDetalhes(id) {
    const obra = obras.find(o => o.id === id);
    if (obra) {
        localStorage.setItem('obraAtual', JSON.stringify(obra));
    }
}
