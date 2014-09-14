//regular Jquery
//the scroll functions
$(document).ready(
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
//rslide jquery
$(function(){
	$(".rslides").responsiveSlides({
  		auto: true,             
  		speed: 500,           
  		timeout: 4000,          
  		pager: true,
  		nav:true  
	});
});
//regular Java script
