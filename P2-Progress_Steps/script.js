const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
next.addEventListener("click", () => {
  if (currentActive < circles.length) {
    currentActive++;
  }

  console.log(currentActive);

  if (currentActive == 2) {
    circles[1].classList.add("active");
    progress.style.width = 100 / 3 + "%";
    prev.disabled = false;
  } else if (currentActive == 3) {
    circles[2].classList.add("active");
    progress.style.width = (100 / 3) * 2 + "%";
  } else if (currentActive == circles.length) {
    circles[3].classList.add("active");
    progress.style.width = "100%";
    next.disabled = true;
  }
});

prev.addEventListener("click", () => {
  if (currentActive > 1) {
    currentActive--;
  }

  if (currentActive == 1) {
    prev.disabled = true;
    circles[1].classList.remove("active");
    progress.style.width = "0%";
    next.disabled = false;
  } else if (currentActive == 2) {
    circles[2].classList.remove("active");
    progress.style.width = 100 / 3 + "%";
  } else if (currentActive == 3) {
    circles[3].classList.remove("active");
    progress.style.width = (100 / 3) * 2 + "%";
  }
});
