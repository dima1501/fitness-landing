document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.subscribe-form');
    const input = form.querySelector('.subscribe-form__input');

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function handleInputChange() {
        const email = input.value.trim();
        const isValidEmail = email && validateEmail(email);
        input.classList.toggle('_error', !isValidEmail);
    }

    function handleFormSubmit(e) {
        const email = input.value.trim();
        if (!validateEmail(email)) {
            e.preventDefault();
            input.classList.add('_error');
        }
    }

    input.addEventListener('input', handleInputChange);
    form.addEventListener('submit', handleFormSubmit);
});