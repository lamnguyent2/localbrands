
//SVG PAIN
gsap.registerPlugin(MotionPathPlugin);
gsap.set(".ball", {xPercent: -50, yPercent: -50, transformOrigin: "50% 50%"});

var Elastic = 'elastic.out(2.5, 1)';

var action = gsap.timeline({defaults:{ease:"none"}})

	.to(".ball01", {autoAlpha:1, duration:0.01})
	.from(".theGreenLine", {drawSVG:0, duration:1},0)
	.to(".ball01", {duration:1,  motionPath:{path: ".theGreenLine"}},0)

	.to(".text01", {autoAlpha:1, scale:2, transformOrigin:'center', ease:Elastic, duration:0.15},0) // start = scene progress
	.to(".text02", {autoAlpha:1, scale:2, transformOrigin:'center', ease:Elastic, duration:0.15},0.10)
	.to(".text03", {autoAlpha:1, scale:2, transformOrigin:'center', ease:Elastic, duration:0.15},0.25)
	.to(".text04", {autoAlpha:1, scale:2, transformOrigin:'center', ease:Elastic, duration:0.15},0.39)
	.to(".text05", {autoAlpha:1, scale:2, transformOrigin:'center', ease:Elastic, duration:0.15},0.53)
	.to(".text06", {autoAlpha:1, scale:2, transformOrigin:'center', ease:Elastic, duration:0.15},0.70)
	.to(".text07", {autoAlpha:1, scale:2, transformOrigin:'center', ease:Elastic, duration:0.15},0.80)
	.to(".text08", {autoAlpha:1, scale:2, transformOrigin:'center', ease:Elastic, duration:0.15},0.93)

	.to(".img_svg_works_1", {autoAlpha:1, scaleY:1, ease:Elastic, duration:0.15},0) // start = scene progress
	.to(".img_svg_works_2", {autoAlpha:1, scaleY:1, ease:Elastic, duration:0.15},0.10)
	.to(".img_svg_works_3", {autoAlpha:1, scaleY:1, ease:Elastic, duration:0.15},0.25)
	.to(".img_svg_works_4", {autoAlpha:1, scaleY:1, ease:Elastic, duration:0.15},0.39)
	.to(".img_svg_works_5", {autoAlpha:1, scaleY:1, ease:Elastic, duration:0.15},0.53)
	.to(".img_svg_works_6", {autoAlpha:1, scaleY:1, ease:Elastic, duration:0.15},0.70)
	.to(".img_svg_works_7", {autoAlpha:1, scaleY:1, ease:Elastic, duration:0.15},0.80)
	.to(".img_svg_works_8", {autoAlpha:1, scaleY:1, ease:Elastic, duration:0.15},0.93)

	.to(".ball_works_1", {autoAlpha:1, stroke: "#7efff5", fill: "#000000", duration:0.05},0) // start = scene progress
	.to(".ball_works_2", {autoAlpha:1, stroke: "#7efff5", fill: "#3ed805", duration:0.05},0.10)
	.to(".ball_works_3", {autoAlpha:1, stroke: "#7efff5", fill: "#f1c40f", duration:0.05},0.25)
	.to(".ball_works_4", {autoAlpha:1, stroke: "#7efff5", fill: "#e74c3c", duration:0.05},0.39)
	.to(".ball_works_5", {autoAlpha:1, stroke: "#7efff5", fill: "#8e44ad", duration:0.05},0.53)
	.to(".ball_works_6", {autoAlpha:1, stroke: "#7efff5", fill: "#3498db", duration:0.05},0.70)
	.to(".ball_works_7", {autoAlpha:1, stroke: "#7efff5", fill: "#FC427B", duration:0.05},0.80)
	.to(".ball_works_8", {autoAlpha:1, stroke: "#7efff5", fill: "#55E6C1", duration:0.05},0.93)

	.to(".theGreenLine", {autoAlpha:1, stroke: "#000000", duration:0.05},0) // start = scene progress
	.to(".theGreenLine", {autoAlpha:1, stroke: "#3ed805", duration:0.05},0.10)
	.to(".theGreenLine", {autoAlpha:1, stroke: "#f1c40f", duration:0.05},0.25)
	.to(".theGreenLine", {autoAlpha:1, stroke: "#e74c3c", duration:0.05},0.39)
	.to(".theGreenLine", {autoAlpha:1, stroke: "#8e44ad", duration:0.05},0.53)
	.to(".theGreenLine", {autoAlpha:1, stroke: "#3498db", duration:0.05},0.70)
	.to(".theGreenLine", {autoAlpha:1, stroke: "#FC427B", duration:0.05},0.80)
	.to(".theGreenLine", {autoAlpha:1, stroke: "#55E6C1", duration:0.05},0.93)




var sceneWorks = new ScrollMagic.Scene({
	triggerElement: "#svg",
	duration:1000,  
  triggerHook: 0.5, // mid of viewport
})
.setTween(action)
//.addIndicators()
.addTo(controller);

// ===== helper to time BALL, TEXT ================


