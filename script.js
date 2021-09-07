open_btn = document.querySelector(".modal-btn");
modal_overlay = document.querySelector(".modal-overlay");
close_btn = document.querySelector(".close-btn");
open_btn.addEventListener("click", function () {
  modal_overlay.classList.add("modal-overlay-open");
});
close_btn.addEventListener("click", function () {
  modal_overlay.classList.remove("modal-overlay-open");
});
