(() => {
    let initialized = false;

    function getInitialTheme() {
        try {
            const storedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return storedTheme ? storedTheme === 'dark' : prefersDark;
        } catch {
            return false;
        }
    }

    const initialTheme = getInitialTheme();

    function applyDocumentTheme(isDark) {
        document.documentElement.classList.toggle('dark-theme', isDark);
        document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    }

    function applyTheme(isDark) {
        applyDocumentTheme(isDark);
        document.body.classList.toggle('dark-theme', isDark);
    }

    function updateThemeButtons(isDark) {
        const themeToggleLight = document.getElementById('themeToggleLight');
        const themeToggleDark = document.getElementById('themeToggleDark');

        if (themeToggleLight) {
            themeToggleLight.classList.toggle('active', !isDark);
            themeToggleLight.setAttribute('aria-pressed', String(!isDark));
        }
        if (themeToggleDark) {
            themeToggleDark.classList.toggle('active', isDark);
            themeToggleDark.setAttribute('aria-pressed', String(isDark));
        }
    }

    function initializeThemeControls() {
        if (initialized) {
            return;
        }

        initialized = true;
        document.body.classList.toggle('dark-theme', initialTheme);
        updateThemeButtons(initialTheme);

        const themeToggleLight = document.getElementById('themeToggleLight');
        const themeToggleDark = document.getElementById('themeToggleDark');

        [themeToggleLight, themeToggleDark].forEach((button) => {
            button?.addEventListener('click', () => {
                const shouldUseDark = button === themeToggleDark;
                applyTheme(shouldUseDark);
                try {
                    localStorage.setItem('theme', shouldUseDark ? 'dark' : 'light');
                } catch {}
                updateThemeButtons(shouldUseDark);
            });
        });
    }

    applyDocumentTheme(initialTheme);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeThemeControls, { once: true });
    } else {
        initializeThemeControls();
    }
})();
