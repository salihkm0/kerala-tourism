$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top-108
                    	}, 1000);
                    	return false;
                	}
            	}
        	});
			$('#content-carousel').click(function() {
			$('.bg-transform').toggleClass('bg-transform-active');
		});
    });	
	$(document).scroll(function () {
        var $nav = $(".header");
        $nav.toggleClass('header-bg', $(this).scrollTop() > $nav.height());
    });	