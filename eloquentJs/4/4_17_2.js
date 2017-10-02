function reverseArray(arry) {
	var new_arry = [];
	for (var i =arry.length -1; i>=0;i--){
		new_arry.push(arry[i]);
	}
	return new_arry;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
