const btns = document.querySelectorAll(".faq-toggle");
const answers = document.querySelectorAll(".faq");
// const arrowDowns = document.querySelectorAll(".faq-text");
// const times = document.querySelectorAll(".faq-text");

btns.forEach((btn, idx) =>
  btn.addEventListener("click", () => {
    console.log(answers[idx]);
    answers[idx].classList.toggle("active");
  })
);
