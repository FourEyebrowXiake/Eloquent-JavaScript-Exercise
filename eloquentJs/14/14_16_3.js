function asTabs(node) {
	var tabs = [];
	for(var i = 0; i < node.childNodes.length;i++) {
		var child = node.childNodes[i];
		if(child.nodeType == document.ELEMENT_NODE) {
			tabs.push(child);
		}
	}

	var tablist = document.createElement('div');
	tabs.forEach(function(item, i) {
		var button = document.createElement('button');
		button.textContent = item.getAttribute('data-tabname');
		button.addEventListener("click", function() { selectTab(i); });
		tablist.appendChild(button);
	})
	node.insertBefore(tablist,node.firstChild);

	function selectTab(n) {
		tabs.forEach(function(item, i) {
			if(i == n) {
				item.style.display = "";
			} else {
				item.style.display = "none";
			}
		});
		tablist.childNodes.forEach(function(item, i){
			if (i == n)
				 item.style.background = "violet";
			 else
				 item.style.background = "";
		})
	}
}
asTabs(document.querySelector("#wrapper"));
