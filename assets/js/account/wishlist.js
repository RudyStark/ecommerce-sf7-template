document.addEventListener('DOMContentLoaded', function() {
    // Modal
    const confirmModal = new bootstrap.Modal(document.getElementById('confirmRemoveModal'));
    let currentUrl = null;

    // Gérer les clics sur les boutons de suppression
    document.querySelectorAll('.remove-wishlist-item').forEach(button => {
        button.addEventListener('click', function(e) {
            // On utilise dataset.href au lieu de href car c'est un button avec data-href
            currentUrl = this.dataset.href;
            confirmModal.show();
        });
    });

    // Gérer la confirmation de suppression
    document.getElementById('confirmRemove').addEventListener('click', function() {
        if (currentUrl) {
            window.location.href = currentUrl;
        }
    });
});
