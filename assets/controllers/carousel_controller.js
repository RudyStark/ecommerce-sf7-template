// assets/controllers/carousel_controller.js
import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ["selectedCard"]
    static values = {
        headers: Array
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

        console.log("Updating card with index:", index);

        if (!this.headersValue || !Array.isArray(this.headersValue)) {
            console.error("Headers data is not an array:", this.headersValue);
            return;
        }

        const selectedHeader = this.headersValue[index];
        console.log("Selected header:", selectedHeader);

        if (!selectedHeader) {
            console.error('No header found at index', index);
            return;
        }

        if (!selectedHeader.picture) {
            console.error('Selected header has no picture:', selectedHeader);
            return;
        }

        this.updateThumbnailSelection(index);
        this.updateMainCard(selectedHeader);
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

    updateMainCard(selectedHeader) {
        const newContent = `
            <div class="position-relative h-100 fade-in">
                <img src="/uploads/header/${selectedHeader.picture}" class="position-absolute w-100 h-100 object-fit-cover" alt="${selectedHeader.title || ''}">
                <div class="position-absolute bottom-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4" style="background: linear-gradient(to right, rgba(0,0,0,0.5), transparent);">
                    <h1 class="text-white fw-bold mb-2">${selectedHeader.title || ''}</h1>
                    <p class="text-white mb-4">${selectedHeader.content || ''}</p>
                    <div class="d-flex justify-content-center">
                        <a href="${selectedHeader.buttonLink || '#'}" class="btn btn-primary rounded-pill">
                            ${selectedHeader.buttonTitle || 'Click here'}
                        </a>
                    </div>
                </div>
            </div>
        `;

        this.selectedCardTarget.innerHTML = newContent;
    }
}
