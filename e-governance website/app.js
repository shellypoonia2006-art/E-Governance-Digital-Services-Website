const toast = document.querySelector("#toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

document.querySelector("#menu-button").addEventListener("click", (event) => {
  const menu = document.querySelector("#primary-nav");
  const expanded = event.currentTarget.getAttribute("aria-expanded") === "true";
  event.currentTarget.setAttribute("aria-expanded", String(!expanded));
  menu.classList.toggle("open", !expanded);
});

document.querySelector("#font-toggle").addEventListener("click", () => {
  document.body.classList.toggle("large-text");
  showToast(document.body.classList.contains("large-text") ? "Larger text enabled" : "Standard text size enabled");
});

document.querySelector("#contrast-toggle").addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
  showToast(document.body.classList.contains("high-contrast") ? "High contrast enabled" : "High contrast disabled");
});

document.querySelector("#search-button").addEventListener("click", () => {
  const query = document.querySelector("#service-search").value.trim();
  if (!query) {
    document.querySelector("#service-search").focus();
    showToast("Enter a service or benefit to search");
    return;
  }
  showToast(`Showing services matching “${query}”`);
  document.querySelector("#services").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".popular-search").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#service-search").value = button.textContent;
    document.querySelector("#search-button").click();
  });
});

document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".service-card").forEach((item) => item.classList.remove("selected"));
    card.classList.add("selected");
    showToast(`${card.querySelector("strong").textContent} selected`);
  });
});

document.querySelector("#start-button").addEventListener("click", () => {
  document.querySelector("#services").scrollIntoView({ behavior: "smooth" });
  showToast("Choose a service category to get started");
});

document.querySelector("#login-button").addEventListener("click", () => showToast("Sign-in is available in the full service portal"));

document.querySelector("#status-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const reference = document.querySelector("#reference-number").value.trim();
  const message = document.querySelector("#status-message");
  message.textContent = `Demo result: application ${reference} is ready for verification.`;
  showToast("Application status found");
});

