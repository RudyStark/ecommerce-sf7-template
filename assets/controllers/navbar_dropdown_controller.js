import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [
        "dropdownButton",
        "dropdownMenu",
        "languageButton",
        "languageMenu",
        "userMenuButton",
        "userDropdownMenu",
        "mobileMenu",
        "mobileMenuButton"
    ]

    connect() {
        console.log("NavbarDropdown controller connected");
        this.closeDropdowns = this.closeDropdowns.bind(this);
        document.addEventListener('click', this.closeDropdowns);
        this.ensureDropdownsAreClosed();
    }

    disconnect() {
        document.removeEventListener('click', this.closeDropdowns);
    }

    toggleDropdown(event) {
        event.stopPropagation();
        const button = event.currentTarget;
        const menu = button.nextElementSibling;
        this.closeAllDropdowns();
        menu.classList.toggle('show');  // Utilise 'show' pour afficher/masquer le dropdown
    }

    toggleLanguage(event) {
        event.stopPropagation();
        this.closeAllDropdowns();
        this.languageMenuTarget.classList.toggle('show');  // Utilise 'show' pour afficher/masquer le menu
    }

    toggleUserMenu(event) {
        event.stopPropagation();
        this.closeAllDropdowns();
        this.userDropdownMenuTarget.classList.toggle('show');  // Utilise 'show' pour afficher/masquer le menu utilisateur
    }

    selectLanguage(event) {
        event.preventDefault();
        const selectedLanguage = event.currentTarget.textContent.trim();
        this.languageButtonTarget.querySelector('span').textContent = selectedLanguage;
        this.languageButtonTarget.querySelector('img').src = event.currentTarget.querySelector('img').src;
        this.languageMenuTarget.classList.remove('show');  // Ferme le menu après sélection
    }

    closeDropdowns(event) {
        const clickedElement = event.target;
        const isClickInsideDropdown = (
            this.dropdownMenuTargets.some(menu => menu.contains(clickedElement)) ||
            (this.hasLanguageMenuTarget && this.languageMenuTarget.contains(clickedElement)) ||
            (this.hasUserDropdownMenuTarget && this.userDropdownMenuTarget.contains(clickedElement)) ||
            (this.hasMobileMenuTarget && this.mobileMenuTarget.contains(clickedElement))
        );
        const isClickOnButton = (
            this.dropdownButtonTargets.some(button => button.contains(clickedElement)) ||
            (this.hasLanguageButtonTarget && this.languageButtonTarget.contains(clickedElement)) ||
            (this.hasUserMenuButtonTarget && this.userMenuButtonTarget.contains(clickedElement)) ||
            (this.hasMobileMenuButtonTarget && this.mobileMenuButtonTarget.contains(clickedElement))
        );

        if (!isClickInsideDropdown && !isClickOnButton) {
            this.closeAllDropdowns();
        }
    }

    closeAllDropdowns() {
        this.dropdownMenuTargets.forEach(menu => menu.classList.remove('show'));  // Ferme tous les dropdowns
        if (this.hasLanguageMenuTarget) {
            this.languageMenuTarget.classList.remove('show');
        }
        if (this.hasUserDropdownMenuTarget) {
            this.userDropdownMenuTarget.classList.remove('show');
        }
        // Fermer le menu mobile si nécessaire
        if (this.hasMobileMenuTarget) {
            this.mobileMenuTarget.classList.remove('show');
        }
    }

    toggleMobileMenu(event) {
        event.preventDefault();
        const mobileMenu = document.getElementById("mobileMenu");
        const bsOffcanvas = new bootstrap.Offcanvas(mobileMenu);
        bsOffcanvas.toggle();  // Utilisation du Offcanvas de Bootstrap pour le menu mobile
    }

    ensureDropdownsAreClosed() {
        this.closeAllDropdowns();
    }
}
