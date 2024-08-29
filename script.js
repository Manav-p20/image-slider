// Access the images and navigation buttons
let slideImages = document.querySelectorAll('img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let dots = document.querySelectorAll('.dot');

var counter = 0; // Index of the currently displayed image

// Function to move to the next slide
next.addEventListener('click', slideNext);
function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards'; // Animation for current slide
    if(counter >= slideImages.length - 1){
        counter = 0; // Loop back to first image
    } else {
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards'; // Animation for next slide
    indicators(); // Update indicators
}

// Function to move to the previous slide
prev.addEventListener('click', slidePrev);
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards'; // Animation for current slide
    if(counter == 0){
        counter = slideImages.length - 1; // Loop back to last image
    } else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards'; // Animation for previous slide
    indicators(); // Update indicators
}

// Auto-sliding functionality
function autoSliding(){
    deletInterval = setInterval(timer, 3000); // Change slide every 3 seconds
    function timer(){
        slideNext(); // Move to next slide
        indicators(); // Update indicators
    }
}
autoSliding(); // Start auto-sliding

// Stop auto-sliding when mouse is over slider
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
    clearInterval(deletInterval); // Stop auto-sliding
});

// Resume auto-sliding when mouse is out
container.addEventListener('mouseout', autoSliding);

// Update indicators based on the current slide
function indicators(){
    for(let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', ''); // Remove active class
    }
    dots[counter].className += ' active'; // Add active class to current dot
}

// Switch to the slide corresponding to the clicked indicator
function switchImage(currentImage){
    currentImage.classList.add('active'); // Mark the clicked dot as active
    var imageId = currentImage.getAttribute('attr');
    if(imageId > counter){
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards'; // Animation for current slide
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards'; // Animation for new slide
    } else if(imageId == counter){
        return; // No change needed
    } else {
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards'; // Animation for current slide
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards'; // Animation for new slide
    }
    indicators(); // Update indicators
}
