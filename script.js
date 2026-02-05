document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");

  if (!envelope) {
    console.error("Envelope image not found");
    return;
  }

  envelope.addEventListener("click", () => {
    window.location.href = "original_site/index.html";
  });
});
