document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const envelopeContainer = document.getElementById("envelopeContainer");
  const app = document.getElementById("valentineApp");

  if (!envelope) {
    console.error("Envelope not found");
    return;
  }

  envelope.addEventListener("click", () => {
    console.log("Envelope clicked");

    envelopeContainer.style.display = "none";
    app.style.display = "block";
  });
});
