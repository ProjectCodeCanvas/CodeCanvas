
let isSideBarOpen = true;
document.getElementById("sideBarTargetBtn").addEventListener("click", sideBarToggleHandler);

function sideBarToggleHandler() {
    console.log("here");
    var sidebar = document.getElementById("container");
    var mainContent = document.getElementById("main-content");
    if (isSideBarOpen) {
        // Close the sidebar by adding a class that translates it to the left
        sidebar.classList.add("sidebar-hidden");
        // Move content to center
        mainContent.classList.add("content-centered");
    } else {
        // Open the sidebar by removing the class that hides it
        sidebar.classList.remove("sidebar-hidden");
        // Move content back to original position
        mainContent.classList.remove("content-centered");
    }
    // Toggle the state of isSideBarOpen
    isSideBarOpen = !isSideBarOpen;
}


// Get all the anchor tags inside the links container
var links = document.querySelectorAll("#links .link");

// Add click event listeners to each anchor tag
links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        // Prevent the default action of the anchor tag
        event.preventDefault();

        // Remove the highlighted-link class from all anchor tags
        links.forEach(function(link) {
            link.classList.remove("highlighted-link");
        });

        // Add the highlighted-link class to the clicked anchor tag
        link.classList.add("highlighted-link");
    });
});