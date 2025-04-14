const header = document.querySelector(".header__container");

const images = [
  "https://www.biospectrumindia.com/uploads/articles/58842473_2017775345000077_7604058568991440896_o-13494.jpg",
  "https://greenwoodhigh.edu.in/wp-content/uploads/2022/03/award-1.jpg",
  "https://indiasmostethicalcompaniesawards.com/uploads/gallery/image_1920x_5f489fe7b9a12.jpg"
];

let index = 0;

function changeBackground() {
  header.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

// contact

changeBackground(); // Initial call
setInterval(changeBackground, 5000); // Change every 5 seconds

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // You can integrate this with an email service or backend
    const name = document.getElementById('name').value;
    document.getElementById('formMessage').textContent = `Thanks ${name}, we received your message!`;
    this.reset();
});

//Courses

const searchInput = document.getElementById("searchInput");
const courseCards = document.querySelectorAll(".course-card");

searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();

  courseCards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const desc = card.querySelector("p").textContent.toLowerCase();

    if (title.includes(filter) || desc.includes(filter)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

//about

window.addEventListener('scroll', () => {
    document.querySelectorAll('.about-text, .about-image, .team-member').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  });
  
  // Optional initial animation style
  document.querySelectorAll('.about-text, .about-image, .team-member').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease";
  });

  //reviewsystem
let selectedRating = 0;
    const stars = document.querySelectorAll('#starContainer .star');

    stars.forEach(star => {
      star.addEventListener('click', () => {
        selectedRating = parseInt(star.getAttribute('data-value'));

        stars.forEach(s => s.classList.remove('active'));

        stars.forEach(s => {
          if (parseInt(s.getAttribute('data-value')) <= selectedRating) {
            s.classList.add('active');
          }
        });
      });
    });

    function submitReview() {
      const reviewText = document.getElementById('reviewText').value.trim();
      if (selectedRating === 0 || reviewText === "") {
        alert("Please select a rating and write a review.");
        return;
      }

      const reviewsContainer = document.getElementById('reviews');
      const newReview = document.createElement('div');
      newReview.className = 'review-item';
      newReview.innerHTML = `
        <strong>${'★'.repeat(selectedRating)}${'☆'.repeat(5 - selectedRating)}</strong>
        <p>${reviewText}</p>
      `;
      reviewsContainer.appendChild(newReview);

      // Reset form
      selectedRating = 0;
      document.getElementById('reviewText').value = "";
      stars.forEach(s => s.classList.remove('active'));
    }
    //indexreview
    let sideRating = 0;

// Star Click Logic
document.querySelectorAll('#sideStars .star').forEach(star => {
  star.addEventListener('click', () => {
    sideRating = parseInt(star.getAttribute('data-value'));
    updateSideStars();
  });
});

function updateSideStars() {
  document.querySelectorAll('#sideStars .star').forEach(star => {
    const value = parseInt(star.getAttribute('data-value'));
    star.classList.toggle('selected', value <= sideRating);
  });
}

// Submit Review Logic
function submitSideReview() {
  const text = document.getElementById('sideReview').value.trim();
  if (sideRating === 0 || text === "") {
    alert("Please rate and write a review.");
    return;
  }

  alert("Thanks for your review!\n" + '★'.repeat(sideRating) + '\n' + text);

  // Reset form
  sideRating = 0;
  document.getElementById('sideReview').value = "";
  updateSideStars();
}

// Hide & Reappear after 3 minutes
function hideReviewBox() {
  const box = document.getElementById("floatingReviewBox");
  box.style.display = "none";

  // Show again after 3 minutes
  setTimeout(() => {
    box.style.display = "block";
  }, 180000);
}