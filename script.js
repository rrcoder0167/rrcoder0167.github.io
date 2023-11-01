// Add this JavaScript file to your project folder and link it in your HTML files.

// Add an event listener to handle navigation clicks
document.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        loadPage(href);
    }
});

// Function to load the content of the selected page
function loadPage(pageUrl) {
    fetch(pageUrl)
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
            // You can also update the navigation menu to indicate the current page
        })
        .catch(error => console.error('Page could not be loaded: ', error));
}
