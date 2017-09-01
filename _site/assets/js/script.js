$(document).ready(function() {
	$('.sidebarBtn').click(function() {
		$('.sidebar').toggleClass('active');
		$('.sidebarBtn').toggleClass('toggle');
	})

	$(window).scroll(function() {
		if ($(this).scrollTop() > 150) {
			$('.scrollToTop').fadeIn();
			$('.sidebarBtn').fadeIn();

			if ($('#header-nav').hasClass('header-nav-min')) {
				$('#header-nav').addClass('header-nav-close');
				$('#header-nav').removeClass('header-nav-min');
			}
			
		} else {
			$('.scrollToTop').fadeOut();
			$('.sidebarBtn').fadeOut();
			if ($('#header-nav').hasClass('header-nav-close')) {
				$('#header-nav').addClass('header-nav-min');
				$('#header-nav').removeClass('header-nav-close');
			}
		}
	});

	$('.scrollToTop').click(function() {
		$('html, body').animate({scrollTop: 0}, 800);
		return false;
	});
});