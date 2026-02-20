const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const progress = document.getElementById("progress");
const form = document.getElementById("regForm");
const modal = document.getElementById("modal");
const countdown = document.getElementById("countdown");
function updateProgress() {
  let count = 0;
  if (nameInput.value.trim().length >= 3) count++;
  if (emailInput.value.includes("@")) count++;
  if (/^\d{10}$/.test(phoneInput.value)) count++;
  progress.textContent = `${count} / 3`;
}

phoneInput.addEventListener("input", () => {
  phoneInput.value = phoneInput.value.replace(/\D/g, "").slice(0, 10);
  updateProgress();
});

nameInput.addEventListener("input", updateProgress);
emailInput.addEventListener("input", updateProgress);

form.addEventListener("submit", e => {
  e.preventDefault();
  updateProgress();

  if (progress.textContent !== "3 / 3") return;

  modal.style.display = "flex";
  form.reset();
  progress.textContent = "0 / 3";
});

document.getElementById("closeModal").onclick = () => {
  modal.style.display = "none";
};

const eventDate = new Date("2026-02-28T10:00:00").getTime();

setInterval(() => {
  const diff = eventDate - Date.now();
  if (diff <= 0) {
    countdown.textContent = "Event has started";
    return;
  }
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  countdown.textContent = `${d}d ${h}h ${m}m`;
}, 1000);