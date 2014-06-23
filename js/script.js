$(document).ready(function () {
	$('#fullpage').fullpage({touchSensitivity: 3, scrollOverflow: true, anchors: ['home', 'about', 'contact'], onLeave: function(index, direction){
			$('#menu').removeClass('open');
			$('#menu-toggle').removeClass('open');
        }});
	$('#menu-toggle').click(function(){
		if($('#menu').hasClass('open')){
			$('#menu').removeClass('open');
			$('#menu-toggle').removeClass('open');
		}else{
			$('#menu').addClass('open');
			$('#menu-toggle').addClass('open');
		}
	});
	setTimeout(function() {
		$('.splash .container').slideDown({duration: 900, easing: 'easeOutBounce'}).removeClass('hidden');
	}, 200);
	setTimeout(function() {
		$('.container .down-arrow').fadeIn(400).removeClass('hidden');
	}, 1300);
});