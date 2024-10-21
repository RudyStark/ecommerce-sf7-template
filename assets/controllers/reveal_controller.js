import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["section"]

    connect() {
        // Révéler les sections visibles au chargement
        this.revealSection()

        // Attacher l'événement de défilement
        window.addEventListener('scroll', this.revealSection.bind(this))
    }

    disconnect() {
        // Nettoyer l'événement de défilement lorsqu'on déconnecte le contrôleur
        window.removeEventListener('scroll', this.revealSection.bind(this))
    }

    revealSection() {
        const triggerBottom = window.innerHeight * 0.8

        this.sectionTargets.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top

            if (sectionTop < triggerBottom) {
                section.classList.add('active')
            }
        })
    }
}
