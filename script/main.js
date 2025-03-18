document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        fetch('../pages/header.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erreur HTTP : ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                headerContainer.innerHTML = data;

                const menuIcon = document.querySelector('.menu-icon');
                const navUl = document.querySelector('nav ul');
                const mobileNavButton = document.querySelector('.mobile-nav-button');

                // Fonction pour basculer l'affichage du menu
                function toggleMenu() {
                    navUl.classList.toggle('show');
                }

                // Ajouter un événement au bouton "Liste"
                if (menuIcon) menuIcon.addEventListener('click', toggleMenu);
                if (mobileNavButton) mobileNavButton.addEventListener('click', toggleMenu);
            })
            .catch(error => console.error('Erreur lors du chargement du header:', error));
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