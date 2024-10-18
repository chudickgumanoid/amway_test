const videoItems = document.querySelectorAll(".about-program__item");

const videoFrame = document.getElementById("videoFrame");

function changeVideo(event) {
  const videoUrl = event.currentTarget.getAttribute("data-video");

  videoFrame.src = videoUrl;
}

videoItems.forEach((item) => {
  item.addEventListener("click", changeVideo);
});

const steps = document.querySelectorAll(".can-you-keep__step");
const dots = document.querySelectorAll(".dot");

let currentStep = 0;

function updateSlider() {
  steps.forEach((step, index) => {
    step.classList.remove("active");
    dots[index].classList.remove("active");
  });

  steps[currentStep].classList.add("active");
  dots[currentStep].classList.add("active");
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentStep = index;
    updateSlider();
  });
});

updateSlider();
