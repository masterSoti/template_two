//rslide jquery
$(function(){
	$(".rslides").responsiveSlides({
  		auto: true,
  		speed: 500,
  		timeout: 4000,
  		nav:true
	});
});
//the scroll function for slide Show
$(document).ready(
	function(){
		$('.rslides ul img').click(
			function(){
				var id = $(this).attr('id').split('-')[1];
				var distance = $('.home-'+ id).offset();
				$('html, body').animate({scrollTop: distance.top}, 1000);
			}
		);
	}
);
//the scrolltop button function
$(document).ready(
	function(){
		$('#scroll_up').click(
			function(){
				$('html, body').animate({scrollTop: '0px'}, 1000);
			}
		);
	}
);
//the scrolltop button to be fixed only after a certain offest function

//still have to make the pic like the one on google web store
$(document).ready(
	function()
	{
		$('.home_products').hover(
			function(){
				var id = $(this).attr('id').split('-')[1];
				$('.slideUp-'+id).fadeIn(300);
			},
			function(){
				var id = $(this).attr('id').split('-')[1];
				$('.slideUp-'+id).fadeOut(300);
			}
		);
	}
);
//regular Java script
