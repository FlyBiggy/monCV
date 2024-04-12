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

