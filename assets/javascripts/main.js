
var text = $(".split");

var split = new SplitText(text);


		$(window).on('load', function(event) {
		      $('body').removeClass('preloading');
		      // $('.load').delay(1000).fadeOut('fast');
		      $('.loader').delay(1000).fadeOut('fast');
		});

// init controller
var controller = new ScrollMagic.Controller();

function random(min, max){
	return (Math.random() * (max - min)) + min;
}

$(split.chars).each(function(i){
	TweenMax.from($(this), 3.5, {
		opacity: 0,
		x: random(-500, 500),
		y: random(-500, 500),
		z: random(-500, 500),
		scale: .1,
		yoyo: true,
	});
});


// slide image home
var i_home = 0,
	arr_slide_home = $('.content_slide_home ul li'),
	arr_title_home = $('.is_title_home'),
	arr_button_slide_home = $('.button_slide_home ul li'),
	arr_image_home = $('.is_image_home');
var number_slide_home = "";
var tl2 = new TimelineMax({paused: true});

$('#next_slide').click(function(event) {
	tl2.clear();
	if (i_home >= 4) {
		i_home = 0;
		number_slide_home = "0" + (i_home+1);
		$(arr_button_slide_home[i_home]).addClass('active_button_slide_home');
		$(arr_button_slide_home[4]).removeClass('active_button_slide_home');

		tl2.set($(arr_title_home[i_home]), {opacity: 0});
		tl2.set('.is_title_home > article', {transformOrigin: "0% 0%"});
		tl2.to('.is_title_home > article', 0.5, {scaleX: 1});
		tl2.to('.title_home', 0.5, {scaleX: 0.1});
		tl2.to($(arr_title_home[4]), 0,  {opacity: 0});	
		tl2.to($(arr_title_home[i_home]), 0,  {opacity: 1});
		tl2.to('.title_home', 0.5, {scaleX: 1});
		tl2.to('.is_title_home > article', 0.5, {scaleX: 0}, 1.2);
		

		tl2.set($(arr_slide_home[i_home]), {opacity: 0, scale: 0}, 0);
		tl2.to($(arr_slide_home[4]), 0.5,  {opacity: 0, scale: 0}, 0);	
		tl2.to($(arr_slide_home[i_home]), 0.5,  {opacity: 1, scale: 1}, 0.6);

		tl2.to('.link_share_home > article', 0.5, {x: 200}, 0.3);
		tl2.set('.link_share_home > article', {text: number_slide_home}, 0.85);
		tl2.to('.link_share_home > article', 0.5, {x: 0}, 0.9);

		tl2.set($(arr_image_home[i_home]), {opacity: 0}, 0);
		tl2.set('.is_image_home > section', {transformOrigin: "0% 0%"}, 0);
		tl2.to('.is_image_home > section', 0.5, {scaleY: 1}, 0.2);
		tl2.to($(arr_image_home[4]), 0,  {opacity: 0}, 0.7);	
		tl2.to($(arr_image_home[i_home]), 0,  {opacity: 1}, 0.7);
		tl2.set('.is_image_home > section', {transformOrigin: "100% 100%"}, 0.75);
		tl2.to('.is_image_home > section', 0.5, {scaleY: 0}, 0.8);

	}else{
		i_home++;
		number_slide_home = "0" + (i_home+1);
		$(arr_button_slide_home[i_home]).addClass('active_button_slide_home');
		$(arr_button_slide_home[i_home-1]).removeClass('active_button_slide_home');

		tl2.set($(arr_title_home[i_home]), {opacity: 0});
		tl2.set('.is_title_home > article', {transformOrigin: "0% 0%"});
		tl2.to('.is_title_home > article', 0.5, {scaleX: 1});
		tl2.to('.title_home', 0.5, {scaleX: 0.1});
		tl2.to($(arr_title_home[i_home-1]), 0,  {opacity: 0});	
		tl2.to($(arr_title_home[i_home]), 0,  {opacity: 1});
		tl2.to('.title_home', 0.5, {scaleX: 1});
		tl2.to('.is_title_home > article', 0.5, {scaleX: 0}, 1.2);
		
		tl2.set($(arr_slide_home[i_home]), {opacity: 0, scale: 0}, 0);
		tl2.to($(arr_slide_home[i_home-1]), 0.5,  {opacity: 0, scale: 0}, 0);	
		tl2.to($(arr_slide_home[i_home]), 0.5,  {opacity: 1, scale: 1}, 0.6);	

		tl2.to('.link_share_home > article', 0.5, {x: 200}, 0.3);
		tl2.set('.link_share_home > article', {text: number_slide_home}, 0.85);
		tl2.to('.link_share_home > article', 0.5, {x: 0}, 0.9);

		tl2.set($(arr_image_home[i_home]), {opacity: 0}, 0);
		tl2.set('.is_image_home > section', {transformOrigin: "0% 0%"}, 0);
		tl2.to('.is_image_home > section', 0.5, {scaleY: 1}, 0.2);
		tl2.to($(arr_image_home[i_home-1]), 0,  {opacity: 0}, 0.7);	
		tl2.to($(arr_image_home[i_home]), 0,  {opacity: 1}, 0.7);
		tl2.set('.is_image_home > section', {transformOrigin: "100% 100%"}, 0.75);
		tl2.to('.is_image_home > section', 0.5, {scaleY: 0}, 0.8);
	}
	
	tl2.play();

});
$('#prev_slide').click(function(event) {
	tl2.clear();
	if (i_home <= 0) {
		i_home = 4;
		number_slide_home = "0" + (i_home+1);
		$(arr_button_slide_home[i_home]).addClass('active_button_slide_home');
		$(arr_button_slide_home[0]).removeClass('active_button_slide_home');

		tl2.set($(arr_title_home[i_home]), {opacity: 0});
		tl2.set('.is_title_home > article', {transformOrigin: "0% 0%"});
		tl2.to('.is_title_home > article', 0.5, {scaleX: 1});
		tl2.to('.title_home', 0.5, {scaleX: 0.1});
		tl2.to($(arr_title_home[0]), 0,  {opacity: 0});	
		tl2.to($(arr_title_home[i_home]), 0,  {opacity: 1});
		tl2.to('.title_home', 0.5, {scaleX: 1});
		tl2.to('.is_title_home > article', 0.5, {scaleX: 0}, 1.2);

		tl2.set($(arr_slide_home[i_home]), {opacity: 0, scale: 0}, 0);
		tl2.to($(arr_slide_home[0]), 0.5,  {opacity: 0, scale: 0}, 0);	
		tl2.to($(arr_slide_home[i_home]), 0.5,  {opacity: 1, scale: 1}, 0.6);	

		tl2.to('.link_share_home > article', 0.5, {x: 200}, 0.3);
		tl2.set('.link_share_home > article', {text: number_slide_home}, 0.85);
		tl2.to('.link_share_home > article', 0.5, {x: 0}, 0.9);

		tl2.set($(arr_image_home[i_home]), {opacity: 0}, 0);
		tl2.set('.is_image_home > section', {transformOrigin: "0% 0%"}, 0);
		tl2.to('.is_image_home > section', 0.5, {scaleY: 1}, 0.2);
		tl2.to($(arr_image_home[0]), 0,  {opacity: 0}, 0.7);	
		tl2.to($(arr_image_home[i_home]), 0,  {opacity: 1}, 0.7);
		tl2.set('.is_image_home > section', {transformOrigin: "100% 100%"}, 0.75);
		tl2.to('.is_image_home > section', 0.5, {scaleY: 0}, 0.8);
	}else{
		i_home--;
		number_slide_home = "0" + (i_home+1);
		$(arr_button_slide_home[i_home]).addClass('active_button_slide_home');
		$(arr_button_slide_home[i_home+1]).removeClass('active_button_slide_home');

		tl2.set($(arr_title_home[i_home]), {opacity: 0});
		tl2.set('.is_title_home > article', {transformOrigin: "0% 0%"});
		tl2.to('.is_title_home > article', 0.5, {scaleX: 1});
		tl2.to('.title_home', 0.5, {scaleX: 0.1});
		tl2.to($(arr_title_home[i_home+1]), 0,  {opacity: 0});	
		tl2.to($(arr_title_home[i_home]), 0,  {opacity: 1});
		tl2.to('.title_home', 0.5, {scaleX: 1});
		tl2.to('.is_title_home > article', 0.5, {scaleX: 0}, 1.2);

		tl2.set($(arr_slide_home[i_home]), {opacity: 0, scale: 0}, 0);
		tl2.to($(arr_slide_home[i_home+1]), 0.5,  {opacity: 0, scale: 0}, 0);	
		tl2.to($(arr_slide_home[i_home]), 0.5,  {opacity: 1, scale: 1}, 0.6);	

		tl2.to('.link_share_home > article', 0.5, {x: 200}, 0.3);
		tl2.set('.link_share_home > article', {text: number_slide_home}, 0.85);
		tl2.to('.link_share_home > article', 0.5, {x: 0}, 0.9);

		tl2.set($(arr_image_home[i_home]), {opacity: 0}, 0);
		tl2.set('.is_image_home > section', {transformOrigin: "0% 0%"}, 0);
		tl2.to('.is_image_home > section', 0.5, {scaleY: 1}, 0.2);
		tl2.to($(arr_image_home[i_home+1]), 0,  {opacity: 0}, 0.7);	
		tl2.to($(arr_image_home[i_home]), 0,  {opacity: 1}, 0.7);
		tl2.set('.is_image_home > section', {transformOrigin: "100% 100%"}, 0.75);
		tl2.to('.is_image_home > section', 0.5, {scaleY: 0}, 0.8);
	}
	
	tl2.play();

});


//load home
tl1 = new TimelineMax({paused: true});

tl1.set('.hr_1', {scaleY: 0});
tl1.set('.hr_2, .hr_3', {scaleX: 0});
tl1.to('.hr_1', 1, {scaleY: 1}, 2);
tl1.to('.hr_2', 0.7, {scaleX: 1}, 2.1);
tl1.to('.hr_3', 0.7, {scaleX: 1}, 2.3);


tl1.set('.menu ul li, .search_login label, .search_login .logo', {y: -200}, 0);
tl1.to('.menu ul li:nth-child(1)', 0.7, {y: 0}, 3.5);
tl1.to('.menu ul li:nth-child(2)', 0.7, {y: 0}, 3.7);
tl1.to('.menu ul li:nth-child(3)', 0.7, {y: 0}, 3.9);
tl1.to('.menu ul li:nth-child(4)', 0.7, {y: 0}, 4.1);
tl1.to('.menu ul li:nth-child(5)', 0.7, {y: 0}, 4.3);
tl1.to('.search_login label', 0.7, {y: 0}, 4.5);
tl1.to('.search_login .logo', 0.7, {y: 0}, 4.7);

tl1.set('.button_slide_home ul li', {x: -100}, 0);
tl1.to('.button_slide_home ul li:nth-child(1)', 0.5,{x: 0}, 4.1);
tl1.to('.button_slide_home ul li:nth-child(2)', 0.5,{x: 0}, 4.3);
tl1.to('.button_slide_home ul li:nth-child(3)', 0.5,{x: 0}, 4.5);
tl1.to('.button_slide_home ul li:nth-child(4)', 0.5,{x: 0}, 4.7);
tl1.to('.button_slide_home ul li:nth-child(5)', 0.5,{x: 0}, 4.9);

tl1.set('.this_is_content_home > .title_home ul li div', {scaleX: 0}, 0);
tl1.to('.this_is_content_home > .title_home ul li div', 1, {scaleX: 1}, 3.2);
tl1.to('.this_is_content_home > .title_home ul li div > article', 1, {scaleX: 0}, 4.1);

tl1.set('.learn_more', {opacity: 0}, 0);
tl1.to('.learn_more', 0.5, {opacity: 1}, 3.5);

tl1.set('.image_slide_home ul li div', {scaleY: 0}, 0);
tl1.to('.image_slide_home ul li div', 1, {scaleY: 1}, 3.2);
tl1.to('.image_slide_home ul li div section', 1, {scaleY: 0}, 4.1);

tl1.set('.video_home', {scale: 0}, 0);
tl1.to('.video_home', 0.5, {scale: 1}, 3.5);

tl1.set('.link_share_home > article, .link_share_home > div ul li', {x: 200}, 0);
tl1.to('.link_share_home > article', 0.7, {x: 0}, 4.5);
tl1.to('.link_share_home > div ul li:nth-child(1)', 0.7, {x: 0}, 4.7);
tl1.to('.link_share_home > div ul li:nth-child(2)', 0.7, {x: 0}, 4.9);
tl1.to('.link_share_home > div ul li:nth-child(3)', 0.7, {x: 0}, 5.1);
tl1.to('.link_share_home > div ul li:nth-child(4)', 0.7, {x: 0}, 5.3);
tl1.play();





//Menu
$(document).ready(function($) {
	$('.button_menu_mobile').click(function(event) {
		$('.header').toggleClass('active_menu');
	});



	const data_menu = $('.get_data_menu').attr('data-menu');
	const array_active_menu = $('.arr_menu_active').toArray();
	
	for (var i = 0; i < array_active_menu.length; i++) {
		$(array_active_menu[i]).removeClass('active');
		if (data_menu == "home") {
			$('.home').addClass('active');
		}
		if (data_menu == "about") {
			$('.about').addClass('active');
		}
		if (data_menu == "services") {
			$('.services').addClass('active');
		}
		if (data_menu == "works") {
			$('.works').addClass('active');
		}
		if (data_menu == "contact") {
			$('.contact').addClass('active');
		}
	}




});
