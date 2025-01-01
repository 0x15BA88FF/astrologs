const sidebarToggleButton = document.querySelector("#sidebar-toggle");
const sidebarBackdrop = document.querySelector("#sidebar-backdrop");
const sidebarElement = document.querySelector("#sidebar");

const openSidebar = _ => {
    sidebarElement.classList.remove("lg:w-0");
    sidebarElement.classList.remove("animate-offscreen-left");
    sidebarBackdrop.classList.remove("animate-fade-out");
}

const closeSidebar = _ => {
    !sidebarElement.classList.contains("animate-offscreen-left") && sidebarElement.classList.add("animate-offscreen-left");
    !sidebarBackdrop.classList.contains("animate-fade-out") && sidebarBackdrop.classList.add("animate-fade-out");
    !sidebarElement.classList.contains("lg:w-0") && sidebarElement.classList.add("lg:w-0");
}

sidebarToggleButton.addEventListener("click", () => {
    if (sidebarElement.classList.contains("animate-offscreen-left")) { openSidebar() }
    else { closeSidebar() }
});

sidebarBackdrop.addEventListener("click", () => closeSidebar())
