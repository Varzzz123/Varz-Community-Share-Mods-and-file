const loading = document.getElementById('loading');

function Home() {
    loading.style.display = "block";
    
    setTimeout(() => {
        window.open('../index.html');
        loading.style.display = "none";
    }, 1000)
}

function andro() {
    loading.style.display = "block";
    
    setTimeout(() => {
        window.open("../HTML/GTA/ANDROID/pageandroid.html");
        loading.style.display = "none";
    }, 3000);
}

function dekstop() {
    loading.style.display = "block";
    
    setTimeout(() => {
        window.open("../HTML/GTA/DEKSTOP/pagedekstop.html");
        loading.style.display = "none";
    }, 3000);
}