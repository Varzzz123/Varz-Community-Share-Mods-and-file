let showServerOption = false;
let currentPage = 'home';

document.getElementById('addBtn').addEventListener('click', function() {
    const dropdown = document.getElementById('dropdownContent');
    dropdown.classList.toggle('show');
    
    if (showServerOption) {
        document.getElementById('communityOption').style.display = 'block';
        document.getElementById('serverOption').style.display = 'none';
        showServerOption = false;
    } else {
        document.getElementById('communityOption').style.display = 'none';
        document.getElementById('serverOption').style.display = 'block';
        showServerOption = true;
    }
});

document.getElementById('communityOption').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('dropdownContent').classList.remove('show');
    loadPage('community');
});

document.getElementById('serverOption').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('dropdownContent').classList.remove('show');
    loadPage('server');
});

function loadPage(page) {
    const pageTitle = document.getElementById('pageTitle');
    const dynamicContent = document.getElementById('dynamicContent');
    
    if (page === 'community') {
        pageTitle.textContent = 'Community Page';
        dynamicContent.innerHTML = '<p>This is the Community page content.</p>';
        currentPage = 'community';
    } else if (page === 'server') {
        pageTitle.textContent = 'Server Page';
        dynamicContent.innerHTML = '<p>This is the Server page content.</p>';
        currentPage = 'server';
    } else {
        pageTitle.textContent = 'Welcome to Varz Community';
        dynamicContent.innerHTML = '';
        currentPage = 'home';
    }
}

// Close dropdown when clicking outside
window.addEventListener('click', function(event) {
    if (!event.target.matches('.add-btn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});