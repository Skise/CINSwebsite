/*global $*/
"use strict";
$(document).ready(function () {
	var counter1 = $("#counter-1"),
		counter2 = $("#counter-2"),
		counter3 = $("#counter-3"),
		counter4 = $("#counter-4"),
		statistics = $("#statistics"),
		flag1 = 0,
		win = $(window);
	
	// team slider
    var teamSlider = new Swiper('#team_slider', {
        speed: 1000,
        loop: true,
        autoplay: 4000,
        autoplayDisableOnInteraction: false,
        slidesPerView: 4,
        spaceBetween: 15,
		breakpoints: {
			991: {
				slidesPerView: 3
			},
			730: {
				slidesPerView: 2
			},
			420: {
				slidesPerView: 1
			}
			
		}
    });
	
	// window on scroll functions 
	win.on('scroll', function () {
		
		// counting section
		if (win.scrollTop() >= statistics.offset().top - 200 && flag1 === 0) {
			flag1 = 1;
			
			//counter 1 
			counter1.countTo({
                from: 950,
                to: 1450,
                speed: 4000
            });
			
			//counter 2
			counter2.countTo({
                from: 25600,
                to: 25950,
                speed: 4000
            });
			
			//counter 3
			counter3.countTo({
                from: 260,
                to: 700,
                speed: 4000
            });
			
			//counter 4
			counter4.countTo({
                from: 1950,
                to: 2250,
                speed: 4000
            });
		}
	});
});