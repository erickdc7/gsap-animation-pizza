document.addEventListener('DOMContentLoaded', () => {
    // Crea un controlador para manejar las escenas de ScrollMagic
    let controller = new ScrollMagic.Controller();

    // ----------------------------------
    // PRIMERA SECCIÓN: Animaciones de ingredientes (section 1)
    // ----------------------------------

    let timeline = new TimelineMax();
    // Animamos cada ingrediente de la pizza (desde fuera hacia su lugar original)
    timeline
        .from('.section_1_01', 4, { y: -100, x: -150, ease: Power3.easeInOut })
        .from('.section_1_02', 4, { y: -150, x: -250, ease: Power3.easeInOut }, '-=4')
        .from('.section_1_03', 4, { y: -80, x: -100, ease: Power3.easeInOut }, '-=4')
        .from('.section_1_04', 4, { y: -100, x: -150, ease: Power3.easeInOut }, '-=4')
        .from('.section_1_05', 4, { y: -80, x: -200, ease: Power3.easeInOut }, '-=4')
        .from('.section_1_06', 4, { y: -100, x: -350, ease: Power3.easeInOut }, '-=4')
        .from('.section_1_07', 4, { y: -50, x: -150, ease: Power3.easeInOut }, '-=4')
        .from('.section_1_08', 4, { y: 50, x: -350, ease: Power3.easeInOut }, '-=4')
        .from('.section_1_09', 4, { y: 100, x: -200, ease: Power3.easeInOut }, '-=4');

    // Crea una escena que activa el timeline anterior cuando se entra en la primera sección
    let scene = new ScrollMagic.Scene({
        triggerElement: '.first-section', // Elemento que dispara la animación
        duration: '100%', // La duración de la animación se extiende al 100% de la altura del viewport
        triggerHook: 0, // Empieza la animación cuando la sección llega al tope del viewport
        offset: '300' // Retraso adicional en píxeles
    })
        .setTween(timeline) // Asocia la animación
        .setPin('.first-section') // Fija la sección mientras se hace scroll
        .addTo(controller); // Añade la escena al controlador

    // ----------------------------------
    // SEGUNDA SECCIÓN: Oculta imágenes de la parte superior
    // ----------------------------------

    let timeline2 = new TimelineMax();
    timeline2
        .to('.top .image-container', 4, {
            height: 0 // Reduce su altura a 0 para ocultarlas
        });

    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.second-section',
        duration: '100%',
        triggerHook: 0,
        offset: '100'
    })
        .setTween(timeline2)
        .setPin('.second-section')
        .addTo(controller);

    // ----------------------------------
    // TERCERA SECCIÓN: Movimiento vertical tipo "cinta transportadora"
    // ----------------------------------

    let timeline3 = new TimelineMax();
    timeline3
        .to('.section_3_01', 4, { y: -250, ease: Power3.easeInOut })
        .to('.section_3_02', 4, { y: -200, ease: Power3.easeInOut }, '-=4')
        .to('.section_3_03', 4, { y: -100, ease: Power3.easeInOut }, '-=4')
        .to('.section_3_04', 4, { y: 0, ease: Power3.easeInOut }, '-=4')
        .to('.section_3_05', 4, { y: 150, ease: Power3.easeInOut }, '-=4')
        .to('.section_3_06', 4, { y: 250, ease: Power3.easeInOut }, '-=4');

    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.third-section',
        duration: '100%',
        triggerHook: 0,
        offset: '200'
    })
        .setTween(timeline3)
        .setPin('.third-section')
        .addTo(controller);

    // ----------------------------------
    // CUARTA SECCIÓN: Transiciones de opacidad (aparecer/desaparecer)
    // ----------------------------------

    let timeline4 = new TimelineMax();
    timeline4
        .to('.section_4_01', 4, { autoAlpha: 0 }) // Desaparece el primer elemento
        .from('.section_4_02', 4, { autoAlpha: 0 }, '-=4') // Aparece el segundo mientras el anterior desaparece
        .from('.section_4_03', 4, { autoAlpha: 0 }) // Aparece el siguiente
        .from('.section_4_04', 4, { autoAlpha: 0 }); // Y el último

    let scene4 = new ScrollMagic.Scene({
        triggerElement: '.forth-section',
        duration: '100%',
        triggerHook: 0,
        offset: '200'
    })
        .setTween(timeline4)
        .setPin('.forth-section')
        .addTo(controller);
});
