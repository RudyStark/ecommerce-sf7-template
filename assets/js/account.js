// Account / Dashboard
function copyToClipboard(element) {
    // Récupérer le code du coupon depuis l'attribut data-coupon
    var couponCode = element.getAttribute('data-coupon');

    // Utiliser l'API Clipboard pour copier le texte
    navigator.clipboard.writeText(couponCode).then(function() {
        // Si la copie a réussi, changer l'icône pour indiquer le succès
        element.innerHTML = '<i class="bi bi-check2-circle text-success"></i>';

        // Remettre l'icône d'origine après un délai
        setTimeout(function() {
            element.innerHTML = '<i class="bi bi-clipboard"></i>';
        }, 2000); // 2 secondes
    }).catch(function(err) {
        console.error('Erreur lors de la copie: ', err);
    });
}
