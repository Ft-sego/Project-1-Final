document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");

  if (!envelope) return;

  envelope.addEventListener("click", () => {
    window.location.href = "original_site/index.html";
  });
});
