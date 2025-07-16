function checkPassword() {
  const pwd = document.getElementById("password").value;
  const box = document.getElementById("login-box");
  const docs = document.getElementById("documents");
  const error = document.getElementById("error");

  if (pwd === "profadem123") {
    box.style.display = "none";
    docs.style.display = "block";
    error.textContent = "";
  } else {
    error.textContent = "Mot de passe incorrect.";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("confirmation").style.display = "block";
      form.reset();
    });
  }
});
