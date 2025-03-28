document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Fonction pour basculer le mode sombre
    function toggleDarkMode() {
        const isDarkMode = body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('nav').classList.toggle('dark-mode');
        document.querySelector('footer')?.classList.toggle('dark-mode');

        // Enregistrer l'état dans localStorage
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    }

    // Restaurer l'état du mode sombre depuis localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('nav').classList.add('dark-mode');
        document.querySelector('footer')?.classList.add('dark-mode');
        darkModeToggle.checked = true; // Synchroniser l'état du toggle
    }

    // Ajouter un événement pour le toggle switch
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', toggleDarkMode);
    }

    // Gestion du menu mobile
    const menuButton = document.querySelector('.mobile-nav-button');
    const navMenu = document.querySelector('nav ul');

    function toggleMenu() {
        navMenu.classList.toggle('show');
    }

    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }
});


let currentIndex = 0;

function prevFormation() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = document.querySelectorAll('.formation').length - 1;
    }

    updateDisplay();
}

function nextFormation() {
    currentIndex++;

    if (currentIndex >= document.querySelectorAll('.formation').length) {
        currentIndex = 0;
    }

    updateDisplay();
}

function updateDisplay() {
    const formations = document.querySelectorAll('.formation');

    formations.forEach((formation) => {
        formation.style.display = 'none';
    });

    formations[currentIndex].style.display = 'block';
}