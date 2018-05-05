$(document).ready(function(){
    var ScreenWidth = screen.width;
    var direction = 'vertical'; 
    var spiperBTxt = '<i class="swiper-pagination-bullet__text">Process Name</i>'; 
    if(ScreenWidth < 768 ){ 
        direction = 'horizontal';
        spiperBTxt = '';
    } else{ 
        direction = 'vertical'; 
        spiperBTxt = '<i class="swiper-pagination-bullet__text">Process Name</i>';
    }

    var swiper = new Swiper('.swiper-container', {
        //pagination: '.swiper-pagination',
        pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	        renderBullet: function (index, className) {
	        	var prenum = '';
	        	if(index < 9){
	        		prenum = '0';
	        	} else{
	        		prenum = '';
	        	}
	        	return '<span class="' + className + '">' + prenum + (index + 1) + spiperBTxt + '</span>';
	        },
	    },
	    direction: direction,
	    loop: true,
        effect: 'fade',
        speed: 0,
        //slidesPerView: 3,
        //slidesPerView: 'auto',
        //initialSlide: 1,
        //paginationClickable: true,
        //freeMode: true,
        //centeredSlides: ismob,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
	    },
    });
});