// Simple form validation
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function(event) {
      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const message = document.querySelector("#message").value.trim();
      if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        event.preventDefault();
      }
    });
  }
});
