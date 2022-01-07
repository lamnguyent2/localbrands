
$('.slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	nextArrow: $('#Layer_about_next'),
	prevArrow: $('#Layer_about_prev'),
	pauseOnHover: true,
	// autoplay: true,
	// autoplaySpeed: 4000,
	centerMode: true,
	responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.slick_collaborations').slick({
	slidesToScroll: 1,
	infinite: true,
	variableWidth: true,
	pauseOnHover: true,
	autoplay: true,
	autoplaySpeed: 430
});


tlab = new TimelineMax({paused: true});


var arr_our_team_about = $('.name').toArray();
var arr_show_our_team_about = $('.show_content').toArray();
var i_about = 0;

$('.close').click(function(event) {
	i_about = 0;
	tlab.set('.bg_sp_content_our_team', {transformOrigin: "100% 100%"});
	tlab.to('.bg_sp_content_our_team', 0.5,  {scaleY: 1});
	tlab.to('.content_our_team', 1,  {scaleY: 0});
	tlab.to('.show_content', 0.2,{opacity: 0});
	tlab.to('.content_our_team', 0.5,  {height: 0});
});


for (let i = 0; i < arr_our_team_about.length; i++) {
	$(arr_our_team_about[i]).click(function(event) {
		if (i_about > 0) {
			tlab.set('.show_content', {opacity: 0}, 0);
			tlab.set('.bg_sp_content_our_team', {transformOrigin: "0% 0%"});
			tlab.to('.bg_sp_content_our_team', 1,  {scaleY: 1});
			tlab.set('.bg_sp_content_our_team', {transformOrigin: "100% 100%"});
			tlab.to('.bg_sp_content_our_team', 0.5,  {scaleY: 0});
			tlab.to($(arr_show_our_team_about[i]),0.3, {opacity: 1}, 1.2);
			tlab.play();
		}
		else if (i_about == 0) {
			$("html, body").animate({ scrollTop: $('.our_team_about').offset().top + 20}, 500);
			tlab.set('.show_content', {opacity: 0}, 0);
			tlab.to('.content_our_team', 0.5,  {height: "auto"});
			tlab.to('.content_our_team', 1,  {scaleY: 1});
			tlab.set('.bg_sp_content_our_team',  {transformOrigin: "100% 100%"});
			tlab.to('.bg_sp_content_our_team', 0.5,  {scaleY: 0});
			tlab.to($(arr_show_our_team_about[i]),0.3, {opacity: 1}, 1.8);
			tlab.play();
			i_about++;
		}
	});
}

tlab2 = new TimelineMax({paused: true});

tlab2.set('.header_about_background_1, .header_about_background_2', {y: 500}, 0);
tlab2.to('.bg_black_load', 0, {opacity: 0, visibility: "hidden"});
tlab2.to('.header_about_background_1', 1, {y: 0}, 1);
tlab2.to('.header_about_background_2', 1, {y: 0}, 1.4);

tlab2.to('.background_header_about > section', 1, {scaleY: 0}, 2.4);
tlab2.to('.background_header_about > article', 1, {scaleY: 0}, 3);


const arr_header_about_background_icon_1 = $('.header_about_background_icon_1 > section').toArray();

for (var i = 0; i < arr_header_about_background_icon_1.length; i++) {
	tlab2.from($(arr_header_about_background_icon_1[i]), random(1, 2), {
		opacity: 0,
		x: random(-1000, 1000),
		y: random(-1000, 1000),
		z: random(-1000, 1000),
		scale: .1,
		// yoyo: true,
	}, random(2, 3));
}

tlab2.set('.header_about_content > article, .header_about_content section', {y: 200, opacity: 0}, 0);

tlab2.to('.header_about_content > article', 1, {y: 0, opacity: 1}, 3.3);
tlab2.to('.header_about_content > section:nth-child(1)', 1, {y: 0, opacity: 1}, 3.5);
tlab2.to('.header_about_content > section:nth-child(2)', 1, {y: 0, opacity: 1}, 3.7);
tlab2.to('.header_about_content > section:nth-child(3)', 1, {y: 0, opacity: 1}, 3.9);
tlab2.to('.header_about_content > section:nth-child(4)', 1, {y: 0, opacity: 1}, 4.1);

	


tlab2.play();


// build tween
var tweenab = new TimelineMax()
.add([
	TweenMax.to('.header_about_content > article', 1, {y: -500, opacity: 0}),
	TweenMax.to('.header_about_content > section:nth-child(2)', 1, {y: -200, opacity: 0, delay: 0.4}),
	TweenMax.to('.header_about_content > section:nth-child(3)', 1, {y: -200, opacity: 0, delay: 0.6}),
	TweenMax.to('.header_about_content > section:nth-child(4)', 1, {y: -200, opacity: 0, delay: 0.8}),

	TweenMax.to($('.header_about_background_icon_1 > section:nth-child(1)'), random(1, 3), {
		opacity: 0, x: random(-1000, 1000),y: random(-1000, 1000),z: random(-1000, 1000),scale: .1,
	}, random(0, 2)),
	TweenMax.to($('.header_about_background_icon_1 > section:nth-child(2)'), random(1, 3), {
		opacity: 0, x: random(-1000, 1000),y: random(-1000, 1000),z: random(-1000, 1000),scale: .1,
	}, random(0, 2)),
	TweenMax.to($('.header_about_background_icon_1 > section:nth-child(3)'), random(1, 3), {
		opacity: 0, x: random(-1000, 1000),y: random(-1000, 1000),z: random(-1000, 1000),scale: .1,
	}, random(0, 2)),
	TweenMax.to($('.header_about_background_icon_1 > section:nth-child(4)'), random(1, 3), {
		opacity: 0, x: random(-1000, 1000),y: random(-1000, 1000),z: random(-1000, 1000),scale: .1,
	}, random(0, 2)),
	TweenMax.to($('.header_about_background_icon_1 > section:nth-child(5)'), random(1, 3), {
		opacity: 0, x: random(-1000, 1000),y: random(-1000, 1000),z: random(-1000, 1000),scale: .1,
	}, random(0, 2)),
	TweenMax.to($('.header_about_background_icon_1 > section:nth-child(6)'), random(1, 3), {
		opacity: 0, x: random(-1000, 1000),y: random(-1000, 1000),z: random(-1000, 1000),scale: .1,
	}, random(0, 2)),
	TweenMax.to($('.header_about_background_icon_1 > section:nth-child(7)'), random(1, 3), {
		opacity: 0, x: random(-1000, 1000),y: random(-1000, 1000),z: random(-1000, 1000),scale: .1,
	}, random(0, 2)),
	TweenMax.to($('.header_about_background_icon_1 > section:nth-child(8)'), random(1, 3), {
		opacity: 0, x: random(-1000, 1000),y: random(-1000, 1000),z: random(-1000, 1000),scale: .1,
	}, random(0, 2)),
	TweenMax.to($('.header_about_background_icon_1 > section:nth-child(9)'), random(1, 3), {
		opacity: 0, x: random(-1000, 1000),y: random(-1000, 1000),z: random(-1000, 1000),scale: .1,
	}, random(0, 2)),
	TweenMax.to($('.header_about_background_icon_1 > section:nth-child(10)'), random(1, 3), {
		opacity: 0, x: random(-1000, 1000),y: random(-1000, 1000),z: random(-1000, 1000),scale: .1,
	}, random(0, 2)),
	TweenMax.to($('.header_about_background_icon_1 > section:nth-child(11)'), random(1, 3), {
		opacity: 0, x: random(-1000, 1000),y: random(-1000, 1000),z: random(-1000, 1000),scale: .1,
	}, random(0, 2)),
	TweenMax.to($('.header_about_background_icon_1 > section:nth-child(12)'), random(1, 3), {
		opacity: 0, x: random(-1000, 1000),y: random(-1000, 1000),z: random(-1000, 1000),scale: .1,
	}, random(0, 2)),

	]);
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
	.setTween(tweenab)
	.addTo(controller);


var tweenab2 = new TimelineMax()
.add([TweenMax.to('.header_about_background_1', {y: -100})]);	
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 150})
	.setTween(tweenab2)
	.addTo(controller);

var tweenab3 = new TimelineMax()
.add([
		TweenMax.from('.content_my_project_about > h2', {x: -500}),
		TweenMax.from('.circle_my_project_about', {scale: 0}),
		TweenMax.from('.circle_right_my_project_about', {scale: 0, y: -350, x: -700}),
	]);	
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 500})
	.setTween(tweenab3)
	.addTo(controller);


var tweenab4 = new TimelineMax()
.add([
		TweenMax.from('.content_my_project_about ul li:nth-child(1)', 0.7, {x: -500, opacity: 0}),
		TweenMax.from('.content_my_project_about ul li:nth-child(2)', 0.7, {x: -500, opacity: 0, delay: 0.3}),
		TweenMax.from('.content_my_project_about ul li:nth-child(3)', 0.7, {x: -500, opacity: 0, delay: 0.6}),
		TweenMax.from('.content_my_project_about ul li:nth-child(4)', 0.7, {x: -500, opacity: 0, delay: 0.9}),
		TweenMax.from('.content_my_project_about ul li:nth-child(5)', 0.7, {x: -500, opacity: 0, delay: 1.2}),
		TweenMax.from('.content_my_project_about ul li:nth-child(6)', 0.7, {x: -500, opacity: 0, delay: 1.5}),
		TweenMax.from('.content_my_project_about ul li:nth-child(7)', 0.7, {x: -500, opacity: 0, delay: 1.8}),
		TweenMax.from('.content_my_project_about ul li:nth-child(8)', 0.7, {x: -500, opacity: 0, delay: 2.1}),
	]);	
var scene = new ScrollMagic.Scene({triggerElement: "#trigger2"})
	.setTween(tweenab4)
	.addTo(controller);




var tweenab5 = new TimelineMax()
.add([
		TweenMax.to('.content_my_project_about ul li:nth-child(1)', 0.7, {x: 500, opacity: 0}),
		TweenMax.to('.content_my_project_about ul li:nth-child(2)', 0.7, {x: 500, opacity: 0, delay: 0.3}),
		TweenMax.to('.content_my_project_about ul li:nth-child(3)', 0.7, {x: 500, opacity: 0, delay: 0.6}),
		TweenMax.to('.content_my_project_about ul li:nth-child(4)', 0.7, {x: 500, opacity: 0, delay: 0.9}),
		TweenMax.to('.content_my_project_about ul li:nth-child(5)', 0.7, {x: 500, opacity: 0, delay: 1.2}),
		TweenMax.to('.content_my_project_about ul li:nth-child(6)', 0.7, {x: 500, opacity: 0, delay: 1.5}),
		TweenMax.to('.content_my_project_about ul li:nth-child(7)', 0.7, {x: 500, opacity: 0, delay: 1.8}),
		TweenMax.to('.content_my_project_about ul li:nth-child(8)', 0.7, {x: 500, opacity: 0, delay: 2.1}),
	]);	
var scene = new ScrollMagic.Scene({triggerElement: "#trigger3"})
	.setTween(tweenab5)
	.addTo(controller);

var tweenab6 = new TimelineMax()
.add([
		TweenMax.to('.content_my_project_about > h2', {x: 1500}),
		TweenMax.to('.circle_my_project_about', {scale: 0, y: -1000, x: -200}),
		TweenMax.to('.circle_right_my_project_about', {scale: 0, x: 100}),
		TweenMax.from('.our_team_about > h2', {x: -500}),
		TweenMax.from('.our_team_about_content', {x: "100%"}),
		TweenMax.from('.btn_next_prev_about', {x: 500}),
	]);	
var scene = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 500})
	.setTween(tweenab6)
	.addTo(controller);

var tweenab7 = new TimelineMax()
.add([
		TweenMax.to('.our_team_about_content', {x: "-110%"}),
		TweenMax.from('.collaborations > h2', {x: "-100%"}),
		TweenMax.from('.about_go_contact > h2', {x: "100%"}),
	]);	
var scene = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: 200})
	.setTween(tweenab7)
	.addTo(controller);


var tweenab8 = new TimelineMax()
.add([
		TweenMax.from('.about_go_contact ul li:nth-child(1)', 0.7, {y: 500, opacity: 0}),
		TweenMax.from('.about_go_contact ul li:nth-child(2)', 0.7, {y: 500, opacity: 0, delay: 0.3}),
		TweenMax.from('.about_go_contact ul li:nth-child(3)', 0.7, {y: 500, opacity: 0, delay: 0.6}),
		TweenMax.from('.about_go_contact ul li:nth-child(4)', 0.7, {y: 500, opacity: 0, delay: 0.9}),
		TweenMax.from('.about_go_contact ul li:nth-child(5)', 0.7, {y: 500, opacity: 0, delay: 1.2}),
	]);	
var scene = new ScrollMagic.Scene({triggerElement: "#trigger5"})
	.setTween(tweenab8)
	.addTo(controller);


var content_my_project_about = $('.hover_content_my_project_about').toArray();
var data_content_my_project_about ="";

for (let i = 0; i < content_my_project_about.length; i++) {
	$(content_my_project_about[i]).hover(function() {
		data_content_my_project_about = $(content_my_project_about[i]).attr('data-project_about');
		$('.circle_right_my_project_about img').attr({src: data_content_my_project_about});
	}, function() {
		data_content_my_project_about = $(content_my_project_about[1]).attr('data-project_about');
		$('.circle_right_my_project_about img').attr({src: data_content_my_project_about});
	});
}


let iconBackgroundHeaderArr = document.querySelectorAll(".header_about_background_icon_1 section");
let prevAboutX = 0;
let prevAboutY = 0;
let moveXAmount = 0;
let moveYAmount = 0;
document.addEventListener("mousemove", function(e){
	mousePos(e);
});
function mousePos(e){
	moveXAmount = e.pageX - prevAboutX;
	moveYAmount = e.pageY - prevAboutY;

	moveAboutImg(moveXAmount, moveYAmount);

	prevAboutX = e.pageX;
	prevAboutY = e.pageY;
}
function moveAboutImg(xAmount, yAmount){
	iconBackgroundHeaderArr.forEach(function(value){
		let movementStrength = 5 + (Math.random() *15);
		value.style.left = (value.offsetLeft) - (xAmount/movementStrength) + "px";
		value.style.top = (value.offsetTop) - (yAmount/movementStrength) + "px";
	})
}