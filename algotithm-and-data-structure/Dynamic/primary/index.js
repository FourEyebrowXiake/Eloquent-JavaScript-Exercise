
function lis(arry, num) {
	var len = 1;
	var d=[];
	for(var i = 0; i < num; ++i) {
		d[i] = 1;
		for(var j = 0; j < i; ++j) {
			if(arry[j] <= arry[i] && (d[j]+1) > d[i]) {
				d[i] = d[j]+1;
			}
		}
		if(d[i]>len) {
			len = d[i];
		}
	}
	return len;
}

var arry = [5, 3, 4, 8, 6, 7];
console.log(lis(arry,6));
console.log(lis(arry,5));
console.log(lis(arry,4));
