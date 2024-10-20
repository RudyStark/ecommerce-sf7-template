// navbar_dropdown_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [
        "dropdownButton",
        "dropdownMenu",
        "languageButton",
        "languageMenu",
        "userMenuButton",
        "userDropdownMenu"
    ]

    connect() {
        this.closeDropdowns = this.closeDropdowns.bind(this)
        document.addEventListener('click', this.closeDropdowns)
        // S'assurer que tous les dropdowns sont initialement cachés
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
            (this.hasUserDropdownMenuTarget && this.userDropdownMenuTarget.contains(clickedElement))
        );
        const isClickOnButton = (
            this.dropdownButtonTargets.some(button => button.contains(clickedElement)) ||
            this.languageButtonTarget.contains(clickedElement) ||
            (this.hasUserMenuButtonTarget && this.userMenuButtonTarget.contains(clickedElement))
        );

        if (!isClickInsideDropdown && !isClickOnButton) {
            this.closeAllDropdowns()
        }
    }

    closeAllDropdowns() {
        this.ensureDropdownsAreClosed()
    }

    ensureDropdownsAreClosed() {
        this.dropdownMenuTargets.forEach(menu => {
            if (!menu.classList.contains('hidden')) {
                menu.classList.add('hidden')
            }
        })
        if (!this.languageMenuTarget.classList.contains('hidden')) {
            this.languageMenuTarget.classList.add('hidden')
        }
        if (this.hasUserDropdownMenuTarget && !this.userDropdownMenuTarget.classList.contains('hidden')) {
            this.userDropdownMenuTarget.classList.add('hidden')
        }
    }
}
