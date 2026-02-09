document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});


const galleryWrapper = document.querySelector('.gallery-wrapper');
const images = document.querySelectorAll('.gallery-wrapper img');
const imageWidth = images[0].offsetWidth + 20; // Width + padding/margin
let currentIndex = 0;

function slideForward() {
  currentIndex++;
  // If we reach the end, reset to the beginning (requires duplicated HTML as above)
  if (currentIndex >= images.length / 2) { 
    currentIndex = 0;
  }
  galleryWrapper.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  galleryWrapper.style.transition = 'transform 0.5s ease-in-out'; // Smooth transition
}

// Automatically slide every 3 seconds
let autoScroll = setInterval(slideForward, 3000); 

// Optional: Pause on hover using JavaScript
galleryWrapper.addEventListener('mouseenter', () => {
  clearInterval(autoScroll);
});

galleryWrapper.addEventListener('mouseleave', () => {
  autoScroll = setInterval(slideForward, 3000);
});


// script.js
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission to a new page

    // Basic validation check (more complex validation can be added)
    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;

    if (name && email && message) {
        alert('Message sent successfully!');
        contactForm.reset(); // Clear the form fields
        // Here you would typically send the data to a server using fetch() or XMLHttpRequest
    } else {
        alert('Please fill in all fields.');
    }
});
