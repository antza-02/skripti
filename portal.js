const MOCK_USER = {
  email: "client@northstar.fi",
  password: "demo123",
  name: "Northstar Clinic"
};

const INITIAL_MESSAGES = [
  { role: "client", text: "Can we add a new homepage section for spring services?" },
  { role: "team", text: "Absolutely. Please share text + images and we will implement it." },
  { role: "client", text: "I want to update the opening hours to mon-sat closed." },
  { role: "team", text: "Received. We logged this as a mock change request." }
];

const loginView = document.getElementById("login-view");
const dashboardView = document.getElementById("dashboard-view");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const logoutBtn = document.getElementById("logout-btn");
const chatThread = document.getElementById("chat-thread");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

let messages = [...INITIAL_MESSAGES];

function renderChat() {
  chatThread.innerHTML = messages
    .map((m) => `<div class="msg ${m.role}">${escapeHtml(m.text)}</div>`)
    .join("");
  chatThread.scrollTop = chatThread.scrollHeight;
}

function setAuthenticated(isAuthenticated) {
  loginView.classList.toggle("hidden", isAuthenticated);
  dashboardView.classList.toggle("hidden", !isAuthenticated);
}

function restoreSession() {
  const authenticated = window.localStorage.getItem("portal-mock-auth") === "1";
  setAuthenticated(authenticated);
  if (authenticated) renderChat();
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");

  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    window.localStorage.setItem("portal-mock-auth", "1");
    loginError.textContent = "";
    setAuthenticated(true);
    renderChat();
    return;
  }

  loginError.textContent = "Invalid credentials. Please use the mock account shown below.";
});

logoutBtn.addEventListener("click", () => {
  window.localStorage.removeItem("portal-mock-auth");
  setAuthenticated(false);
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = chatInput.value.trim();
  if (!value) return;

  messages.push({ role: "client", text: value });
  renderChat();
  chatInput.value = "";

  window.setTimeout(() => {
    messages.push({ role: "team", text: "Received. We logged this as a mock change request." });
    renderChat();
  }, 700);
});

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

restoreSession();
