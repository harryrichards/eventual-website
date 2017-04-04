// when the user clicks sign up
// scroll to the form 
$('.sign-up').click(function() {
$('html,body').animate({scrollTop: $('.enquiry').offset().top}, 1500);});



// when the user is in view of the screenshots section
// play the video
$('.screenshots').each(function(){
    if ($('video').is(":in-viewport")) {
        $('video')[0].play();
    } 
    else {
        $('video')[0].pause();
    }
})


window.sr = ScrollReveal();
// when scrolling over the screenshots section
// reveal the iphone
sr.reveal('.phone-box', {origin: 'top', duration: 2500, delay:150});

// when scrolling over the numbers section
// reveal the icons from the top down
sr.reveal('.numbers-icon', {origin: 'top', duration: 2000, delay:150});

// when scrolling over the benefits section
// reveal the benefits from the bottom up
sr.reveal('.benefit-block', {origin: 'bottom', duration: 2000, delay: 150} );

// when scrolling over the enquiry section
// reveal the form from the bottom up
sr.reveal('.form-style', {origin: 'bottom', duration: 2500, delay: 150} );





