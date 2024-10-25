// assets/controllers/carousel_controller.js
import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ["selectedCard"]
    static values = {
        headers: Array,
        url: String
    }

    connect() {
        console.log("Carousel controller connected", this.headersValue);
        if (this.headersValue && this.headersValue.length > 0) {
            this.updateSelectedCard(0);
        } else {
            console.error("No headers data available");
        }
    }

    updateSelectedCard(event) {
        let index;
        if (typeof event === 'number') {
            index = event;
        } else {
            index = parseInt(event.currentTarget.dataset.carouselIndexParam, 10);
            this.addPulseEffect(event.currentTarget);
        }

        const selectedHeader = this.headersValue[index];
        if (!selectedHeader) return;

        this.updateThumbnailSelection(index);
        this.fetchAndUpdateMainCard(selectedHeader);
    }

    fetchAndUpdateMainCard(selectedHeader) {
        // Faire la requête AJAX
        fetch(this.urlValue, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify(selectedHeader)
        })
            .then(response => response.text())
            .then(html => {
                this.selectedCardTarget.innerHTML = html;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    addPulseEffect(element) {
        if (element) {
            const thumbnail = element.querySelector('.thumbnail');
            if (thumbnail) {
                thumbnail.classList.add('pulse');
                setTimeout(() => {
                    thumbnail.classList.remove('pulse');
                }, 300);
            }
        }
    }

    updateThumbnailSelection(selectedIndex) {
        this.element.querySelectorAll('.thumbnail-container').forEach((container, i) => {
            if (i === selectedIndex) {
                container.classList.add('selected-thumbnail');
            } else {
                container.classList.remove('selected-thumbnail');
            }
        });
    }
}
