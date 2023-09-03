const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const rect = button.getBoundingClientRect();
    const rectLeft = rect.left;
    const rectTop = rect.top;
    const rectWidth = rect.width;
    const rectHeight = rect.height;
    const x = e.clientX;
    const y = e.clientY;

    if (
      x >= rectLeft &&
      x <= rectLeft + rectWidth &&
      y >= rectTop &&
      y <= rectTop + rectHeight
    ) {
      console.log(button.innerHTML);
      button.innerHTML = "";
      button.innerHTML = `Click Me
        <span class="circle" style="top: ${y - rectTop}px; left: ${
        x - rectLeft
      }px;"></span>`;
    }
  });
});
