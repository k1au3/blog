'use strict';

function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
}

function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
}


function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
}

function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.number');
    counters.forEach(counter => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
});






const reviewsContainer = document.querySelector('.reviews');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;
let reviews = [];

// Fetch reviews from JSON file
fetch('../../reviews.json')
    .then(response => response.json())
    .then(data => {
        reviews = data;
        renderReviews();
    });

function renderReviews() {
    reviewsContainer.innerHTML = '';
    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.innerHTML = `<p>${review.text}</p><div class="name">${review.name}</div>`;
        reviewsContainer.appendChild(reviewCard);
    });
    updateSlide();
}

function updateSlide() {
    const reviewCards = document.querySelectorAll('.review-card');
    const containerWidth = reviewsContainer.offsetWidth;
    const cardWidth = reviewCards[0].offsetWidth;
    const cardsToShow = window.innerWidth < 768 ? 1 : 3;
    const maxIndex = Math.ceil(reviews.length / cardsToShow) - 1;
    
    currentIndex = Math.min(currentIndex, maxIndex);
    const translateXValue = -(currentIndex * containerWidth);
    
    reviewsContainer.style.transform = `translateX(${translateXValue}px)`;
}

function nextSlide() {
    const cardsToShow = window.innerWidth < 768 ? 1 : 3;
    const maxIndex = Math.ceil(reviews.length / cardsToShow) - 1;
    
    currentIndex = (currentIndex + 1) % (maxIndex + 1);
    updateSlide();
}

function prevSlide() {
    const cardsToShow = window.innerWidth < 768 ? 1 : 3;
    const maxIndex = Math.ceil(reviews.length / cardsToShow) - 1;
    
    currentIndex = (currentIndex - 1 + (maxIndex + 1)) % (maxIndex + 1);
    updateSlide();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

window.addEventListener('resize', updateSlide);


