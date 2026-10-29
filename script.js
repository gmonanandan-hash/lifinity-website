// Keep the footer year current.
document.querySelectorAll("[data-year]").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// The design-preview form does not submit anywhere. This block does nothing
// once the Brevo embed replaces the preview form.
var preview = document.querySelector(".preview-form");
if (preview) {
  preview.addEventListener("submit", function (event) {
    event.preventDefault();
    preview.querySelector(".form-note").hidden = false;
  });
}
