const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((smallCup, idx) => {
  smallCup.addEventListener("click", () => {
    highlightCups(idx);
    updateBigCup();
  });
});

function highlightCups(idx) {
  //   if (
  //     smallCups[idx].classList.contains("full") &&
  //     !smallCups[idx].nextElementSibling.classList.contains("full")
  //   ) {
  //     smallCups[idx].classList.remove("full");
  //     idx--;
  //   }

  //   smallCups.forEach((smallCupAgain, idxAgain) => {
  //     if (idxAgain <= idx) {
  //       smallCupAgain.classList.add("full");
  //     }
  //   });
  if (
    idx === 0 &&
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    smallCups[idx].classList.remove("full");
  } else {
    smallCups.forEach((smallCup) => {
      smallCup.classList.remove("full");
    });

    smallCups.forEach((smallCupAgain, idxAgain) => {
      if (idxAgain <= idx) {
        smallCupAgain.classList.add("full");
      }
    });
  }
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  let progress = (fullCups / totalCups) * 100;

  percentage.style.height = `${progress}%`;
  if (progress === 0) {
    percentage.innerText = "";
    remained.children[0].innerText = `2L`;
    remained.children[1].innerText = "Remained";
  } else if (progress === 100) {
    for (let i = 0; i < remained.children.length; i++) {
      remained.children[i].innerText = "";
    }
    percentage.innerText = `${progress}%`;
  } else {
    remained.children[0].innerText = `${(1 - progress / 100) * 2}L`;
    remained.children[1].innerText = "Remained";
    percentage.innerText = `${progress}%`;
  }
}
