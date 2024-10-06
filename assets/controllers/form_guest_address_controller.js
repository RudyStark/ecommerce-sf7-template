import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    connect() {
        console.log('Hello from form_guest_address_controller.js');
    }

    toggleForm(event) {
        event.preventDefault();
        const guestForm = document.getElementById("guestForm");
        if (guestForm.classList.contains("d-none")) {
            guestForm.classList.remove("d-none");
        } else {
            guestForm.classList.add("d-none");
        }
    }

}
