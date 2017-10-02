function max(a, b) {
	if(a === b){
		return a;
	}
	if(typeof a === typeof b) {
		return (a > b) ? a : b;
	}
	return (typeof a > typeof b) ? a : b;
}

Array.matrix = function (m, n, init) {
	var matr = [];
	for (var i=0; i<m; i++){
		var a = [];
		for(var j=0; j<n; j++){
			a[j] = init;
		}
		matr[i] = a;
	}
	return matr;
}

function lcs(str1, str2, m, n) {

	var table = Array.matrix(m+1, n+1, 0);

	for(var i=0; i<(m+1); i++){
		for (var j=0; j<(n+1); j++){

			if(i==0 || j==0) {
				table[i][j] = 0;
			} else if (str1[i-1] == str2[j-1]) {
				table[i][j] = table [i-1][j-1] + 1;
			} else {
				table[i][j] = max(table[i-1][j], table[i][j-1]);
			}

		}
	}

	return table;
}

var Y = "ABCBDAB";
var X = "BDCABA";

console.log(lcs(X, Y, X.length, Y.length));
