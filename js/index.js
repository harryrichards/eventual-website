
// when the user clicks sign up
// scroll to the form 

$(".sign-up").click(function() {
    $('html,body').animate({
        scrollTop: $(".enquiry").offset().top},
        1500);
});


window.sr = ScrollReveal();

// when scrolling to the numbers section
// reveal the icons from the top down
sr.reveal('.numbers-icon', {origin: 'top', duration: 1500, delay:150});
// when scrolling to the benefits section
// reveal the benefits from the bottom up
sr.reveal('.benefit-block', {origin: 'bottom', duration: 1500, delay: 150} );













// Screenshots

	// When the user scrolls to the screenshot section
		// play first video

	// when the user clicks on the number 2
		// reveal 2nd video and 
		// hide previous video
		// and play the video

	// when the user clicks on the number 3
		// reveal the 3rd video
		// hide previous video
		// and play the new video


