const testimonialsData = [
    {
        image: "https://via.placeholder.com/60",
        text: "The electric scooters from Spars Electric are fantastic! They're so easy to ride and navigate through the city.",
        author: "Naina Jha",
        role: "Advocate"
    },
    {
        image: "https://via.placeholder.com/60",
        text: "I've been using Spars Electric scooters for my daily commute, and I'm impressed with the performance and convenience.",
        author: "Sneha Singh",
        role: "Lawyer"
    },
    {
        image: "https://via.placeholder.com/60",
        text: "These scooters are a game-changer! They're efficient, eco-friendly, and incredibly fun to ride.",
        author: "Preti Yadav",
        role: "Web Developer"
    },
    {
        image: "https://via.placeholder.com/60",
        text: "Best investment I've made this year. These scooters are not just cost-effective but also super convenient for everyday use.",
        author: "Rahul Mehta",
        role: "Engineer"
    },
    {
        image: "https://via.placeholder.com/60",
        text: "I appreciate how user-friendly and stylish these scooters are. They're perfect for short trips and commuting.",
        author: "Anita Roy",
        role: "Designer"
    }
];

const testimonialCardsContainer = document.getElementById('testimonial-cards');

testimonialsData.forEach(testimonial => {
    const card = document.createElement('div');
    card.classList.add('testimonial-card');
    card.innerHTML = `
        <div class="quote-icon"></div>
        <p class="testimonial-text">"${testimonial.text}"</p>
        <img src="${testimonial.image}" alt="${testimonial.author}" class="testimonial-image">

        <div class="testimonial-author">${testimonial.author}</div>
    `;
    testimonialCardsContainer.appendChild(card);
});