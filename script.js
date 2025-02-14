const numBalloons = 30;
const balloons = []; // Keep track of balloon elements

// Randomly generate balloons
for (let i = 0; i < numBalloons; i++) {
    createBalloon();
}

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    const size = Math.random() * 20 + 40;
    balloon.style.width = `${size}px`;
    balloon.style.height = `${(size * 44) / 50}px`;

    const posX = Math.random() * 100;
    balloon.style.left = `${posX}%`;

    const delay = Math.random() * 5;
    balloon.style.animationDelay = `${delay}s`;

    const duration = Math.random() * 10 + 5;
    balloon.style.animationDuration = `${duration}s, 3s ease-in-out infinite alternate, 1.5s ease-in-out infinite alternate`;

    balloon.addEventListener('click', popBalloon); // Add click event listener

    document.querySelector('.balloon-container').appendChild(balloon);
    balloons.push(balloon); // Store the balloon element
}

function popBalloon(event) {
    const balloon = event.target;
    balloon.style.animation = 'pop 0.5s forwards'; // Apply enhanced pop animation
    balloon.addEventListener('animationend', () => {
        balloon.remove(); // Remove balloon after animation
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const envelopeButton = document.querySelector('.envelope-button');
    const carouselContainer = document.querySelector('.carousel-container');
    const closeButton = document.querySelector('.carousel-close');
    const backgroundMusic = document.getElementById('background-music');
    const carLabel = document.querySelector('.carousel-label');

    // Store balloon elements
    const balloons = [];
    for (let i = 0; i < numBalloons; i++) {
        const balloon = document.querySelector(`.balloon:nth-child(${i + 1})`);
        balloons.push(balloon);
    }

    envelopeButton.addEventListener('click', () => {
        console.log('Open button clicked');
        document.querySelector('.envelope').style.display = 'none';
        carouselContainer.style.display = 'block';
        carLabel.style.display = 'block';
        backgroundMusic.play();

        // Disable balloons
        balloons.forEach(balloon => {
            balloon.style.pointerEvents = 'none';
            balloon.style.opacity = '0.5'; // Optional: Make balloons semi-transparent
        });
    });

    closeButton.addEventListener('click', () => {
        console.log('Close button clicked');
        carouselContainer.style.display = 'none';
        document.querySelector('.envelope').style.display = 'block';
        carLabel.style.display = 'none';
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;

        // Enable balloons
        balloons.forEach(balloon => {
            balloon.style.pointerEvents = 'auto';
            balloon.style.opacity = '1'; // Optional: Restore balloon opacity
        });
    });

    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    let currentIndex = 0;
    let isDragging = false;

    carousel.addEventListener('touchstart', touchStart);
    carousel.addEventListener('touchend', touchEnd);
    carousel.addEventListener('touchmove', touchMove);

    // Add mouse event listeners
    carousel.addEventListener('mousedown', mouseStart);
    carousel.addEventListener('mouseup', mouseEnd);
    carousel.addEventListener('mouseleave', mouseEnd); // Handle the case where the mouse leaves the carousel while dragging
    carousel.addEventListener('mousemove', mouseMove);

    function touchStart(event) {
        startX = event.touches[0].clientX;
        isDragging = true;
        console.log('touchStart', startX);
        animationID = requestAnimationFrame(animation);
    }

    function touchMove(event) {
        if (!isDragging) return;
        const currentX = event.touches[0].clientX;
        currentTranslate = prevTranslate + currentX - startX;
        console.log('touchMove', currentX, currentTranslate);
    }

    function touchEnd() {
        isDragging = false;
        cancelAnimationFrame(animationID);
        const movedBy = currentTranslate - prevTranslate;
        console.log('touchEnd', movedBy);

        updateIndex(movedBy);
        prevTranslate = currentTranslate; // Update prevTranslate after handling the swipe
    }

    function mouseStart(event) {
        startX = event.clientX;
        isDragging = true;
        console.log('mouseStart', startX);
        animationID = requestAnimationFrame(animation);
    }

    function mouseMove(event) {
        if (!isDragging) return;
        const currentX = event.clientX;
        currentTranslate = prevTranslate + currentX - startX;
        console.log('mouseMove', currentX, currentTranslate);
    }

    function mouseEnd() {
        isDragging = false;
        cancelAnimationFrame(animationID);
        const movedBy = currentTranslate - prevTranslate;
        console.log('mouseEnd', movedBy);

        updateIndex(movedBy);
        prevTranslate = currentTranslate; // Update prevTranslate after handling the swipe
    }

    function updateIndex(movedBy) {
        console.log('updateIndex', movedBy);
        if (movedBy < -100 && currentIndex < carousel.children.length - 1) {
            currentIndex++;
        }
        if (movedBy > 100 && currentIndex > 0) {
            currentIndex--;
        }
        setPositionByIndex();
    }

    function animation() {
        setCarouselPosition();
        if (animationID) requestAnimationFrame(animation);
    }

    function setCarouselPosition() {
        carousel.style.transform = `translateX(${currentTranslate}px)`;
        console.log('setCarouselPosition', currentTranslate);
    }

    function setPositionByIndex() {
        currentTranslate = currentIndex * -carousel.offsetWidth;
        prevTranslate = currentTranslate;
        console.log('setPositionByIndex', currentIndex, currentTranslate);
        setCarouselPosition();
    }
});




document.addEventListener('DOMContentLoaded', () => {
    const aboutButton = document.getElementById('about-button');
    const imagesButton = document.getElementById('images-button');
    const backButtonAbout = document.getElementById('back-button-about');
    const backButtonImages = document.getElementById('back-button-images');
    const mainContent = document.getElementById('main-content');
    const aboutUs = document.getElementById('about-us');
    const imagesSection = document.getElementById('images-section');

    // Show About Us section
    aboutButton.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.style.display = 'none';
        imagesSection.style.display = 'none';
        aboutUs.style.display = 'block';
    });

    // Show Images section
    imagesButton.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.style.display = 'none';
        aboutUs.style.display = 'none';
        imagesSection.style.display = 'block';
    });

    // Hide About Us section and show main content
    backButtonAbout.addEventListener('click', () => {
        aboutUs.style.display = 'none';
        mainContent.style.display = 'block';
    });

    // Hide Images section and show main content
    backButtonImages.addEventListener('click', () => {
        imagesSection.style.display = 'none';
        mainContent.style.display = 'block';
    });
});
