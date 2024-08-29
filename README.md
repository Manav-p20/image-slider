Overview
This project implements a simple yet functional image slider using HTML, CSS, and JavaScript. The slider includes features such as automatic sliding, navigation buttons, and indicator dots for user interaction.

Features
Automatic Sliding: The slider automatically transitions between images every 3 seconds.
Navigation Buttons: Users can manually navigate through images using "Next" and "Previous" buttons.
Indicator Dots: Visual indicators allow users to jump to a specific slide.
Files
index.html: The main HTML file containing the structure and content of the image slider.
styles.css: Embedded CSS styles for the slider, including layout, animations, and responsiveness.
script.js: Embedded JavaScript for functionality, including slide transitions and automatic sliding.
Usage
Setup: Ensure you have all the images referenced in the HTML file. Update the image src attributes if needed.

HTML Structure:

<h1 class="upper-heading">: Displays the title of the slider.
<div class="slide-container">: Contains the slider, including slides, navigation buttons, and indicator dots.
<div class="slides">: Holds the images for the slider. The first image has the class active by default.
<div class="buttons">: Contains navigation buttons (next and previous).
<div class="dotsContainer">: Contains indicator dots for slide navigation.
CSS Styling:

General reset and styling for consistent appearance.
Slide container and image styling.
Navigation button and indicator dot styling.
Animation keyframes for slide transitions.
JavaScript Functionality:

slideNext(): Moves to the next slide and updates the indicators.
slidePrev(): Moves to the previous slide and updates the indicators.
autoSliding(): Automatically transitions slides every 3 seconds.
indicators(): Updates the active dot indicator based on the current slide.
switchImage(currentImage): Changes slides based on the clicked indicator dot.
How to Run
Save the code in a file named index.html.
Open index.html in a web browser to view and interact with the image slider.
Customization
Images: Replace the src attributes of the <img> elements with paths to your own images.
Styles: Modify the CSS to change the appearance of the slider, including size, colors, and animations.
Functionality: Adjust JavaScript functions for different transition effects or timings.