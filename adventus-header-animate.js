window.onload = function() {

MorphSVGPlugin.convertToPath("circle, ellipse");

var tl = new TimelineMax();

tl.to("#start-stem", .3, {morphSVG: "#end-stem"});
tl.to("#start-leaf1", .3, {morphSVG: "#end-leaf1"},.6);
tl.to("#start-leaf2", .3, {morphSVG: "#end-leaf2"},.85);

tl.to("#start-k1", .3, {morphSVG: "#end-k1"},.3);
tl.to("#start-k2", .3, {morphSVG: "#end-k2"},.3);
tl.to("#start-k3", .3, {morphSVG: "#end-k3"},.4);
tl.to("#start-k4", .3, {morphSVG: "#end-k4"},.4);
tl.to("#start-k5", .3, {morphSVG: "#end-k5"},.5);
tl.to("#start-k6", .3, {morphSVG: "#end-k6"},.5);
tl.to("#start-k7", .3, {morphSVG: "#end-k7"},.6);
tl.to("#start-k8", .3, {morphSVG: "#end-k8"},.6);
tl.to("#start-k9", .3, {morphSVG: "#end-k9"},.7);
tl.to("#start-k10", .3, {morphSVG: "#end-k10"},.7);
tl.to("#start-k11", .3, {morphSVG: "#end-k11"},.8);
tl.to("#start-k12", .3, {morphSVG: "#end-k12"},.8);
tl.to("#start-k13", .3, {morphSVG: "#end-k13"},.8);
tl.to("#start-beard1", .3, {morphSVG: "#end-beard1"},.9);
tl.to("#start-beard2", .3, {morphSVG: "#end-beard2"},1.1);
tl.to("#start-beard3", .3, {morphSVG: "#end-beard3"},.9);

tl.set("#wheat-circle",{autoAlpha:1});
tl.from("#wheat-circle", 2, {drawSVG:"0", ease:Power1.easeInOut})

}
