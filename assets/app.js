import { start, navigator } from '@hotwired/turbo';
import { registerReactControllerComponents } from '@symfony/ux-react';
import './bootstrap';

// Initialiser Turbo
start();

// Configuration Turbo
navigator.config = {
    drive: {
        progressBarDelay: 0
    },
    forms: {
        confirm: () => true
    }
};

// Configuration pour éviter le prefetch des liens
document.addEventListener('turbo:before-fetch-request', (event) => {
    // Si c'est un hover/prefetch, on bloque
    if (event.detail.fetchOptions.headers['Turbo-Referrer'] === 'prefetch') {
        event.preventDefault();
        return;
    }

    // On laisse passer les requêtes du panier et autres actions normales
    const fetchingElement = event.target;
    const isCartAction = fetchingElement.matches('[data-turbo-frame="cart-qty"]');
    const isFormSubmit = event.detail.fetchOptions.method === 'POST';

    // Si ce n'est ni une action de panier ni une soumission de formulaire, on bloque
    if (!isCartAction && !isFormSubmit) {
        event.preventDefault();
        return;
    }
});

// Ne pas interférer avec les clics normaux sauf pour des cas spécifiques
document.addEventListener('turbo:click', (event) => {
    const element = event.target;
    const isCartAction = element.closest('[data-turbo-frame="cart-qty"]');
    const hasTurboDisabled = element.closest('[data-turbo="false"]');

    // Si Turbo est explicitement désactivé sur l'élément
    if (hasTurboDisabled) {
        event.preventDefault();
    }
    // Si ce n'est pas une action de panier et qu'il n'y a pas d'autre configuration spécifique
    else if (!isCartAction && !element.hasAttribute('data-turbo-frame')) {
        event.preventDefault();
    }
});

// Gestion des soumissions de formulaire
document.addEventListener('turbo:submit-start', (event) => {
    const form = event.target;

    // Si le formulaire a data-turbo="false", utiliser la soumission standard
    if (form.hasAttribute('data-turbo') && form.getAttribute('data-turbo') === 'false') {
        event.preventDefault();
        form.submit();
        return;
    }

    // Pour les formulaires normaux, laisser Turbo gérer
});

// Register React components
registerReactControllerComponents(require.context('./react/controllers', true, /\.(j|t)sx?$/));
