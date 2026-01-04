const menuHTML = `
<nav style="background: #1a0b2e; padding: 15px; display: flex; gap: 20px; border-bottom: 2px solid #9d4edd;">
    <a href="index.html" style="color: white; text-decoration: none; font-weight: bold;">PANDYA SCAN</a>
    <a href="index.html" style="color: #ccc; text-decoration: none;">Início</a>
    <a href="todos.html" style="color: #ccc; text-decoration: none;">Todos</a>
</nav>
`;

function injetarMenu() {
    const container = document.getElementById('menu-container');
    if (container) {
        container.innerHTML = menuHTML;
    }
}

document.addEventListener('DOMContentLoaded', injetarMenu);
