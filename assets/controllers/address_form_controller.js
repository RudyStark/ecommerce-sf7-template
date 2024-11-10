// assets/controllers/address_form_controller.js
import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['step', 'navigation'];

    connect() {
        this.currentStep = 1;
        this.totalSteps = 4;
        this.updateNavigation();

        // Empêcher la soumission du formulaire par la touche Entrée
        this.element.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' && this.currentStep < this.totalSteps) {
                event.preventDefault();
                this.nextStep();
            }
        });

        // Valider l'étape courante avant de passer à la suivante
        const nextButton = this.element.querySelector('.next-step');
        if (nextButton) {
            nextButton.addEventListener('click', (event) => {
                event.preventDefault();
                this.validateAndProceed();
            });
        }
    }

    validateAndProceed() {
        // Obtenir tous les champs de l'étape courante
        const currentStepElement = this.element.querySelector(`.form-step[data-step="${this.currentStep}"]`);
        const inputs = currentStepElement.querySelectorAll('input, select, textarea');

        // Vérifier si tous les champs requis sont remplis
        let isValid = true;
        inputs.forEach(input => {
            if (input.required && !input.value.trim()) {
                isValid = false;
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        });

        if (isValid) {
            this.nextStep();
        }
    }

    nextStep() {
        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.updateSteps();
        }
    }

    previousStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateSteps();
        }
    }

    updateSteps() {
        // Update form steps
        document.querySelectorAll('.form-step').forEach(step => {
            step.classList.remove('active');
        });
        document.querySelector(`.form-step[data-step="${this.currentStep}"]`).classList.add('active');

        // Update progress steps
        document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
            if (parseInt(step.dataset.step) <= this.currentStep) {
                step.classList.add('active');
            }
        });

        this.updateNavigation();
    }

    updateNavigation() {
        const prevButton = this.element.querySelector('.prev-step');
        const nextButton = this.element.querySelector('.next-step');
        const submitButton = this.element.querySelector('.submit-step');

        if (prevButton) {
            prevButton.style.display = this.currentStep > 1 ? 'block' : 'none';
        }

        if (nextButton && submitButton) {
            if (this.currentStep === this.totalSteps) {
                nextButton.style.display = 'none';
                submitButton.style.display = 'block';
            } else {
                nextButton.style.display = 'block';
                submitButton.style.display = 'none';
            }
        }
    }
}
