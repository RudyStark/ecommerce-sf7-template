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
        "mobileUserButton",
        "mobileUserMenu",
        "megaMenu",
        "languageButton",
        "languageMenu"
    ]

    connect() {
        if (this.hasUserDropdownMenuTarget) {
            document.addEventListener('click', this.closeUserDropdown.bind(this));
        }

        if (this.hasLanguageMenuTarget) {
            document.addEventListener('click', this.closeLanguageDropdown.bind(this));
        }

        // Initialiser l'overlay
        const overlay = document.getElementById('menuOverlay');
        overlay.addEventListener('click', () => {
            this.closeMobileMenu();
        });

        if (this.hasMobileUserMenuTarget) {
            document.addEventListener('click', (event) => {
                if (!this.mobileUserMenuTarget.contains(event.target) &&
                    !this.mobileUserButtonTarget.contains(event.target) &&
                    this.mobileUserMenuTarget.classList.contains('show')) {
                    this.closeMobileUserMenu();
                }
            });
        }
    }

    disconnect() {
        if (this.hasUserDropdownMenuTarget) {
            document.removeEventListener('click', this.closeUserDropdown.bind(this));
        }

        if (this.hasLanguageMenuTarget) {
            document.removeEventListener('click', this.closeLanguageDropdown.bind(this));
        }

        if (this.hasMobileMenuTarget) {
            document.removeEventListener('click', this.closeMobileMenu.bind(this));
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

    toggleLanguage(event) {
        event.stopPropagation();
        this.languageMenuTarget.classList.toggle('show');
    }

    toggleMobileMenu(event) {
        event.preventDefault();
        const overlay = document.getElementById('menuOverlay');

        if (this.mobileMenuTarget.classList.contains('show')) {
            this.closeMobileMenu();
        } else {
            overlay.classList.add('show');
            this.mobileMenuTarget.classList.add('show');
        }
    }

    closeMobileMenu() {
        const overlay = document.getElementById('menuOverlay');
        overlay.classList.remove('show');
        this.mobileMenuTarget.classList.remove('show');
    }

    closeLanguageDropdown(event) {
        if (!this.languageButtonTarget.contains(event.target) &&
            !this.languageMenuTarget.contains(event.target)) {
            this.languageMenuTarget.classList.remove('show');
        }
    }

    toggleMobileUserMenu(event) {
        event.preventDefault();
        const overlay = document.getElementById('menuOverlay');

        if (this.mobileUserMenuTarget.classList.contains('show')) {
            this.closeMobileUserMenu();
        } else {
            overlay.classList.add('show');
            this.mobileUserMenuTarget.classList.add('show');
        }
    }

    closeMobileUserMenu() {
        const overlay = document.getElementById('menuOverlay');
        overlay.classList.remove('show');
        this.mobileUserMenuTarget.classList.remove('show');
    }
}
