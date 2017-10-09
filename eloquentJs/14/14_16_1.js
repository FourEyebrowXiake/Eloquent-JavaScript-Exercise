"use strict";

var field = document.querySelector("input");

field.addEventListener('keydown',function(event) {
	if (event.keyCode == "Q".charCodeAt(0) ||
        event.keyCode == "W".charCodeAt(0) ||
        event.keyCode == "X".charCodeAt(0)) {
				console.log(String.fromCharCode(event.keyCode));
      	event.preventDefault();
			}
});
