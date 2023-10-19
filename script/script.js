// Récupère tous les éléments avec la classe "progress-bar"
const progressBarElements = document.querySelectorAll('.progress-bar');

// Itère sur chaque élément et crée une animation @keyframes
progressBarElements.forEach((progressBar, index) => {
    const percentage = parseInt(progressBar.textContent, 10);

    // Crée un élément <style> pour chaque animation
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
        @keyframes fillProgress${index} {
            from {
                width: 0;
            }
            to {
                width: ${percentage}%;
            }
        }
    `;

    // Ajoute l'élément <style> au <head> du document
    document.head.appendChild(styleElement);

    // Applique l'animation au survol de l'élément .progress
    progressBar.parentElement.addEventListener('mouseenter', () => {
        progressBar.style.animation = `fillProgress${index} 2s ease`;
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const panels = document.querySelectorAll('.education-panel');
    let currentPanel = 0;

    const showPanel = (index) => {
        panels[currentPanel].classList.remove('current');
        currentPanel = index;
        panels[currentPanel].classList.add('current');
    };

    document.getElementById('next').addEventListener('click', () => {
        if (currentPanel < panels.length - 1) {
            showPanel(currentPanel + 1);
        }
    });

    document.getElementById('prev').addEventListener('click', () => {
        if (currentPanel > 0) {
            showPanel(currentPanel - 1);
        }
    });
});
