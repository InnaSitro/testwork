jQuery(document).ready(function($){
	// scroll to top
	$('.btn__to-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

	//modal
    $('[data-modal]').click(function () {
		$('.footer__modal').toggleClass('active');
    });

    // hide  contact-panel in footer
    $(window).scroll(function () {
		var st = $(window).scrollTop();
		var mainH = $(document).height() - $('footer.footer').height();
		if(st > mainH){
			$('.contact-panel').fadeOut();
		} else {
			$('.contact-panel').fadeIn();
		}
	});

	$(document).ready(function(){
    $(function(){
        $('#callback-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                tel: {
                    required: true,
                }
            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "You should enter at least 2 symbols"
                },
                tel: {
                    required: "This field is required",
                },
            }
        });
    });
});
});