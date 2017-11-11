function d(s) {
	var min = [0];
	var coins = [1, 3, 5];
	for(var i = 1; i <= s; i++){
		min[i] = min[i-1]+1;
		for(var j =0;j <coins.length; j++) {
			var vj =coins[j];
			if((vj <= i) && ((min[i-vj]+1) < min[i])) {
				min[i] = min[i - vj] + 1;
				continue;
			}
		}
	}

	return min;
}
//console.log(d(2));
console.log(d(3));
console.log(d(6));
console.log(d(11));
