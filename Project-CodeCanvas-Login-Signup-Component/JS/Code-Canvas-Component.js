// slider - manas
let isSideBarOpen = true;
document.getElementById("sideBarTargetBtn").addEventListener("click", sideBarToggleHandler);

function sideBarToggleHandler() {
    console.log("workin...");
    const sidebar = document.getElementById("container");
    const mainContent = document.getElementById("main-content");
    if (isSideBarOpen) {
        sidebar.classList.add("sidebar-hidden");
        mainContent.classList.add("content-centered");
    } else {
        sidebar.classList.remove("sidebar-hidden");
        mainContent.classList.remove("content-centered");
    }
    isSideBarOpen = !isSideBarOpen;
}

const links = document.querySelectorAll("#links .link");

links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        links.forEach(function(link) {
            link.classList.remove("highlighted-link");
        });
        link.classList.add("highlighted-link");
    });
});