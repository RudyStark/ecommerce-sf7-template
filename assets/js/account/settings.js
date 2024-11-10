// assets/js/account/settings.js

document.addEventListener('DOMContentLoaded', function() {
    // Tab management
    const tabButtons = document.querySelectorAll('.settings-nav-item');
    const tabContents = document.querySelectorAll('.settings-tab');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            const targetTab = document.getElementById(tabId);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });

    // Form submission processing animation
    const passwordForm = document.querySelector('form[name="password_user"]');
    if (passwordForm) {
        passwordForm.addEventListener('submit', function(event) {
            const submitButton = this.querySelector('button[type="submit"]');

            if (!submitButton.disabled) {
                submitButton.disabled = true;
                const originalContent = submitButton.innerHTML;
                submitButton.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Processing...';

                // Restaurer le bouton si le formulaire n'est pas soumis après 10 secondes
                setTimeout(() => {
                    if (submitButton.disabled) {
                        submitButton.disabled = false;
                        submitButton.innerHTML = originalContent;
                    }
                }, 10000);
            }
        });
    }

    // Activer l'onglet en fonction du fragment d'URL
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        const tabToActivate = document.querySelector(`[data-tab="${hash}"]`);
        if (tabToActivate) {
            tabToActivate.click();
        }
    }
});
