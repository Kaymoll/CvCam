// Script gestionnaire du thème Dark/Light
const themeToggle = document.getElementById('theme-checkbox');
const body = document.body;
const header = document.querySelector('.header');

// Fonction pour appliquer le thème
function applyTheme(isLight) {
    if (isLight) {
        body.setAttribute('data-theme', 'light');
        header.setAttribute('data-theme', 'light');
        document.querySelector('.first').setAttribute('data-theme', 'light');
        about.setAttribute('data-theme', 'light');
        portfolio.setAttribute('data-theme', 'light');
    } else {
        body.removeAttribute('data-theme');
        header.removeAttribute('data-theme');
        document.querySelector('.first').removeAttribute('data-theme');
        about.removeAttribute('data-theme');
        portfolio.removeAttribute('data-theme');
    }
    // Enregistrement du thème
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}
// Checker de l'event
themeToggle.addEventListener('change', function () {
    applyTheme(this.checked);
});

// Sauvegarde de l'event
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    const isLight = savedTheme === 'light';

    themeToggle.checked = isLight;
    applyTheme(isLight);
});
