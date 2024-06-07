let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("template-slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000);
}

// EMAIL VALIDATION ----------------------------
const emailInput = document.getElementById("email");
const resultElement = document.getElementById("result");

emailInput.addEventListener("input", function () {
  const email = emailInput.value;

  if (validator.isEmail(email)) {
    resultElement.innerText = "Email address is valid";
  } else {
    resultElement.innerText = "Email address is invalid";
  }
});
