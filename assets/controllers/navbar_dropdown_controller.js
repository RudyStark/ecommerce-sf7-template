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
        console.log("NavbarDropdown controller connected")
        this.closeDropdowns = this.closeDropdowns.bind(this)
        document.addEventListener('click', this.closeDropdowns)
        this.ensureDropdownsAreClosed()
    }

    disconnect() {
        document.removeEventListener('click', this.closeDropdowns)
    }

    toggleDropdown(event) {
        event.stopPropagation()
        const button = event.currentTarget
        const menu = button.nextElementSibling
        this.closeAllDropdowns()
        menu.classList.toggle('hidden')
    }

    toggleLanguage(event) {
        event.stopPropagation()
        this.closeAllDropdowns()
        this.languageMenuTarget.classList.toggle('hidden')
    }

    toggleUserMenu(event) {
        event.stopPropagation()
        this.closeAllDropdowns()
        this.userDropdownMenuTarget.classList.toggle('hidden')
    }

    selectLanguage(event) {
        event.preventDefault()
        const selectedLanguage = event.currentTarget.textContent.trim()
        this.languageButtonTarget.querySelector('span > span').textContent = selectedLanguage
        this.languageButtonTarget.querySelector('img').src = event.currentTarget.querySelector('img').src
        this.languageMenuTarget.classList.add('hidden')
    }

    closeDropdowns(event) {
        const clickedElement = event.target;
        const isClickInsideDropdown = (
            this.dropdownMenuTargets.some(menu => menu.contains(clickedElement)) ||
            this.languageMenuTarget.contains(clickedElement) ||
            (this.hasUserDropdownMenuTarget && this.userDropdownMenuTarget.contains(clickedElement)) ||
            this.mobileMenuTarget.contains(clickedElement)
        );
        const isClickOnButton = (
            this.dropdownButtonTargets.some(button => button.contains(clickedElement)) ||
            this.languageButtonTarget.contains(clickedElement) ||
            (this.hasUserMenuButtonTarget && this.userMenuButtonTarget.contains(clickedElement)) ||
            this.hasMobileMenuButtonTarget && this.mobileMenuButtonTarget.contains(clickedElement)
        );

        if (!isClickInsideDropdown && !isClickOnButton) {
            this.closeAllDropdowns()
        }
    }

    closeAllDropdowns() {
        this.dropdownMenuTargets.forEach(menu => menu.classList.add('hidden'))
        this.languageMenuTarget.classList.add('hidden')
        if (this.hasUserDropdownMenuTarget) {
            this.userDropdownMenuTarget.classList.add('hidden')
        }
        // Fermer le menu mobile si nécessaire
        if (this.hasMobileMenuTarget) {
            this.mobileMenuTarget.classList.add('opacity-0', 'pointer-events-none')
            const menuPanel = this.mobileMenuTarget.querySelector('.transform')
            if (menuPanel) {
                menuPanel.classList.add('translate-x-full')
                menuPanel.classList.remove('translate-x-0')
            }
        }
    }

    toggleMobileMenu(event) {
        event.preventDefault()
        this.mobileMenuTarget.classList.toggle('opacity-0')
        this.mobileMenuTarget.classList.toggle('pointer-events-none')
        const menuPanel = this.mobileMenuTarget.querySelector('.transform')
        if (menuPanel) {
            menuPanel.classList.toggle('translate-x-full')
            menuPanel.classList.toggle('translate-x-0')
        }

        if (this.hasMobileMenuButtonTarget) {
            const hamburgerIcon = this.mobileMenuButtonTarget.querySelector('svg')
            if (hamburgerIcon) {
                hamburgerIcon.classList.toggle('rotate-90')
            }
        }
    }

    toggleMobileSubmenu(event) {
        const button = event.currentTarget;
        const submenuId = button.dataset.submenuTarget;
        const submenu = document.getElementById(`${submenuId}-submenu`);
        const icon = button.querySelector('svg');

        if (submenu) {
            submenu.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        }
    }

    ensureDropdownsAreClosed() {
        this.closeAllDropdowns()
    }
}
