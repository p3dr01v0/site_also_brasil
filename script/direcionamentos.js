function gif_home() {//função
    window.location.href = 'index.html';//local desejado para o direcionamento
}
function redirecionar1() {
    window.location.href = 'suporte_castanha.html';
}
function redirecionar2() {
    window.location.href = 'placa_independente.html';
}

function redirecionar3() {
    window.location.href = 'placa_automatica.html';
}

function redirecionar4() {
    window.location.href = 'fusos.html';
}

function redirecionar5() {
    window.location.href = 'castanhas.html';
}

function redirecionar6() {
    window.location.href = 'coroa_espiral.html';
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const drawerOverlay = document.querySelector(".drawer-overlay");

    if (menuToggle && drawerOverlay) {
        menuToggle.addEventListener("click", function () {
            drawerOverlay.classList.toggle("open");
        });

        // Fecha o drawer ao clicar fora dele
        document.addEventListener("click", function (event) {
            if (!drawerOverlay.contains(event.target) && !menuToggle.contains(event.target)) {
                drawerOverlay.classList.remove("open");
            }
        });
    }
});
