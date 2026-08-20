const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => { const isOpen = mainNav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', isOpen); });
mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { mainNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); }));
const reviews = [['“Jeg kom for træningen. Jeg blev for fællesskabet. Efter tre måneder kan jeg mærke forskel på alt fra min energi til min selvtillid.”','— Freja, medlem siden 2024'],['“Coachesne ser dig, husker dine mål og presser dig på den helt rigtige måde. Det er første gang, jeg glæder mig til mandagstræning.”','— Jonas, medlem siden 2023'],['“Her er plads til både begyndere og dem, der går efter personlige rekorder. Stemningen gør hele forskellen.”','— Maja, medlem siden 2025']];
let reviewIndex = 0;
const reviewText = document.querySelector('#review-text');
const reviewName = document.querySelector('#review-name');
function showReview(index) { reviewText.textContent = reviews[index][0]; reviewName.textContent = reviews[index][1]; }
document.querySelector('.review-next').addEventListener('click', () => { reviewIndex = (reviewIndex + 1) % reviews.length; showReview(reviewIndex); });
document.querySelector('.review-prev').addEventListener('click', () => { reviewIndex = (reviewIndex - 1 + reviews.length) % reviews.length; showReview(reviewIndex); });
document.querySelector('.contact-form').addEventListener('submit', (event) => { event.preventDefault(); event.currentTarget.querySelector('.form-message').textContent = 'Tak. Vi vender tilbage til dig hurtigst muligt.'; event.currentTarget.reset(); });