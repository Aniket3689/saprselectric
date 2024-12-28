
// JavaScript for dynamic image and text change in Hero Section
const heroItems = [
  {
    imgSrc: './images/home1.jpg',
    title: 'Spars Electric: Leading EV Bike Dealership in India',
    description: 'Sparsh Electric is a leading name in the manufacturing and dealership of electric bikes and scooters in India. Based in Delhi and Noida, we specialize in creating high-quality, eco-friendly EV solutions tailored to meet the needs of a sustainable future..'
  },
  {
    imgSrc: './images/home2.jpg',
    title: 'Revolutionizing Mobility: EV Manufacturing Excellence in India',
    description: 'Our manufacturing facilities adhere to world-class standards, ensuring superior performance, durability, and innovative designs. Sparsh Electric takes pride in producing 100% Made-in-India electric vehicles, supporting the vision of "Atmanirbhar Bharat" (Self-Reliant India).'
  },
  {
    imgSrc: './images/home3.jpg',
    title: 'Crafting a Greener Future EV Manufacturing in Delhi and Noida',
    description: 'With a focus on cutting-edge technology, affordability, and customer satisfaction, Spars Electric is committed to revolutionizing transportation across India. Whether youre looking to purchase EVs or explore dealership opportunities Sparsh Electric is your trusted partner in green mobility.'
  },
  {
    imgSrc: './images/home4.jpg',
    title: 'Top electric bikes dealership',
    description: 'Sparsh Electric is a premier Indian brand dedicated to revolutionizing the electric vehicle (EV) industry. Headquartered in Delhi and Noida, we are proud manufacturers of state-of-the-art electric bikes and scooters that embody innovation, sustainability, and quality.'
  }
];

let currentItemIndex = 0;
const heroImageElement = document.getElementById('heroImage');
const heroTitle = document.getElementById('heroTitle');
const heroDescription = document.getElementById('heroDescription');

function changeHeroItem() {
  const currentItem = heroItems[currentItemIndex];
  heroImageElement.src = currentItem.imgSrc;
  heroTitle.textContent = currentItem.title;
  heroDescription.textContent = currentItem.description;

  // Move to the next product (looping back to the start)
  currentItemIndex = (currentItemIndex + 1) % heroItems.length;
}

setInterval(changeHeroItem, 5000); // Change image and text every 5 seconds
changeHeroItem(); // Initialize the first product








/* text animation  */

const counters = document.querySelectorAll('.counter-number');

const animateCounters = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = target / 100;

    const updateCounter = () => {
      count += increment;
      if (count < target) {
        counter.textContent = Math.ceil(count);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    updateCounter();
  });
};

const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      observer.disconnect();
    }
  });
}, options);

observer.observe(document.querySelector('.counter-section'));