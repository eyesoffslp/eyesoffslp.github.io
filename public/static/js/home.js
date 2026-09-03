(() => {
    const modalElement = document.getElementById('petitionModal');
    const dismissButton = document.getElementById('petitionModalDismiss');

    if (!modalElement || !dismissButton) {
        return;
    }

    const modal = new bootstrap.Modal(modalElement);
    const dismissalKey = 'preventPetitionModal';
    const dismissalDuration = 24 * 60 * 60 * 1000;

    try {
        const dismissedAt = Number(localStorage.getItem(dismissalKey));
        if (!dismissedAt || Date.now() - dismissedAt > dismissalDuration) {
            modal.show();
        }
    } catch {
        modal.show();
    }

    dismissButton.addEventListener('click', () => {
        try {
            localStorage.setItem(dismissalKey, String(Date.now()));
        } catch {}

        modal.hide();
    }, { once: true });
})();
