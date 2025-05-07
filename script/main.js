const loading = document.getElementById('loading');

function button1() {
    loading.style.display = "block";
    setTimeout(() => {
        window.open("../LANJUT/mod.html");
        loading.style.display = "none";
    }, 1000);
}

function button2() {
    loading.style.display = "block";
    setTimeout(() => {
        window.open("../LANJUT/gta.html");
        loading.style.display = "none";
    }, 1000);
}

function button3() {
    loading.style.display = "block";
    setTimeout(() => {
        window.open("../LANJUT/discord.html");
        loading.style.display = "none";
    }, 1000);
}