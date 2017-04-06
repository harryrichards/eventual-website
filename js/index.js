// when the user clicks sign up
// scroll to the form 
$('.sign-up').click(function() {
$('html,body').animate({scrollTop: $('.enquiry').offset().top}, 2000);});


// when the user clicks play button
// scroll to the screenshots video 
$('.play-now').click(function() {
$('html,body').animate({scrollTop: $('.screenshots').offset().top}, 1200);});


// when the user is in view of the screenshots section
// play the video
$(window).scroll(function() {
$('video').each(function(){
    if ($('video').is(":in-viewport")) {
        $('video')[0].play();
    } 
    else {
        $('video')[0].pause();
    }
})
});

window.sr = ScrollReveal();
// when scrolling over the screenshots section
// reveal the iphone
sr.reveal('.bubble-icon1', {origin: 'left', duration: 2500, delay:150});

// when scrolling over the screenshots section
// reveal the iphone
sr.reveal('.bubble-icon2', {origin: 'right', duration: 2500, delay:150});

// when scrolling over the plus section
// reveal the plus
sr.reveal('.plus-icon', {origin: 'top', duration: 2500, delay:150});

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





