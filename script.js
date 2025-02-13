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
    const size = Math.random() * 20 + 20; // Balloons between 20px and 40px
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;

    // Randomize position
    const posX = Math.random() * 100;
    balloon.style.left = `${posX}%`;

    // Randomize delay
    const delay = Math.random() * 5;
    balloon.style.animationDelay = `${delay}s`;

    // Randomize duration
    const duration = Math.random() * 10 + 5;
    balloon.style.animationDuration = `${duration}s`;

    // Randomize color
    const colors = ['#FF6B6B', '#FF8E72', '#FFB48F', '#F49097', '#FCC5C0'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.backgroundColor = color;
    balloon.style.boxShadow = `0 0 10px ${color}`;

    // Append to the balloon container
    document.querySelector('.balloon-container').appendChild(balloon);
}
