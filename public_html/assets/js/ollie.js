/*!
=========================================================
* Ollie Landing Page - JavaScript personalizado
* Autor original: DevCRUD (https://devcrud.com)
=========================================================
*/
$('#img-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
});

$(document).ready(function () {

    // Smooth scroll al hacer clic en enlaces .nav-link (misma página)
    $(".navbar .nav-link").on('click', function (event) {
        if (this.hash !== "") {
            // Verifica si el enlace apunta a otra página o la misma
            var targetPage = this.pathname.replace(/^\//, '');  // ruta del enlace sin barra inicial
            var currentPage = window.location.pathname.replace(/^\//, '');  // ruta actual sin barra inicial

            if (targetPage === currentPage) {
                // Si es la misma página, hacer scroll animado
                event.preventDefault();

                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 700, function () {
                    window.location.hash = hash;
                });
            } else {
                // Si es otra página, dejar que el navegador navegue normalmente
                // (La animación ocurrirá al cargar la nueva página gracias al siguiente bloque)
            }
        }
    });

    // Smooth scroll al cargar la página si hay un hash en la URL (para cuando venimos de otro archivo HTML)
    if (window.location.hash) {
        var hash = window.location.hash;

        // Esperar un poco a que todo cargue para animar el scroll
        setTimeout(function () {
            // Verifica que el elemento exista en la página
            if ($(hash).length) {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 700);
            }
        }, 200);
    }
$('#owl-portfolio').owlCarousel({
    margin: 30,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: false
        }
    }
});




    // Owl Carousel para testimonios
    $('#owl-testmonial').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        nav: true,
        dots: false
    });

});
