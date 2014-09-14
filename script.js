//rslides Jquery
$(".rslides").responsiveSlides({
	auto:true,
	speed:4000,
	pager:true,
	nav:true
});
//reegular Jquery
$(document).ready(
	function()
	{
		$('img').click(
			function()
			{
				$('body, html').animate({scrollTop: '800px'}, 900);
			}
		);
	}
);
//regular Javascript