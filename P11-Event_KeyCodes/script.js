const insert = document.getElementById("insert");

window.addEventListener("keypress", (event) => {
  let key = event.key;
  let keyCode = event.keyCode;
  let eventCode = event.code;
  //   insert.children[0].innerText = key;
  //   insert.children[1].innerText = keyCode;
  //   insert.children[2].innerText = eventCode;
  insert.innerHTML = `
    <div class="key">${
      key === " " ? eventCode : key
    } <small>event.key</small></div>
    <div class="key">${keyCode} <small>event.keyCode</small></div>
    <div class="key">${eventCode} <small>event.code</small></div>
    <div class="key">Press any key to get the keyCode and eventCode</div>`;
});
