function elt(type) {
	var node = document.createElement(type);
	for (var i =1; i<arguments.length; i++){
		var child =arguments[i];
		if(typeof child === 'string') {
			child = document.createTextNode(child);
		}
		node.appendChild(child);
	}
	return node;
}

document.getElementById("myquote").appendChild(
	elt("footer","--",
		elt("strong", "XiaKe"),
		"叫陆小凤"
));
