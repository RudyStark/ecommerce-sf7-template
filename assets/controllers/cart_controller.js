import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    connect() {
        const toastElement = document.getElementById('liveToast');
        if (toastElement) {
            const toast = new bootstrap.Toast(toastElement);
            toast.show();
        }
    }
}
