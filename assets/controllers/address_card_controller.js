import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['overlay'];

    connect() {
        // Close overlay when clicking outside
        document.addEventListener('click', this.closeOverlay.bind(this));
    }

    disconnect() {
        document.removeEventListener('click', this.closeOverlay.bind(this));
    }

    toggleOverlay(event) {
        event.stopPropagation(); // Prevent closing the overlay
        // Close all other overlays
        document.querySelectorAll('.address-card .overlay').forEach((overlay) => {
            if (overlay !== this.overlayTarget) {
                overlay.classList.remove('active');
            }
        });
        // Overlay is active
        this.overlayTarget.classList.toggle('active');
    }

    closeOverlay(event) {
        if (!this.element.contains(event.target)) {
            this.overlayTarget.classList.remove('active');
        }
    }
}
