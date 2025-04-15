// Function to add animations on scroll
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;

  // When scrolled 20% of the viewport height
  if (scrollY > viewportHeight * 0.2) {
    const heroHeading = document.querySelector(".hero-heading");
    const infoText = document.querySelector(".info-text");

    // Add animation classes
    heroHeading.classList.add("fade-in-left");
    infoText.classList.add("fade-in-right");
  }
});

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var trapezium = document.getElementById('trapezium');

  // Check if the scroll position is greater than or equal to 1800px
  if (scrollPosition >= 1500 ) {
    trapezium.classList.add('visible');
  } else {
    trapezium.classList.remove('visible');
  }
});


// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Create the timeline for animations
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".image-container",
    start: "top top", // Start animation when the container hits the top of the viewport
    end: "+=25%",   // Total duration of the animation (2x viewport height)
    scrub: true,     // Smoothly scrub animations with scroll
    pin: true        // Pin the section during the animation
  }
});


tl.to("#img1", { opacity: 1, duration: 1, ease: "power2.inOut" })
  .to("#img1", { opacity: 0, duration: 1, ease: "power2.inOut" }, "+=1")
  .to("#img2", { opacity: 1, duration: 1, ease: "power2.inOut" })
  .to("#img2", { opacity: 0, duration: 1, ease: "power2.inOut" }, "+=1")
  .to("#img3", { opacity: 1, duration: 1, ease: "power2.inOut" })
  .to("#img3", { opacity: 0, duration: 1, ease: "power2.inOut" });



  // JavaScript to handle the word-by-word typing animation

document.addEventListener("DOMContentLoaded", function () {
  const storyText = "This project started as a simple idea, to create something unique and functional. With no prior experience in web development, I embarked on a journey to learn and build. The first step was learning HTML, CSS, and JavaScript from scratch. Each day brought new challenges, but the thrill of seeing things come together kept me going.\n\nThe website’s design was inspired by the clean and modern aesthetic of Layers.shop, while I drew inspiration from UI elements I found on Dribbble. After countless hours, this site was born with a combination of hard work, determination, and creativity.\n\nIt may not be perfect, but this website is a representation of what can be achieved with passion and perseverance. Every pixel, animation, and detail was crafted with care, and I am proud to present it here for everyone to explore.";

  const words = storyText.split(" ");
  let i = 0;
  const storyElement = document.getElementById("story-text");

  function typeWord() {
    if (i < words.length) {
      storyElement.innerHTML += words[i] + " ";
      i++;
      setTimeout(typeWord, 150); // Adjust the speed here
    }
  }

  typeWord();
});

window.addEventListener('load', function() {
  const minWidth = 1920;  // Minimum screen width in pixels
  const minHeight = 1080; // Minimum screen height in pixels

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Check if the screen width and height are less than the required resolution
  if (screenWidth < minWidth || screenHeight < minHeight) {
      document.getElementById('screen-warning').style.display = 'block';
  }
});
