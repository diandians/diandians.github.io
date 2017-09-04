$(document).ready(function() {

	$('.sidebarBtn').click(function() {
		$('.sidebar').toggleClass('active');
		$('.sidebarBtn').toggleClass('toggle');
	})

	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.scrollToTop').fadeIn();
			$('.sidebarBtn').fadeIn();

			if ($('#header-nav').hasClass('header-nav-min')) {
				$('#header-nav').addClass('header-nav-close');
				$('#header-nav').removeClass('header-nav-min');
			}

			$('#toc').css({'position': 'fixed', 'top': '15px'}); 
		} else {
			$('.scrollToTop').fadeOut();
			$('.sidebarBtn').fadeOut();
			if ($('#header-nav').hasClass('header-nav-close')) {
				$('#header-nav').addClass('header-nav-min');
				$('#header-nav').removeClass('header-nav-close');
			}
			$('#toc').css({'position': 'static', 'top': '0px'}); 
		}
	});

	$('.scrollToTop').click(function() {
		$('html, body').animate({scrollTop: 0}, 800);
		return false;
	});
});