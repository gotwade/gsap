window.onload = function() {

MorphSVGPlugin.convertToPath("circle, ellipse");

var tl = new TimelineMax();

tl.to("#start-l-stem", .3, {morphSVG: "#end-l-stem"});
tl.to("#start-r-stem", .3, {morphSVG: "#end-r-stem"}, 0);

tl.to("#start-l-leaf1", .3, {morphSVG: "#end-l-leaf1"},.6);
tl.to("#start-r-leaf1", .3, {morphSVG: "#end-r-leaf1"},.6);

tl.to("#start-r-leaf2", .3, {morphSVG: "#end-r-leaf2"},.85);
tl.to("#start-r-leaf2", .3, {morphSVG: "#end-r-leaf2"},.85);

tl.to("#start-l-k1", .3, {morphSVG: "#end-l-k1"},.3);
tl.to("#start-r-k1", .3, {morphSVG: "#end-r-k1"},.3);

tl.to("#start-l-k2", .3, {morphSVG: "#end-l-k2"},.3);
tl.to("#start-r-k2", .3, {morphSVG: "#end-r-k2"},.3);

tl.to("#start-l-k3", .3, {morphSVG: "#end-l-k3"},.4);
tl.to("#start-r-k3", .3, {morphSVG: "#end-r-k3"},.4);

tl.to("#start-l-k4", .3, {morphSVG: "#end-l-k4"},.4);
tl.to("#start-r-k4", .3, {morphSVG: "#end-r-k4"},.4);

tl.to("#start-l-k5", .3, {morphSVG: "#end-l-k5"},.5);
tl.to("#start-r-k5", .3, {morphSVG: "#end-r-k5"},.5);

tl.to("#start-l-k6", .3, {morphSVG: "#end-l-k6"},.5);
tl.to("#start-r-k6", .3, {morphSVG: "#end-r-k6"},.5);

tl.to("#start-l-k7", .3, {morphSVG: "#end-l-k7"},.6);
tl.to("#start-r-k7", .3, {morphSVG: "#end-r-k7"},.6);

tl.to("#start-l-k8", .3, {morphSVG: "#end-l-k8"},.6);
tl.to("#start-r-k8", .3, {morphSVG: "#end-r-k8"},.6);

tl.to("#start-l-k9", .3, {morphSVG: "#end-l-k9"},.7);
tl.to("#start-r-k9", .3, {morphSVG: "#end-r-k9"},.7);

tl.to("#start-l-k10", .3, {morphSVG: "#end-l-k10"},.7);
tl.to("#start-r-k10", .3, {morphSVG: "#end-r-k10"},.7);

tl.to("#start-l-k11", .3, {morphSVG: "#end-l-k11"},.8);
tl.to("#start-r-k11", .3, {morphSVG: "#end-r-k11"},.8);

tl.to("#start-l-k12", .3, {morphSVG: "#end-l-k12"},.8);
tl.to("#start-r-k12", .3, {morphSVG: "#end-r-k12"},.8);

tl.to("#start-l-k13", .3, {morphSVG: "#end-l-k13"},.8);
tl.to("#start-r-k13", .3, {morphSVG: "#end-r-k13"},.8);

tl.to("#start-l-beard1", .3, {morphSVG: "#end-l-beard1"},.9);
tl.to("#start-r-beard1", .3, {morphSVG: "#end-r-beard1"},.9);

tl.to("#start-l-beard2", .3, {morphSVG: "#end-l-beard2"},1.1);
tl.to("#start-r-beard2", .3, {morphSVG: "#end-r-beard2"},1.1);

tl.to("#start-l-beard3", .3, {morphSVG: "#end-l-beard3"},.9);
tl.to("#start-r-beard3", .3, {morphSVG: "#end-r-beard3"},.9);


tl.set("#wheat-circle-r",{autoAlpha:1});
tl.set("#wheat-circle-l",{autoAlpha:1});

tl.from("#wheat-circle-r", 2, {drawSVG:"0", ease:Power1.easeInOut},1.5)
tl.from("#wheat-circle-l", 2, {drawSVG:"0", ease:Power1.easeInOut},1.5)

}
