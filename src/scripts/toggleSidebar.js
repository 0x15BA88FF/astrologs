const sidebarToggleButton = document.querySelector("#sidebar-toggle");
const sidebarElement = document.querySelector("#sidebar");

if (localStorage.isSidebarOpen === "true") {
    sidebarElement.classList.remove("hidden");
}

sidebarToggleButton.addEventListener("click", () => {
    if (sidebarElement.classList.contains("hidden")) {
        sidebarElement.classList.remove("hidden");
        localStorage.isSidebarOpen = "true";
    } else {
        sidebarElement.classList.add("hidden");
        localStorage.isSidebarOpen = "false";
    }
});
