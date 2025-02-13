// script.js

// Number of balloons you want to float
const numBalloons = 30;

// Randomly generate balloons
for (let i = 0; i < numBalloons; i++) {
    createBalloon();
}

function createBalloon() {
    // Create a balloon element
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    // Randomize size
    const size = Math.random() * 20 + 40; // Balloons between 40px and 60px
    balloon.style.width = `${size}px`;
    balloon.style.height = `${(size * 44) / 50}px`; // Adjust height to maintain aspect ratio

    // Randomize position
    const posX = Math.random() * 100;
    balloon.style.left = `${posX}%`;

    // Randomize delay
    const delay = Math.random() * 5;
    balloon.style.animationDelay = `${delay}s`;

    // Randomize duration
    const duration = Math.random() * 10 + 5;
    balloon.style.animationDuration = `${duration}s, 3s ease-in-out infinite alternate, 1.5s ease-in-out infinite alternate`; // Ensure bloom, glow, and floatUp have proper durations

    // Append to the balloon container
    document.querySelector('.balloon-container').appendChild(balloon);
}
