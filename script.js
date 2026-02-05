const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  // wait for animation, then redirect
  setTimeout(() => {
    window.location.href = "original_site/index.html";
  }, 1200);
});
