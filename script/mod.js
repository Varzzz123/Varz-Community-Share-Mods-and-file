document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const loading = document.getElementById('loading');
    
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

function Setting() {
    loading.style.display = "block";

    setTimeout(() => {
        window.open('../HTML/PROPER/setting.html');
        loading.style.display = "none";
    }, 1000);
}

function dekstopMod() {
    loading.style.display = 'block';

    setTimeout(() => {
        window.open('../HTML/MOD/DEKSTOP/halamanMod.html');
        loading.style.display = 'none';
    }, 1000);
}

function androidMod() {
    loading.style.display = 'block';

    setTimeout(() => {
        window.open('../HTML/MOD/ANDROID/halamanMod.html');
        loading.style.display = 'none';
    }, 1000);
}