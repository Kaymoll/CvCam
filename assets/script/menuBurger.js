// Menu burger
const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuOverlay = document.getElementById('menuOverlay');
const backdrop = document.getElementById('backdrop');

function toggleMenu() {
    hamburgerBtn.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    backdrop.classList.toggle('active');
}

function closeMenu() {
    hamburgerBtn.classList.remove('active');
    menuOverlay.classList.remove('active');
    backdrop.classList.remove('active');
}

hamburgerBtn.addEventListener('click', toggleMenu);
backdrop.addEventListener('click', closeMenu);

// Fermer lors du clic sur un lien
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Gérer le redimensionnement de fenêtre
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});
