var button = document.getElementById("#button");
var output = document.getElementById("#output");
var code = document.getElementById("#code");
button.addEventListener("click", function() {
	var result = run(code.value)();
	try {
		output.innerText = String(result);
	}catch(e) {
		outputNode.innerText = "Error: " + e;
	}
})

function run(content) {
	var fun = new Function(content);
	return fun;
}
