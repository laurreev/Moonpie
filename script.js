// script.js

const numBalloons = 30;

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
}

function popBalloon(event) {
    const balloon = event.target;
    balloon.style.animation = 'pop 0.5s forwards'; // Apply enhanced pop animation
    balloon.addEventListener('animationend', () => {
        balloon.remove(); // Remove balloon after animation
    });
}


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const carouselImages = document.querySelectorAll('.carousel-image');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const envelopeButton = document.querySelector('.envelope-button');
    const carouselContainer = document.querySelector('.carousel-container');
    const closeButton = document.querySelector('.carousel-close'); // New button to hide the carousel
    const backgroundMusic = document.getElementById('background-music'); // Get the audio element
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselImages.length;
        updateCarousel();
    });

    envelopeButton.addEventListener('click', () => {
        console.log('Open button clicked'); // Debugging
        document.querySelector('.envelope').style.display = 'none';
        carouselContainer.style.display = 'block';
        backgroundMusic.play(); // Play the music when the "Open" button is clicked
    });
   

    closeButton.addEventListener('click', () => {
        console.log('Close button clicked'); // Debugging
        carouselContainer.style.display = 'none';
        document.querySelector('.envelope').style.display = 'block';
        backgroundMusic.pause(); // Pause the music when the carousel is closed
        backgroundMusic.currentTime = 0; // Reset the music to the beginning
    });
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



