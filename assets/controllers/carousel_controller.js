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
            <div class="relative h-full fade-in">
                <img src="/uploads/header/${selectedHeader.picture}" class="absolute inset-0 w-full h-full object-cover" alt="${selectedHeader.title || ''}">
                <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex flex-col justify-end p-6">
                    <h1 class="text-4xl font-bold mb-2 text-white">${selectedHeader.title || ''}</h1>
                    <p class="text-lg mb-4 text-white">${selectedHeader.content || ''}</p>
                    <div class="flex justify-center">
                        <a href="${selectedHeader.buttonLink || '#'}" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-sm inline-block">
                            ${selectedHeader.buttonTitle || 'Click here'}
                        </a>
                    </div>
                </div>
            </div>
        `;

        this.selectedCardTarget.innerHTML = newContent;
    }
}
