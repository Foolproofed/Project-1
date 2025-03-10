// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all dropdown list items
    const dropdowns = document.querySelectorAll('nav ul li.dropdown');
    
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            // Prevent the click from bubbling up if needed
            event.stopPropagation();
            // Toggle active state on the clicked dropdown
            dropdown.classList.toggle('active');
        });
    });
    
    // Optional: Close any open dropdown if clicking outside
    document.addEventListener('click', function() {
        dropdowns.forEach(function(dropdown) {
            dropdown.classList.remove('active');
        });
    });
});