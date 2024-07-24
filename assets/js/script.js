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






document.addEventListener('DOMContentLoaded', () => {
    fetch('../../reviews.json')
        .then(response => response.json())
        .then(data => {
            const reviewsContainer = document.getElementById('reviewsContainer');
            const reviewTrack = document.createElement('div');
            reviewTrack.className = 'review-track';

            data.reviews.forEach(review => {
                const reviewCard = document.createElement('div');
                reviewCard.className = 'review-card';
                reviewCard.innerHTML = `
                    <h2>${review.title}</h2>
                    <p>${review.content}</p>
                    <p class="name">${review.name}</p>
                `;
                reviewTrack.appendChild(reviewCard);
            });

            // Duplicate the reviewTrack for infinite scrolling effect
            reviewTrack.innerHTML += reviewTrack.innerHTML;
            reviewsContainer.appendChild(reviewTrack);
        })
        .catch(error => console.error('Error fetching reviews:', error));
});


