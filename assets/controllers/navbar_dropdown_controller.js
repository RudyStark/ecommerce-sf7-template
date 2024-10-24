// navbar_dropdown_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [
        "dropdownButton",
        "dropdownMenu",
        "userMenuButton",
        "userDropdownMenu",
        "mobileMenu",
        "mobileMenuButton",
        "megaMenu",
        "languageButton",  // Ajout pour le dropdown de langue
        "languageMenu"     // Ajout pour le menu de langue
    ]

    connect() {
        // Initialize user dropdown
        if (this.hasUserDropdownMenuTarget) {
            document.addEventListener('click', this.closeUserDropdown.bind(this));
        }

        // Initialize language dropdown
        if (this.hasLanguageMenuTarget) {
            document.addEventListener('click', this.closeLanguageDropdown.bind(this));
        }
    }

    disconnect() {
        if (this.hasUserDropdownMenuTarget) {
            document.removeEventListener('click', this.closeUserDropdown.bind(this));
        }

        if (this.hasLanguageMenuTarget) {
            document.removeEventListener('click', this.closeLanguageDropdown.bind(this));
        }
    }

    toggleUserMenu(event) {
        event.stopPropagation();
        this.userDropdownMenuTarget.classList.toggle('show');
    }

    closeUserDropdown(event) {
        if (!this.userMenuButtonTarget.contains(event.target) &&
            !this.userDropdownMenuTarget.contains(event.target)) {
            this.userDropdownMenuTarget.classList.remove('show');
        }
    }

    // Méthode pour gérer le menu de langue
    toggleLanguage(event) {
        event.stopPropagation();
        this.languageMenuTarget.classList.toggle('show');
    }

    closeLanguageDropdown(event) {
        if (!this.languageButtonTarget.contains(event.target) &&
            !this.languageMenuTarget.contains(event.target)) {
            this.languageMenuTarget.classList.remove('show');
        }
    }

    // Pour le menu mobile
    toggleMobileMenu(event) {
        event.preventDefault();
        this.mobileMenuTarget.classList.toggle('show');
    }
}
