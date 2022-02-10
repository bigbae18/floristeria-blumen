const startUp = () => {

    const buttonDarkTheme = document.querySelector('#btn-dark');
    const buttonLightTheme = document.querySelector('#btn-light');

    const toggleDarkTheme = (e) => {
        e.preventDefault();
        document.documentElement.setAttribute('data-localTheme', 'dark');
        localStorage.setItem('localTheme', 'dark');
    }
    const toggleLightTheme = (e) => {
        e.preventDefault();
        document.documentElement.setAttribute('data-localTheme', 'light');
        localStorage.setItem('localTheme', 'light');
    }

    buttonDarkTheme.addEventListener('click', toggleDarkTheme);
    buttonLightTheme.addEventListener('click', toggleLightTheme);
}

document.addEventListener('DOMContentLoaded', startUp, false)