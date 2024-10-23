import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ["menu"]

    connect() {
        console.log("Menu controller connected");
    }

    toggleMenu() {
        // Toggle d-none class
        this.menuTarget.classList.toggle('d-none');

        // Toggle icons
        const menuIcon = this.element.querySelector('.menu-icon');
        const closeIcon = this.element.querySelector('.close-icon');

        if (menuIcon && closeIcon) {
            menuIcon.classList.toggle('d-none');
            closeIcon.classList.toggle('d-none');
        }
    }
}
