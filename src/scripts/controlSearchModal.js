const searchModalBackdrop = document.querySelector("#search-modal-backdrop");
const searchModalButton = document.querySelector("#search-modal-button");
const searchModal = document.querySelector("#search-modal");

searchModalButton.addEventListener("click", () => {
    searchModal.classList.remove("animate-offscreen-up");
    searchModalBackdrop.classList.remove("animate-fade-out");
});

searchModalBackdrop.addEventListener("click", () => {
    !searchModal.classList.contains("animate-offscreen-up") && searchModal.classList.add("animate-offscreen-up");
    !searchModalBackdrop.classList.contains("animate-fade-out") && searchModalBackdrop.classList.add("animate-fade-out");
})
