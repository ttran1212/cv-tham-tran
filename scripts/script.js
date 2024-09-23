// Affiche le bouton de retour en haut lorsqu'on descend dans la page
window.onscroll = function() {
    var backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block"; // Affiche la flèche
    } else {
        backToTopButton.style.display = "none";  // Cache la flèche
    }
};

// Fonction pour remonter en haut de la page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Défiler en douceur
    });
}