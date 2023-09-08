const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "You have a new message from a friend.",
  "Your order has been shipped and will arrive in 2-3 business days.",
  "Reminder: Your appointment with Dr. Smith is scheduled for tomorrow at 10:00 AM.",
  "Congratulations! You've earned a new achievement in your favorite game.",
];

const types = ["info", "success", "error"];

button.addEventListener("click", () => {
  createNotification();
});

function createNotification(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomtype());
  notif.innerText = message ? message : getRandomMessage();
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

const getRandomtype = () => {
  return types[Math.floor(Math.random() * types.length)];
};
