// Builds up an array with global variable names, like
// 'alert', 'document', and 'scrollTo'
var terms = [];
for (var name in window)
	terms.push(name);

// Your code here.
var field = document.querySelector("#field");
var sug = document.querySelector("#suggestions");

field.addEventListener("input",function(){
	var content = field.value;
	var arr = getSimilarWord(content);
	sug.textContent = "";
	addSug(arr);
})

function getSimilarWord(value) {
	var arr = terms.filter(function(item){
		return item.indexOf(value) == 0;
	});
	return arr;
}

function addSug(arry) {
	arry.slice(0,6).forEach(function(item) {
		var node = document.createElement('div');
		node.textContent = item;
		node.addEventListener("click", function() {
			field.value = item;
			sug.textContent = "";
		})
		sug.appendChild(node);
	})
}
