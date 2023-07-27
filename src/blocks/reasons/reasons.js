document.addEventListener('DOMContentLoaded', function () {
    let slider = null;

    function createSlider() {
        slider = new Glide('#reasons-slider', {
            type: 'carousel',
            perView: 3,
            gap: '15px',
            dots: true,
            dotsContainer: '.glide__bullets',
            breakpoints: {
                500: {
                    perView: 1
                },
                700: {
                    perView: 2
                },
                1024: {
                    perView: 3
                },
            }
        });
        slider.mount();
    }

    function destroySlider() {
        if (slider !== null) {
            slider.destroy();
            slider = null;
        }
    }

    function updateSlider() {
        const windowWidth = window.innerWidth;

        if (windowWidth >= 1024) {
            destroySlider();
        } else if (!slider) {
            createSlider();
        }
    }

    updateSlider();

    window.addEventListener('resize', updateSlider);
});