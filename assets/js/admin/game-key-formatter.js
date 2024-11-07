document.addEventListener('DOMContentLoaded', function() {
    // Get all form elements
    const productSelect = document.querySelector('select[name$="[product]"]');
    const typeSelect = document.querySelector('select[name$="[type]"]');
    const keyInput = document.querySelector('input[name$="[gameKey]"]');
    const statusSelect = document.querySelector('select[name$="[status]"]');

    // Initially disable all fields except product
    typeSelect.disabled = true;
    keyInput.disabled = true;
    statusSelect.disabled = true;

    // Handle product selection
    productSelect.addEventListener('change', function() {
        if (this.value) {
            typeSelect.disabled = false;
            typeSelect.value = ''; // Reset type
            keyInput.value = ''; // Reset key
            keyInput.disabled = true;
            statusSelect.value = ''; // Reset status
            statusSelect.disabled = true;
        } else {
            typeSelect.disabled = true;
            keyInput.disabled = true;
            statusSelect.disabled = true;
        }
    });

    // Handle type selection
    typeSelect.addEventListener('change', function() {
        if (this.value) {
            keyInput.disabled = false;
            keyInput.value = ''; // Reset key
            statusSelect.value = ''; // Reset status
            statusSelect.disabled = true;

            // Set appropriate placeholder
            if (this.value === 'PLAYSTATION') {
                keyInput.setAttribute('maxlength', '14');
                keyInput.placeholder = 'XXXX-XXXX-XXXX';
            } else if (this.value === 'MICROSOFT') {
                keyInput.setAttribute('maxlength', '29');
                keyInput.placeholder = 'XXXXX-XXXXX-XXXXX-XXXXX-XXXXX';
            }
        } else {
            keyInput.disabled = true;
            statusSelect.disabled = true;
        }
    });

    // Handle key input
    keyInput.addEventListener('input', function() {
        // Existing key formatting code
        let value = this.value.replace(/-/g, '').replace(/[^A-Z0-9]/gi, '').toUpperCase();

        if (typeSelect.value === 'PLAYSTATION' && value.length <= 12) {
            if (value.length > 4) {
                value = value.slice(0, 4) + '-' + value.slice(4);
            }
            if (value.length > 9) {
                value = value.slice(0, 9) + '-' + value.slice(9);
            }
        } else if (typeSelect.value === 'MICROSOFT' && value.length <= 25) {
            if (value.length > 5) {
                value = value.slice(0, 5) + '-' + value.slice(5);
            }
            if (value.length > 11) {
                value = value.slice(0, 11) + '-' + value.slice(11);
            }
            if (value.length > 17) {
                value = value.slice(0, 17) + '-' + value.slice(17);
            }
            if (value.length > 23) {
                value = value.slice(0, 23) + '-' + value.slice(23);
            }
        }

        this.value = value;

        // Enable status select only when key is properly formatted
        if ((typeSelect.value === 'PLAYSTATION' && value.length === 14) ||
            (typeSelect.value === 'MICROSOFT' && value.length === 29)) {
            statusSelect.disabled = false;
        } else {
            statusSelect.disabled = true;
        }
    });

    // Set initial state if values are pre-filled (edit mode)
    if (productSelect.value) {
        typeSelect.disabled = false;
        if (typeSelect.value) {
            keyInput.disabled = false;
            if (keyInput.value) {
                statusSelect.disabled = false;
            }
        }
    }
});
