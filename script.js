// Smooth Scrolling
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.hash);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// Theme Toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.innerHTML = document.body.classList.contains("dark")
    ? `<i class="fas fa-sun"></i>`
    : `<i class="fas fa-moon"></i>`;
});


// ================= PARTICIPANT REGISTRATION POPUP =================
const registerModal = document.getElementById("registerModal");
const openRegisterBtn = document.getElementById("openRegister");
const navRegister = document.getElementById("navRegister");
const closeRegister = document.getElementById("closeModal");

openRegisterBtn.onclick = () => registerModal.style.display = "flex";
navRegister.onclick = () => registerModal.style.display = "flex";
closeRegister.onclick = () => registerModal.style.display = "none";

document.getElementById("regForm").onsubmit = (e) => {
  e.preventDefault();
  alert("Registration Submitted Successfully!");
  registerModal.style.display = "none";
};


// ================= ADMIN LOGIN / SIGNUP POPUP =================
const adminModal = document.getElementById("adminModal");
const adminBoxBtn = document.getElementById("openAdminFromBox");
const navAdminBtn = document.getElementById("adminLoginBtn");
const closeAdmin = document.getElementById("adminClose");

adminBoxBtn.onclick = () => adminModal.style.display = "flex";
navAdminBtn.onclick = () => adminModal.style.display = "flex";
closeAdmin.onclick = () => adminModal.style.display = "none";


// Login ↔ Signup toggle
const loginBox = document.getElementById("loginBox");
const signupBox = document.getElementById("signupBox");

document.getElementById("openSignup").onclick = () => {
  loginBox.style.display = "none";
  signupBox.style.display = "block";
};

document.getElementById("openLogin").onclick = () => {
  signupBox.style.display = "none";
  loginBox.style.display = "block";
};


// Signup & Login alert only (no backend yet)
document.getElementById("signupSubmit").onclick = () => {
  alert("Admin account created successfully!");
  loginBox.style.display = "block";
  signupBox.style.display = "none";
};

document.getElementById("loginSubmit").onclick = () => {
  alert("Logged in as Admin!");
  adminModal.style.display = "none";
};


// ================= CLOSE MODALS ON OUTSIDE CLICK =================
window.onclick = (e) => {
  if (e.target === registerModal) registerModal.style.display = "none";
  if (e.target === adminModal) adminModal.style.display = "none";
};


// Mobile Navbar Toggle
document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("show");
});


