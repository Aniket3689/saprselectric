const testimonialsData = [
    {
        image: "../images/review1.jpeg",
        text: "The electric scooters from Spars Electric are fantastic! They're so easy to ride and navigate through the city.",
        author: "Ishaan Jha",
        role: "Advocate"
    },
    {
        image: "../images/review2.jpeg",
        text: "I've been using Spars Electric scooters for my daily commute, and I'm impressed with the performance and convenience.",
        author: "Ankush Singh",
       
    },
    {
        image: "../images/review3.jpeg",
        text: "These scooters are a game-changer! They're efficient, eco-friendly, and incredibly fun to ride.",
        author: "Sanjeet Yadav",
       
    },
    {
        image: "../images/review4.jpeg",
        text: "Best investment I've made this year. These scooters are not just cost-effective but also super convenient for everyday use.",
        author: "Rahul Mehta",
       
    },
    {
        image: "../images/review5.jpeg",
        text: "I appreciate how user-friendly and stylish these scooters are. They're perfect for short trips and commuting.",
        author: "prdeep Kumar",
        
    },
    {
        image: "../images/review6.jpeg",
        text: "I appreciate how user-friendly and stylish these scooters are. They're perfect for short trips and commuting.",
        author: "Ankit Roy",
      
    },
    {
        image: "../images/review7.jpeg",
        text: "I appreciate how user-friendly and stylish these scooters are. They're perfect for short trips and commuting.",
        author: "Anita Roy",
       
    },
    {
        image: "../images/review8.jpeg",
        text: "I appreciate how user-friendly and stylish these scooters are. They're perfect for short trips and commuting.",
        author: "Anikt Roy",
       
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