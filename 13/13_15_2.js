function byTagName(node, tagName) {
	var arry = []
	tagName = tagName.toUpperCase();

	var find = function(node) {
		for (var i = 0; i < node.childNodes.length; i++) {
			var child = node.childNodes[i];
			if (child.nodeType == document.ELEMENT_NODE) {
				if (child.nodeName == tagName)
					arry.push(child);
				find(child);
			}
		}
	}

	find(node);
	return arry;
}
