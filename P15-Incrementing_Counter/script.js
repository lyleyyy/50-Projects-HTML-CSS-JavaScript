const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  setInterval(() => {
    updateCounter(counter);
  }, 1);
});

function updateCounter(counter) {
  const target = counter.getAttribute("data-target");
  const c = +counter.innerText;
  const increment = target / 200;
  if (c < target) {
    counter.innerText = `${Math.ceil(c + increment)}`;
  }
}

// const counters = document.querySelectorAll(".counter");
// counters.forEach((counter) => {
//   counter.innerText = "0";
//   const updateCounter = () => {
//     const target = counter.getAttribute("data-target");
//     const c = +counter.innerText;
//     const increment = target / 200;
//     if (c < target) {
//       counter.innerText = `${Math.ceil(c + increment)}`;
//       setTimeout(updateCounter, 1);
//       // console.log(counter.getAttribute("data-target"));
//     }
//   };

//   updateCounter();
//   // setInterval(updateCounter, 1);
// });
