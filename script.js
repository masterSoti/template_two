//regular Jquery
//the scroll functions
$(document).ready(
	function()
	{ 
		$('#home_img_one').click(
			function()
			{
				$('body, html').animate({scrollTop: '675px'}, 500);
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
				$('body, html').animate({scrollTop: '1150px'}, 500);
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
				$('body, html').animate({scrollTop: '1575px'}, 500);
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
				$('body, html').animate({scrollTop: '2200px'}, 500);
			}
		);
	}
);
//rslide jquery
$(function(){
	$(".rslides").responsiveSlides({
  		auto: true,             
  		speed: 500,           
  		timeout: 4000,          
  		pager: true  
	});
});
//regular Java script
