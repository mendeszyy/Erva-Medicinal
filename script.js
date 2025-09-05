// Mensagem de boas-vindas
console.log("🌿 Bem-vindo ao Portal das Ervas Medicinais!");

// Efeito ao clicar nas ervas
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const nome = card.querySelector("h3").textContent;
        alert(`Você selecionou a erva: ${nome}`);
    });
});

// Rolagem suave ao clicar no menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const id = link.getAttribute('href').substring(1);
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    });
});
