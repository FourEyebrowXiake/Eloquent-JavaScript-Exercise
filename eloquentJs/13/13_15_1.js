//请把代码移到http://eloquentjavascript.net/code/#13.1上运行
function buildTable(data) {
	var table = document.createElement("table");

	var header = document.createElement("tr");
	var fields = Object.keys(data[0]);
	fields.forEach(function(item){
		var th = document.createElement("th");
		th.textContent = item;
		header.appendChild(th);
	});

	table.appendChild(header);

	data.forEach(function(obj){
		var tr = document.createElement("tr");
		fields.forEach(function(item){
			var td = document.createElement("td");
			td.textContent = obj[item];
			if(typeof obj[item] === 'number') {
				td.style.textAlign = "right";
			}
			tr.appendChild(td);
		});
		table.appendChild(tr);
	});
	return table;
}
