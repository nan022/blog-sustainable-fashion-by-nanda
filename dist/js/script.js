// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Floating Image ---
const image = document.querySelector('.image-container');
let isFloating = false;

// Function to start the automatic floating effect
function startFloat() {
    if (!isFloating) {
        isFloating = true;
        animateFloat();
    }
}

// Function to animate the floating effect
function animateFloat() {
    image.style.top = '-50px'; // Adjust the value as needed
    setTimeout(() => {
        image.style.top = '0';
        setTimeout(animateFloat, 2000); // Repeat the animation every 2 seconds
    }, 2000); // Adjust the delay between animations as needed
}

// Start the automatic floating effect when the page loads
window.addEventListener('load', startFloat);

// Date
const daysOfWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const monthsOfYear = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

// Function to format the date
function formatDate(date) {
    const dayName = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const monthName = monthsOfYear[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName}, ${day} ${monthName} ${year}`;
}

// Get the current date
const currentDate = new Date();

// Format the date and update the content of the element
const formattedDateElement = document.getElementById('formatted-date');
formattedDateElement.textContent = formatDate(currentDate);