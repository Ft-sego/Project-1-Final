document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const container = document.getElementById("envelopeContainer");
  const app = document.getElementById("valentineApp");

  if (!envelope) {
    console.error("Envelope not found");
    return;
  }

  envelope.addEventListener("click", () => {
    container.style.display = "none";
    app.style.display = "block";
  });
});
