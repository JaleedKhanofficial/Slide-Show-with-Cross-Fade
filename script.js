(function () {
    "use strict"

    let currentImg = 0;
    const myphotos = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    const container = document.getElementById('content');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('previous');

    nextBtn.addEventListener('click', function (event) {
        event.preventDefault();

        currentImg++;
        if (currentImg > (myphotos.length - 1)) { currentImg = 0; }

        swapImage();
    });

    prevBtn.addEventListener('click', function (event) {
        event.preventDefault();

        currentImg--;
        if (currentImg < 0) { currentImg = myphotos.length - 1; }

        swapImage();
    });
    function swapImage() {
        const newSlider = document.createElement('img');
        newSlider.src = `slider/${myphotos[currentImg]}`;
        newSlider.className = 'fadeinimg';
        container.appendChild(newSlider);

        if (container.children.length > 2) {
            container.removeChild(container.childNodes[0]);
        }
    }
})();