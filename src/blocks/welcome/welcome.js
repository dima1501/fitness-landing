document.addEventListener('DOMContentLoaded', function () {
    // Прокрутка до блока Subscribe при нажатии на кнопку
    const subscribeButtons = document.querySelectorAll('.js-subscribe');
    const targetSection = document.getElementById('subscribe');

    subscribeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (targetSection) {
                const targetHeight = targetSection.offsetHeight;
                const windowHeight = window.innerHeight;
                let scrollPosition = targetSection.offsetTop;

                if (window.innerWidth >= 1024) {
                    scrollPosition = targetSection.offsetTop - (windowHeight / 2) + (targetHeight / 2);
                }

                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Анимация при прокрутке
    AOS.init({
        once: true,
    });
})
