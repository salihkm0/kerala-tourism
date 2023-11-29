jQuery(document).ready(function ($) {

    detectHeight();

    $('#banner-carousel').owlCarousel({
			margin: 0,
			loop: true,
			autoWidth: false,
			items: 1,
			nav: true,
			dots: false,
			autoplay: true,
			autoplayTimeout: 8000,
			autoplayHoverPause: false,
			animateOut: 'fadeOut',
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		}
    );
	
	$('#content-carousel').owlCarousel({
			margin: 0,
			loop: true,
			autoWidth: false,
			items: 1,
			nav: true,
			dots: false,
			autoplay: false,
			autoplayTimeout: 8000,
			navSpeed:1250,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		}
    );
	
	$('#experience-carousel').owlCarousel({
			margin: 5,
			loop: true,
			autoWidth: false,
			items: 4,
			nav: true,
			dots: false,
			autoplay: true,
			autoplayTimeout: 8000,
			autoplaySpeed:1250,
			navSpeed:1250,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			responsive: {
		  0: {
			items: 2
		  },
		  480: {
			items: 2
		  },
		  768: {
			items: 2
		  },
		  1024: {
			items: 4
		  },
		  1366: {
			items: 4
		  }
		}
		}
    );

	$('#calendar-carousel').owlCarousel({
		margin: 0,
		nav: true,
		dots: false,
		loop: false,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsive: {
		  0: {
			items: 2
		  },
		  480: {
			items: 2
		  },
		  768: {
			items: 3
		  },
		  1024: {
			items: 4
		  },
		  1366: {
			items: 6
		  }
		}
	  });
	
	

});

function detectHeight() {	
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if (h >= 1080) {
        height = 1080;
    } else {
        height = h;
    }
	if(document.getElementById('slider1')){document.getElementById("slider1").style.height = height + "px";};
	if(document.getElementById('slider2')){document.getElementById("slider2").style.height = height + "px";};
	if(document.getElementById('slider3')){document.getElementById("slider3").style.height = height + "px";};
	if(document.getElementById('slider4')){document.getElementById("slider4").style.height = height + "px";};
	if(document.getElementById('slider5')){document.getElementById("slider5").style.height = height + "px";};
	if(document.getElementById('slider6')){document.getElementById("slider6").style.height = height + "px";};
	if(document.getElementById('slider7')){document.getElementById("slider7").style.height = height + "px";};
	if(document.getElementById('slider8')){document.getElementById("slider8").style.height = height + "px";};
	if(document.getElementById('slider_banner_ad')){document.getElementById("slider_banner_ad").style.height = height + "px";};
}