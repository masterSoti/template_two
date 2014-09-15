//regular Jquery
$(document).ready(
	function(){
		$('.rslides ul img').clic(
			function(){
				var id = $(this).attr('id').split('-')[1];
				console.log(id);
				var distance = $('.home-'+ id).offset();
				$('body, html').animate({scrollTop: distance.height}, 500);
			}
		);
	}
);
//the scroll functions
/*$(document).ready(
	function()
	{ 
		$('#home_img_one').click(
			function()
			{
				$('body, html').animate({scrollTop: '725px'}, 500);
			}
		);
	}
);
$(document).ready(
	function()
	{ 
		$('#home_img_two').click(
			function()
			{
				$('body, html').animate({scrollTop: '1200px'}, 500);
			}
		);
	}
);
$(document).ready(
	function()
	{ 
		$('#home_img_three').click(
			function()
			{
				$('body, html').animate({scrollTop: '1625px'}, 500);
			}
		);
	}
);
$(document).ready(
	function()
	{ 
		$('#home_img_four').click(
			function()
			{
				$('body, html').animate({scrollTop: '2250px'}, 500);
			}
		);
	}
);
*/
//still have to make the pic like the one on google web store
//rslide jquery
$(function(){
	$(".rslides").responsiveSlides({
  		auto: true,             
  		speed: 500,           
  		timeout: 4000,          
  		nav:true  
	});
});

//regular Java script
