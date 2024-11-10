document.querySelectorAll('.btn-copy').forEach(button => {
    button.addEventListener('click', function() {
        const key = this.dataset.key;
        navigator.clipboard.writeText(key).then(() => {
            // Feedback visuel
            const icon = this.querySelector('i');
            icon.classList.remove('bi-clipboard');
            icon.classList.add('bi-check2');

            setTimeout(() => {
                icon.classList.remove('bi-check2');
                icon.classList.add('bi-clipboard');
            }, 2000);
        });
    });
});

// Filtrage par plateforme
document.querySelectorAll('.platform-filter .btn').forEach(button => {
    button.addEventListener('click', function() {
        const platform = this.dataset.platform;

        // Update active button
        document.querySelectorAll('.platform-filter .btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');

        // Filter items
        document.querySelectorAll('.key-item').forEach(item => {
            // Mapping des plateformes
            const platformMapping = {
                'ps5': 'playstation',
                'xbox': 'microsoft',
                'all': 'all'
            };

            const mappedPlatform = platformMapping[platform] || platform;

            if (mappedPlatform === 'all' || item.dataset.platform === mappedPlatform) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
