const loading = document.getElementById('loading');

function Home() {
    loading.style.display = "block";
    
    setTimeout(() => {
        window.open('../index.html');
        loading.style.display = "none";
    }, 1000)
}