var typed = new Typed('.text', {
    strings: [' frontend developer', '&amp; web developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


function revealFunction(){

       window.sr = ScrollReveal({ duration:1350, distance:'50px', easing:'ease-out'});

       sr.reveal('.reveal-left', {origin:'left', reset:true});
       sr.reveal('.reveal-right', {origin:'right', reset:true});
       sr.reveal('.reveal-top', {origin:'top', reset:true});
       sr.reveal('.reveal-bottom', {origin:'bottom', reset:true});

       sr.reveal('.reveal-reset-true', {origin:'bottom', reset:true});
       sr.reveal('.reveal-rotate', {origin:'bottom', rotate:{x:1000, z:1000}, reset:true});

       sr.reveal('.reveal-bottom-reset', {origin:'bottom' , reset:true})
}

window.addEventListener('load', () => {
      
    revealFunction();
});



    