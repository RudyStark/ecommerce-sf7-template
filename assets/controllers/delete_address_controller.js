import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['confirmButton'];

    openModal(event) {
        event.preventDefault();
        const deleteUrl = event.currentTarget.getAttribute('href');
        this.confirmButtonTarget.href = deleteUrl;

        const modal = new bootstrap.Modal(document.getElementById('deleteAddressModal'));
        modal.show();
    }
}
