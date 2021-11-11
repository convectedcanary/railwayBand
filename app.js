// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggler = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.links');

const eventsButton = document.querySelector('.events-button');
const eventsOverlaySection = document.querySelector('.modal-overlay');
const eventsCloseButton = document.querySelector('.close-btn');
const modalOverlaySection = document.querySelector('.modal-overlay');
const modalCloseButton = document.querySelector('.close-btn');

navToggler.addEventListener('click', () => {
    navLinks.classList.toggle('show-links');
});

const toggleModal = () => {
    console.log("clicked");
    eventsOverlaySection.classList.toggle('open-modal');
};

eventsButton.addEventListener('click', toggleModal);
eventsCloseButton.addEventListener('click', toggleModal);