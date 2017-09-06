

$(document).ready(function() {

	$('#toc ul li').css({'padding-left': '5px', 'background': 'none'});
	$('.sidebarBtn').click(function() {
		$('.sidebar').toggleClass('active');
		$('.sidebarBtn').toggleClass('toggle');
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.scrollToTop').fadeIn();

			if ($('#header-nav').hasClass('header-nav-min')) {
				$('#header-nav').addClass('header-nav-close');
				$('#header-nav').removeClass('header-nav-min');
			}
			if ($(window).width() > 767) {
				$('#toc').css({'position': 'fixed', 'top': '25px'}); 
			}
			
		} else {
			$('.scrollToTop').fadeOut();

			if ($('#header-nav').hasClass('header-nav-close')) {
				$('#header-nav').addClass('header-nav-min');
				$('#header-nav').removeClass('header-nav-close');
			}
			if ($(window).width() > 767) {
				$('#toc').css({'position': 'static', 'top': '0px'});
			}
			 
		}
	});


	$('.scrollToTop').click(function() {
		$('html, body').animate({scrollTop: 0}, 800);
		return false;
	});
});