document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const popupMenu = document.querySelector('.popup-menu');

    if (!hamburger || !popupMenu) {
        console.error('Menu elements not found!');
        return;
    }

    console.log('Menu elements found and initialized');

    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        popupMenu.classList.toggle('active');
        console.log('Hamburger clicked - Menu toggled, active:', popupMenu.classList.contains('active'));
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!popupMenu.contains(e.target) && popupMenu.classList.contains('active')) {
            popupMenu.classList.remove('active');
        }
    });

    // Close menu when a link is clicked
    popupMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            popupMenu.classList.remove('active');
        });
    });
});
