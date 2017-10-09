addEventListener('mousemove', function(event) {
	var trail = document.createElement('div');
	trail.className = 'trail';
	trail.style.left = event.pageX + 'px';
	trail.style.top = event.pageY  + 'px';
	console.log(event.pageX+ ","+event.pageY);
	document.body.appendChild(trail);
})

// Here is official code
//
// var dots = [];
// for (var i = 0; i < 12; i++) {
// 	var node = document.createElement("div");
// 	node.className = "trail";
// 	document.body.appendChild(node);
// 	dots.push(node);
// }
// var currentDot = 0;
//
// addEventListener("mousemove", function(event) {
// 	var dot = dots[currentDot];
// 	dot.style.left = (event.pageX - 3) + "px";
// 	dot.style.top = (event.pageY - 3) + "px";
// 	currentDot = (currentDot + 1) % dots.length;
// });
