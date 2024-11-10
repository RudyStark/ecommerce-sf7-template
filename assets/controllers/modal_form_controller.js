// assets/controllers/modal_form_controller.js
import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['modal', 'form'];

    connect() {
        this.modalTarget.addEventListener('hidden.bs.modal', () => {
            if (this.hasFormTarget) {
                this.formTarget.reset();
            }
        });

        this.modalTarget.addEventListener('show.bs.modal', (event) => {
            if (!event.relatedTarget) return;

            const button = event.relatedTarget;
            const addressId = button.dataset.addressId;

            if (addressId && this.hasFormTarget) {
                // C'est une édition
                this.formTarget.action = `/account/addresses/edit/${addressId}`;
            } else if (this.hasFormTarget) {
                // C'est une nouvelle adresse
                this.formTarget.action = '/account/addresses/add';
            }
        });
    }

    async submitForm(event) {
        event.preventDefault();

        if (!this.hasFormTarget) return;

        try {
            const response = await fetch(this.formTarget.action, {
                method: 'POST',
                body: new FormData(this.formTarget)
            });

            const data = await response.json();

            if (data.success) {
                // Fermer la modale
                const modal = bootstrap.Modal.getInstance(this.modalTarget);
                if (modal) {
                    modal.hide();
                }

                // Recharger la page pour voir les changements
                window.location.reload();
            } else {
                // Afficher les erreurs
                console.error('Form errors:', data.errors);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
}
