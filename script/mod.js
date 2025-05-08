document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuContent = document.getElementById('menuContent');
    
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        menuContent.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuContent.contains(event.target) && event.target !== menuToggle) {
            menuToggle.classList.remove('active');
            menuContent.classList.remove('active');
        }
    });
    
    // Prevent menu from closing when clicking inside it
    menuContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});