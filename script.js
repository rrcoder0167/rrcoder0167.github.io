// Add this JavaScript file to your project folder and link it in your HTML files.

// Function to determine the current page URL
function getCurrentPageUrl() {
    return window.location.href.split('/').pop();
}

// Function to update the active link in the navigation
function updateActiveLink() {
    const currentPageUrl = getCurrentPageUrl();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkUrl = link.getAttribute('href');
        if (currentPageUrl === linkUrl) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call the function to update the active link when the page loads
updateActiveLink();
