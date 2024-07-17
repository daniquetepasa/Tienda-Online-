var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel: true
});

swiper.sliderMove = function(s, e){
    console.log(s);
};

function Navigate(indx){
    // Declaración de la variable i con let
    for (let i of document.querySelectorAll(".Links li")) {
        i.classList.remove("activateLink"); // Corregido el método classList.remove
    }
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activateLink");
    swiper.slideTo(indx, 1000, true);
}



