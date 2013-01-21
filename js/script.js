/* Author: David Velásquez | zero.blend@gmail.com

*/
$(window).load(function() {
	$('a').smoothScroll();
	$('div.top').click(function() {
		  $.smoothScroll({
		    
		    scrollTarget: '#header-container'
		  });
		  return false;
		});
	$('.flexslider').flexslider();
	
	if (jQuery.browser.mobile == true){

		setTimeout(function() { window.scrollTo(0, 1); }, 1);		
		
		$('#qr').css('display', 'none');
	}
	
	$('.top').qtip({
	   content: 'Subir',
	   show: 'mouseover',
	   hide: 'mouseout',
	   position: {
		   corner: {
			   target: 'leftMiddle',
			   tooltip: 'rightMiddle'
			 },
			 adjust: { x: -10, y: 0 }
	   },
		style: {
			padding: 0,
			width: 60,
			textAlign: 'center',
			border: {
		         width: 0,
		         radius: 2,
		         color: '#ff7301'
		    },
		},
		show: { effect: { length: 630 } },
		
	})
	
	$(".item a.gallery").photoSwipe({ enableMouseWheel: false , enableKeyboard: false });
	
});