var loginModal = document.getElementById("login-modal");
var regisModal = document.getElementById("register-modal");
var loginBtn = document.getElementById("login");
var regisBtn = document.getElementById("regis");
var closeBtn = document.getElementById("close_x");
var closeBtn2 = document.getElementById("close_x2");

loginBtn.onclick = function() {
    loginModal.style.display = "block";
}
regisBtn.onclick = function() {
    regisModal.style.display = "block";
}

closeBtn.onclick = function() {
    loginModal.style.display = "none";
}
closeBtn2.onclick = function() {
    regisModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }else if (event.target == regisModal){
    regisModal.style.display = "none";
  }
}

// ------- Slider ----------

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
let isTyping = false;
let typewriter;

// show slide at current index
function showSlide() {
  // hide all slides
  slides.forEach((slide) => {
    slide.classList.remove('active');
    console.log("Hello");
  });
  // show current slide
  slides[currentIndex].classList.add('active');
  console.log("Hi");

}

// start typewriter effect for current slide's text
function startTyping() {
  const textEl = slides[currentIndex].querySelector('.typewriter');
  const text = textEl.textContent.trim();
  let charIndex = 0;
  isTyping = true;
  textEl.textContent = '';
  typewriter = setInterval(() => {
    textEl.textContent += text[charIndex];
    charIndex++;
    if (charIndex === text.length) {
      clearInterval(typewriter);
      isTyping = false;
    }
  }, 50);
}

// stop typewriter effect for current slide's text
function stopTyping() {
  if (isTyping) {
    clearInterval(typewriter);
    const textEl = slides[currentIndex].querySelector('.typewriter');
    textEl.textContent = textEl.textContent.trim();
    isTyping = false;
  }
}

// show previous slide
function showPrevSlide() {
  stopTyping();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide();
  startTyping();
}

// show next slide
function showNextSlide() {
  stopTyping();
  currentIndex++;
  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
  }
  showSlide();
  startTyping();
}

// initialize slider
showSlide();
startTyping();

// add event listeners for next/previous buttons
prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);
