const loading = document.getElementById('loading');

function button1() {
    loading.style.display = "block";
    setTimeout(() => {
        window.open("HTML/mod.html");
        loading.style.display = "none";
    }, 1000);
}

function button2() {
    loading.style.display = "block";
    setTimeout(() => {
        window.open("HTML/gta.html");
        loading.style.display = "none";
    }, 1000);
}

function button3() {
    loading.style.display = "block";
    setTimeout(() => {
        window.open("HTML/discord.html");
        loading.style.display = "none";
    }, 1000);
}