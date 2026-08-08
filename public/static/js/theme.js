(function () {
    let initialized = false;

    function getInitialTheme() {
        try {
            const storedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return storedTheme ? storedTheme === 'dark' : prefersDark;
        } catch (e) {
            return false;
        }
    }

    function applyTheme(isDark) {
        document.documentElement.classList.toggle('dark-theme', isDark);
        document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
        document.body?.classList.toggle('dark-theme', isDark);
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
        const isDark = getInitialTheme();
        applyTheme(isDark);
        updateThemeButtons(isDark);

        const themeToggleLight = document.getElementById('themeToggleLight');
        const themeToggleDark = document.getElementById('themeToggleDark');

        [themeToggleLight, themeToggleDark].forEach((button) => {
            button?.addEventListener('click', () => {
                const shouldUseDark = button === themeToggleDark;
                applyTheme(shouldUseDark);
                try {
                    localStorage.setItem('theme', shouldUseDark ? 'dark' : 'light');
                } catch (e) {}
                updateThemeButtons(shouldUseDark);
            });
        });
    }

    const initialTheme = getInitialTheme();
    applyTheme(initialTheme);
    updateThemeButtons(initialTheme);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeThemeControls, { once: true });
    } else {
        initializeThemeControls();
    }
})();
