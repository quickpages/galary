// Function to create a snowflake element
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    document.querySelector(".snowfall-container").appendChild(snowflake);

    // Randomize starting position
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    snowflake.style.left = `${startX}px`;
    snowflake.style.top = `${startY}px`;

    return snowflake;
}


// Function to animate snowflakes falling
function animateSnowflakes() {
    const snowflakes = document.querySelectorAll(".snowflake");

    snowflakes.forEach((snowflake) => {
        const currentTop = parseFloat(snowflake.style.top) || 0;
        snowflake.style.top = `${currentTop + 1}px`;

        // Reset if snowflake reaches the bottom of the screen
        if (currentTop > window.innerHeight) {
            snowflake.style.top = "0px";
        }
    });

    requestAnimationFrame(animateSnowflakes);
}

// Function to animate images with fade and slide effects
function animateImages() {
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");

    function slideIn() {
        // Fade In
        image1.style.transition = "opacity 1s ease-in-out";
        image2.style.transition = "opacity 1s ease-in-out";

        image1.style.opacity = 1;
        image2.style.opacity = 1;

        // Slide In
        image1.style.transition = "transform 1s ease-in-out";
        image2.style.transition = "transform 1s ease-in-out";

        image1.style.transform = "translateX(0)";
        image2.style.transform = "translateX(0)";
    }

    function slideOut() {
        // Slide Out
        image1.style.transition = "transform 1s ease-in-out";
        image2.style.transition = "transform 1s ease-in-out";

        image1.style.transform = "translateX(-75%)";
        image2.style.transform = "translateX(75%)";

        // Reset sliding effect after a delay
        setTimeout(() => {
            slideIn();
        }, 1000); // 1000 milliseconds interval for sliding out
    }

    // Initial call to start the animation immediately
    slideIn();

    // Set an interval to continuously slide in and out
    setInterval(() => {
        slideOut();
    }, 2000); // 2000 milliseconds interval for sliding in
}


// Generate initial snowflakes
const numSnowflakes = 100;
for (let i = 0; i < numSnowflakes; i++) {
    createSnowflake();
}

// Start the animations
animateSnowflakes();
animateImages();

// Function to play audio
function playAudio() {
    var audio = document.getElementById('backgroundMusic');
    audio.play();
}