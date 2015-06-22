$(function(){

	var slider = $('#slider');
	var slides = slider.find('.slide');
	var scale = slider.find('.scale');
	var contofslider = $('.contofslider');
	var marginLeft = 0;
	var marginLeftFix = 0;
	var longg = slider.find('#long');
	var pageXX = 0;
	var mouseDown = false;
	var pageXXknown = false;
	var slideWidth = slides.eq(0).outerWidth(true);
	var before = slider.find('#before');
	var after = slider.find('#after');


	// slider.attr('draggable', 'false' );
	slider.find('img').attr('onmousedown', "return false" );
	slider.find('#before').attr('onmousedown', "return false" );
	slider.find('#after').attr('onmousedown', "return false" );
	// slider.attr('onselectstart', "return false" );


	slider.find('img').mousedown(function(e){
		mouseDown = true;
		if(!pageXXknown){
			pageXX = e.pageX;
			pageXXknown = false;

			contofslider.find('p').animate({opacity: .5}, 300);
			contofslider.find('h2').animate({opacity: .8}, 300);
		}
	});
	$(document).mouseup( function (){
		mouseDown = false;
		pageXXknown = false;

		if (marginLeft < -(slideWidth*slides.length-slideWidth*3) ){
			marginLeftFix = -(slideWidth*slides.length-slideWidth*3);
		} else if(marginLeft>0){
			marginLeftFix = 0;
		} else {
			marginLeftFix = Math.round( marginLeft / slideWidth ) * slideWidth;
		}
		longg.attr('style', 'transition: .4s; margin-left: '+marginLeftFix+'px');
		// contofslider.find('p').attr('style', 'transition: 1s; opacity: 1;');

		contofslider.find('p').animate({opacity: 1}, 600)
		contofslider.find('h2').animate({opacity: 1}, 600)
	});
	$(document).mousemove(function(e){
		if(mouseDown==true && pageXX!=0){
			marginLeft = marginLeftFix+(-pageXX + e.pageX); 
			longg.attr('style', 'margin-left: '+marginLeft+'px;');
			// contofslider.find('p').attr('style', 'transition: .3s; opacity: 0;');
			
		}
	});

var en = 0;

	before.click(function(){
		if (marginLeftFix!=0){



			marginLeft += slideWidth;
			marginLeftFix += slideWidth;
			longg.attr('style', 'transition: .9s; margin-left: '+marginLeftFix+'px');

			// contofslider.find('p').stop().animate({opacity: 0}, 500).animate({opacity: 1}, 500);
			
		}
	});
	after.click(function(){
		if(marginLeftFix != -(slideWidth*slides.length-slideWidth*3) ){	

		marginLeft -= slideWidth;
		marginLeftFix -= slideWidth;
		longg.attr('style', 'transition: .9s; margin-left: '+marginLeftFix+'px');
		// contofslider.find('p').stop(true).animate({opacity: 0}, 500).animate({opacity: 1}, 500);
	}
	})
})