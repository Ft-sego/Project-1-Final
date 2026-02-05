document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const envelopeContainer = document.getElementById("envelopeContainer");
  const valentineApp = document.getElementById("valentineApp");

  if (!envelope) {
    console.error("Envelope element not found");
    return;
  }

  envelope.addEventListener("click", () => {
    envelopeContainer.style.display = "none";
    valentineApp.style.display = "block";
  });
});
