document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,// slides visiveis
        spaceBetween: 25, // espaço enre os slides
        loop: true, // loop para os slides
        centerSlide: true, // centraliza
        fade: true, // altera a opacidade ao passar o slide 
        freeMode: false, // permite o deslizamento dos lides e forma livre, sem se limitar ao limite de slides visiveis
        grabCursor: true, // altere o cursor nas areas de interação
        pagination: { // bullets da navegação (circulos que simbolizam em qual slide está)
            el: ".swiper-pagination", // torna visivel
            clickable: true,//possibilita a interação
        },
        navigation: { // logica para navegação atraves dos botões
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {//troca de slides automatica
            delay: 8000, // Tempo em milissegundos entre os slides
            disableOnInteraction: false, // Permite interação manual sem interromper a reprodução automática
        },
        breakpoints: { //defina em qual tamanho o numero dos slides visiveis deve ser alterado
            0: {
                slidesPerView: 1,
            },
            700: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
            1800: {
                slidesPerView: 4,
            },
        },
    });
});
