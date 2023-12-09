document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.querySelector('.menu-icon');
    var navUl = document.querySelector('nav ul');
    var mobileNavButton = document.querySelector('.mobile-nav-button');

    function toggleMenu() {
        navUl.classList.toggle('show');
    }

    menuIcon.addEventListener('click', toggleMenu);
    mobileNavButton.addEventListener('click', toggleMenu);
});


// Déclare une variable pour suivre l'index de la formation actuellement affichée
let currentIndex = 0;

// Fonction pour afficher la formation précédente
function prevFormation() {
    currentIndex--;

    // Si on est en dehors des limites, revenir à la dernière formation
    if (currentIndex < 0) {
        currentIndex = document.querySelectorAll('.formation').length - 1;
    }

    updateDisplay();
}

// Fonction pour afficher la formation suivante
function nextFormation() {
    currentIndex++;

    // Si on est en dehors des limites, revenir à la première formation
    if (currentIndex >= document.querySelectorAll('.formation').length) {
        currentIndex = 0;
    }

    updateDisplay();
}

// Fonction pour mettre à jour l'affichage en fonction de l'index actuel
function updateDisplay() {
    // Récupère toutes les formations
    const formations = document.querySelectorAll('.formation');

    // Cache toutes les formations
    formations.forEach((formation) => {
        formation.style.display = 'none';
    });

    // Affiche la formation actuelle
    formations[currentIndex].style.display = 'block';
}

