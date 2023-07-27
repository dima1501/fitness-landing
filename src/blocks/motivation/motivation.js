function checkVisibilityOnce(element, callback) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            const visibleRatio = entry.intersectionRatio;
            const isVisibleMoreThanHalf = visibleRatio >= 0.7;

            if (isVisibleMoreThanHalf) {
                callback();
                observer.disconnect();
            }
        });
    });

    observer.observe(element);
}

function handleScroll() {
    const targetElement = document.querySelector('.motivation');
    checkVisibilityOnce(targetElement, () => {
        targetElement.classList.remove('_collapsed');
    });
}

window.addEventListener('scroll', handleScroll);