document.addEventListener('DOMContentLoaded', function () {
    const slider = new Glide('#results-slider', {
        type: 'carousel',
        perView: 3,
        gap: '25px',
        breakpoints: {
            600: {
                perView: 1
            },
            900: {
                perView: 2
            },
            1024: {
                perView: 3
            },
        }
    });

    const prevButton = document.querySelector('.js-results-prev');
    const nextButton = document.querySelector('.js-results-next');

    prevButton.addEventListener('click', () => {
        slider.go('<');
    });

    nextButton.addEventListener('click', () => {
        slider.go('>');
    });

    slider.mount();
})
