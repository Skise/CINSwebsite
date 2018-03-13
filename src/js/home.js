/*global $*/
"use strict";
var win = $(window);
$(document).ready(function () {
    var portfolio = $("#portfolio"),
		statistics = $("#statistics"),
		flag1 = 0,
		flag2 = 0,
		counter1 = $("#counter-1"),
		counter2 = $("#counter-2"),
		counter3 = $("#counter-3"),
		counter4 = $("#counter-4"),
		chooseLeft = $("#left"),
		chooseRight = $("#right");
	
	
    // home slider
    var homeSlider = new Swiper('#home_slider', {
        speed: 1000,
        loop: true,
        autoplay: 5000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        effect: 'slide',
        autoplayDisableOnInteraction: false
    });
    
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
    
    // comments slider
    var commentsSlider = new Swiper('#comments_slider', {
        speed: 1000,
        loop: true,
        autoplay: 4000,
        autoplayDisableOnInteraction: false,
        slidesPerView: 3,
        spaceBetween: 40,
		breakpoints: {
			991: {
				slidesPerView: 2
			},
			730: {
				slidesPerView: 1
			}
			
		}
    });
    
    // blog slider
    var blogSlider = new Swiper('#blog_slider', {
        speed: 1000,
        loop: true,
        autoplay: 4000,
        autoplayDisableOnInteraction: false,
        slidesPerView: 3,
        spaceBetween: 40,
		breakpoints: {
			991: {
				slidesPerView: 2
			},
			730: {
				slidesPerView: 1
			}
			
		}
    });
    
	// sponsors slider
    var sponsorSlider = new Swiper('#sponsor_slider', {
        speed: 1000,
        loop: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        slidesPerView: 5,
        spaceBetween: 20,
		breakpoints: {
			1199: {
				slidesPerView: 4
			},
			991: {
				slidesPerView: 3
			},
			680: {
				slidesPerView: 2
			},
			450: {
				slidesPerView: 1
			}
		}
    });
	
    // trigger mixitup library
    portfolio.mixItUp({
        activeClass: 'on'
    });
    
    // magnific popup trigger
    
    $('.popup-link').magnificPopup({
        type: 'inline'
    });
    
    // left choose us section parts same height
    chooseLeft.height(chooseRight.height());
	
	// give form and map same height
    $("#map-o").height($("#form-left").height());
	
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
	
	// window on resize functions
	win.on("resize", function () {
		// left choose us section parts same height
		chooseLeft.height(chooseRight.height());
	});
});