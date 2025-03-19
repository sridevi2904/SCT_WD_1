// Select the dark mode toggle button
const toggleButton = document.getElementById("dark-mode-toggle");

// Check if dark mode was previously enabled
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Toggle dark mode on button click
toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Save dark mode state in localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});
